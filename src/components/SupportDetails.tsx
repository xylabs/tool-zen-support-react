import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import LinearProgress from '@material-ui/core/LinearProgress'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Pencil from '@material-ui/icons/Edit'
import * as React from 'react'

export function SupportDetails({ values, loading, setActiveStep }: any) {
  return (
    <div>
      <Table style={{ marginBottom: 8 }}>
        <TableBody>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell align="right">
              {values.email}
              <IconButton onClick={() => setActiveStep(0)}>
                <Pencil style={{ height: 14, width: 14 }} />
              </IconButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Subject</TableCell>
            <TableCell align="right">
              {values.subject}
              <IconButton onClick={() => setActiveStep(1)}>
                <Pencil style={{ height: 14, width: 14 }} />
              </IconButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell align="right">
              {values.description}
              <IconButton onClick={() => setActiveStep(2)}>
                <Pencil style={{ height: 14, width: 14 }} />
              </IconButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Primary Topic</TableCell>
            <TableCell align="right">
              {values.custom_fields[360023229873]}
              <IconButton onClick={() => setActiveStep(3)}>
                <Pencil style={{ height: 14, width: 14 }} />
              </IconButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Additional Details</TableCell>
            <TableCell align="right">
              {values.custom_fields[360023229993]}
              <IconButton onClick={() => setActiveStep(4)}>
                <Pencil style={{ height: 14, width: 14 }} />
              </IconButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Platform</TableCell>
            <TableCell align="right">
              {values.custom_fields[360023202994]}{' '}
              <IconButton onClick={() => setActiveStep(5)}>
                <Pencil style={{ height: 14, width: 14 }} />
              </IconButton>
            </TableCell>
          </TableRow>
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
          padding: 0,
        }}
        classes={{
          label: 'flex-column',
        }}
        color="primary"
      >
        {loading && <LinearProgress style={{ width: '100%' }} />}
        <div style={{ padding: 6, width: '100%', textAlign: 'center' }}>
          Submit
        </div>
      </Button>
    </div>
  )
}