import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import LinearProgress from '@material-ui/core/LinearProgress'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Pencil from '@material-ui/icons/Edit'
import { fieldsByName } from './SupportCustomFields'
import * as React from 'react'

function CustomFieldRow({ field, custom_fields, onClick }: any) {
  return (
    <TableRow>
      <TableCell>{field && field.title ? field.title : ''}</TableCell>
      <TableCell align="right" style={{ whiteSpace: 'nowrap' }}>
        {!field ? '' : custom_fields && field.options && field.options[custom_fields[field.id]]
          ? field.options[custom_fields[field.id]]
          : custom_fields 
          ? custom_fields[field.id]
          : field.id}{' '}
        <IconButton onClick={onClick}>
          <Pencil style={{ height: 14, width: 14 }} />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

export function SupportDetails({ values, loading, setActiveStep }: any) {
  return (
    <div>
      <Table style={{ marginBottom: 8 }}>
        <TableBody>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell align="right" style={{ whiteSpace: 'nowrap' }}>
              {values.email}
              <IconButton onClick={() => setActiveStep(0)}>
                <Pencil style={{ height: 14, width: 14 }} />
              </IconButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Subject</TableCell>
            <TableCell align="right" style={{ whiteSpace: 'nowrap' }}>
              {values.subject}
              <IconButton onClick={() => setActiveStep(1)}>
                <Pencil style={{ height: 14, width: 14 }} />
              </IconButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell align="right" style={{ whiteSpace: 'nowrap' }}>
              {values.description}
              <IconButton onClick={() => setActiveStep(2)}>
                <Pencil style={{ height: 14, width: 14 }} />
              </IconButton>
            </TableCell>
          </TableRow>
          <CustomFieldRow
            custom_fields={values.custom_fields}
            field={fieldsByName.PrimaryTopic}
            onClick={() => setActiveStep(3)}
          ></CustomFieldRow>
          <CustomFieldRow
            custom_fields={values.custom_fields}
            field={fieldsByName.SecondaryTopic}
            onClick={() => setActiveStep(4)}
          ></CustomFieldRow>
          <CustomFieldRow
            custom_fields={values.custom_fields}
            field={fieldsByName.Platform}
            onClick={() => setActiveStep(5)}
          ></CustomFieldRow>
        </TableBody>
      </Table>
      <Button
        type="submit"
        fullWidth
        disabled={loading}
        variant="contained"
        style={{
          flexWrap: 'wrap',
          alignItems: 'stretch',
          justifyContent: 'stretch',
          margin: 0,
          padding: 0
        }}
        classes={{
          label: 'flex-column'
        }}
        color="primary"
      >
        {loading && <LinearProgress style={{ width: '100%' }} />}
        <div style={{ padding: 6, width: '100%', textAlign: 'center' }}>Submit</div>
      </Button>
    </div>
  )
}
