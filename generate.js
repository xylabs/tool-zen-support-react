require('dotenv').config({ path: '.env.build' })
const fs = require('fs')
const fetch = require('isomorphic-fetch')
const zenApi = 'https://coinappco.zendesk.com/api/v2'
const user = process.env.ZENDESK_USER
const pass = process.env.ZENDESK_PASS
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Basic ${Buffer.from(`${user}:${pass}`).toString('base64')}`,
}

function handleError (err) {
  console.log('Error', err)
}

function handleResult({ ticket_fields }) {
  const fields = ticket_fields.map(v => {
    const name = v.title.replace(/\W/g, '')
    return `${name}: {
      id: ${JSON.stringify(v.id)},
      name: ${JSON.stringify(name)},
      title: ${JSON.stringify(v.raw_title || '')},
      description: ${JSON.stringify(v.raw_description || '')},
      options: ${v.custom_field_options && v.custom_field_options.length ? `{
        ${v.custom_field_options.map(({ name, value }) => `${JSON.stringify(value)}: ${JSON.stringify(name)}`).join(',')}
      }` : '{}'},
      TextField: ({ values, setCustomField }: any) => {
    return <div>${v.raw_description ? `<Typography variant="h5" style={{ marginBottom: '1rem' }}>
    ${v.raw_description}
  </Typography>` : ''}<TextField 
      label={${JSON.stringify(v.raw_title || '')}}
      value={values.custom_fields && values.custom_fields[${JSON.stringify(
        v.id,
      )}] || ''} 
      onChange={(ev: any) => setCustomField(${JSON.stringify(v.id)}, ev.target.value)} 
      fullWidth
      required
      ${v.type === 'description' ? 'multiline\n\t\trows={5}' : ''}
      ${
        v.custom_field_options && v.custom_field_options.length
          ? `select>${(v.custom_field_options || [])
              .map(
                ({ name, value }) => `
      <MenuItem value={${JSON.stringify(value)}}>${name}</MenuItem>`,
              )
              .join('\n')}
  </TextField></div>`
          : '/></div>'
      }
  }
},`
  })
  const content = `
import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'

export const fieldsByName = {
${fields.join('\n\n')}
}
`
  fs.writeFileSync('./src/components/SupportCustomFields.tsx', content, 'utf8')
}

fetch(
  `${zenApi}/ticket_fields.json`,
  {
    headers,
  },
)
.then(res => res.json())
.then(handleResult)
.catch(handleError)