require('dotenv').config({ path: '.env.build' })
const fs = require('fs')
const fetch = require('isomorphic-fetch')
const { uniq, flatten } = require('lodash')
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

function toFaIcon (fieldName) {
  switch (fieldName) {
    case 'account_assistance': return '<i className="fas fa-user-circle"></i>';
    case 'bulk_purchase': return '<i className="fas fa-list-ol"></i>';
    case 'coin_app': return '<i className="fab fa-shirtsinbulk"></i>';
    case 'coin_app_subscription': return '<i className="fas fa-money-check-alt"></i>';
    case 'coin_branded_merchandise': return '<i className="fas fa-shopping-bag"></i>';
    case 'geodrops': return '<i className="fas fa-parachute-box"></i>';
    case 'other_app_feature': return '<i className="fas fa-cogs"></i>';
    case 'sentinel_sharing': return '<i className="fas fa-user-plus"></i>';
    case 'set_up_assistance': return '<i className="fas fa-user-circle"></i>';
    case 'withdrawals': return '<i className="fas fa-wallet"></i>';
    case 'geoclaims': return '<i className="fas fa-map-marked-alt"></i>';
    case 'hodl_rewards': return '<i className="fas fa-coins"></i>';
    case 'referral_rewards': return '<i className="fas fa-users"></i>';
    case 'coin_master_plan': return '<i className="fas fa-crown"></i>';
    case 'cancel_coin_subscription': return '<i className="fas fa-times"></i>';
    case 'change_account_information': return '<i className="fas fa-user-circle"></i>';
    case 'change_payment_method': return '<i className="fas fa-credit-card"></i>';
    case 'checkout_issues': return '<i className="fas fa-cash-register"></i>';
    case 'not_applicable': return '<i className="fas fa-times"></i>';
    case 'ios': return '<i className="fab fa-apple"></i>';
    default: return '';
  }
}

function toMaterialUiIcon (fieldName) {
  switch (fieldName) {
    case 'bug_or_error': return 'BugReport';
    case 'android': return 'Android';
    default: return '';
  }
}

function handleResult({ ticket_fields }) {
  const imports = uniq(flatten(ticket_fields.map((v) => {
    return flatten((v.custom_field_options || []).map(({ value }) => {
      console.log(value)
      const icon = toMaterialUiIcon(value) 
      if (icon) return [`import ${icon}Icon from '@material-ui/icons/${icon}'`, `export { default as ${icon}Icon } from '@material-ui/icons/${icon}'`]
      return []
    }))
  })))
  .filter(v => v)
  .join('\n')

  const fields = ticket_fields.map(v => {
    const fieldName = v.title.replace(/\W/g, '')
    return [fieldName, `{
      id: ${JSON.stringify(v.id)},
      name: ${JSON.stringify(fieldName)},
      title: ${JSON.stringify(v.raw_title || '')},
      description: ${JSON.stringify(v.raw_description || '')},
      options: ${v.custom_field_options && v.custom_field_options.length ? `{
        ${v.custom_field_options.map(({ name, value }) => `${JSON.stringify(value)}: ${JSON.stringify(name)}`).join(',')}
      }` : '{}'},
      ${v.custom_field_options && v.custom_field_options.length ? `Select: ({ values, selectCustomField }: any) => {
        return <div>${v.raw_description || v.raw_title  ? `<Typography variant="h5" style={{ marginBottom: '1rem' }}>
        ${v.raw_description || v.raw_title}
      </Typography>` : ''}<Grid container>
      ${(v.custom_field_options || [])
        .map(
          ({ name, value }) => `
          <Grid item xs={3}>
          <Box mb={3}>
          <Tooltip title="${name}">
            <Fab
              style={values.custom_fields && values.custom_fields[${JSON.stringify(
                v.id,
              )}] === ${JSON.stringify(value)} ? { border: "8px double" } : {}}
              color="primary"
              onClick={(ev: any) => selectCustomField(${JSON.stringify(v.id)}, ${JSON.stringify(value)})}>
              ${toMaterialUiIcon(value) ? `<${toMaterialUiIcon(value)}Icon />` : toFaIcon(value) || (name || '').slice(0, 1).toUpperCase()}
            </Fab>
          </Tooltip>
          </Box>
          </Grid>`,
        )
        .join('\n')}
      </Grid></div>
      },` : ''}
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
}`]
  })
  const content = `
import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Tooltip from '@material-ui/core/Tooltip'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import Box from '@material-ui/core/Box'
${imports}

${fields.map(([name, values]) => 
  `export const ${name} = ${values}`
).join('\n\n')}

export const fieldsByName = {
${fields.map(([name]) => name).join(',\n')}
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