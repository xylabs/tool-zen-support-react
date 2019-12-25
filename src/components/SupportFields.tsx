import * as React from 'react'
import TextField from '@material-ui/core/TextField'

export function SupportEmail({ values, setValue }: any) {
  return (
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
  )
}

export function SupportSubject({ values, setValue }: any) {
  return (
    <TextField
      label="Subject"
      helperText="Please give a brief 5-7 word description of the request"
      value={values.subject || ''}
      onChange={ev => setValue('subject', ev.target.value)}
      required
      fullWidth
      autoFocus
    />
  )
}

export function SupportDescription({ values, setValue }: any) {
  return (
    <TextField
      label="Description"
      helperText={
        'Please enter the details of your request. If you have multiple requests, please enumerate them with a "1. 2. 3." to separate each question.'
      }
      value={values.description || ''}
      onChange={ev => setValue('description', ev.target.value)}
      required
      fullWidth
      multiline
      rows={5}
      rowsMax={5}
      autoFocus
    />
  )
}

export function SupportAttachments() {
  return (
    <TextField
      label="Attachments"
      helperText="Add file or drop files here"
      inputProps={{ multiple: true }}
      type="file"
      fullWidth
    />
  )
}