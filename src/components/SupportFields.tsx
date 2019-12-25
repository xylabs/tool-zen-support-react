import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

export function SupportEmail({ values, setValue }: any) {
  return (
    <div>
      <Typography variant="h5" style={{ marginBottom: '1rem' }}>
        Submit Support Request
      </Typography>
      <TextField
        label="Email"
        helperText="Your email address"
        type="email"
        value={values.email || ''}
        onChange={ev => setValue('email', ev.target.value)}
        required
        fullWidth
        autoFocus
      />
    </div>
  )
}

export function SupportSubject({ values, setValue }: any) {
  return (
    <div>
      <Typography variant="h5" style={{ marginBottom: '1rem' }}>
        Please give a brief 5-7 word description of the request
      </Typography>
      <TextField
        label="Subject"
        value={values.subject || ''}
        onChange={ev => setValue('subject', ev.target.value)}
        required
        fullWidth
        autoFocus
      />
    </div>
  )
}

export function SupportDescription({ values, setValue }: any) {
  return (
    <div>
      <Typography variant="h5" style={{ marginBottom: '1rem' }}>
        Please enter the details of your request. If you have multiple requests, please enumerate them with a "1. 2. 3." to separate each question.
      </Typography>
      <TextField
        label="Description"
        value={values.description || ''}
        onChange={ev => setValue('description', ev.target.value)}
        required
        fullWidth
        multiline
        rows={5}
        rowsMax={5}
        autoFocus
      />
    </div>
  )
}

export function SupportAttachments() {
  return (
    <div>
      <Typography variant="h5" style={{ marginBottom: '1rem' }}>
        Add file or drop files here
      </Typography>
      <TextField
        label="Attachments"
        inputProps={{ multiple: true }}
        type="file"
        fullWidth
      />
    </div>
  )
}