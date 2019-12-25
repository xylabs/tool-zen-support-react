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
    return `export const ${name}Field = ({ values, setCustomField }: any) => {
  return <TextField 
    label={${JSON.stringify(v.raw_title || '')}}
    helperText={${JSON.stringify(v.raw_description || '')}}
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
</TextField>`
        : '/>'
    }
}`
  })
  const content = `
import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

${fields.join('\n\n')}
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