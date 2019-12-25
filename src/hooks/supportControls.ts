import * as React from 'react'

export interface ITicketValues {
  email: string
  subject: string
  description: string
  custom_fields: any
}

export interface ISupportOptions {
  open: boolean
  initial: ITicketValues
  steps: React.ReactNode[]
  createTicketUri: string
  formatTicket?: (values: ITicketValues) => any
  onSuccess?: (data: any) => void
  onError?: (err: any) => void
}

export interface ISupportValues {
  activeStep: number
  loading: boolean
  error: string
  values: any
}

export interface ISupportActions {
  setValue: (name: string, value: any) => void
  setCustomField: (name: string, value: any) => void
  setActiveStep: (step: number) => void
  setError: (error: string) => void
  handleBack: () => void
  handleNext: () => void
  handleSubmit: (ev?: any) => void
}

export function defaultTicketFormatter (values: ITicketValues) {
  if (!values.email) throw new Error('Email is required')
  if (!values.subject) throw new Error('Subject is required')
  if (!values.description) throw new Error('Description is required')
  return {
    ticket: {
      subject: values.subject,
      requester: { email: values.email },
      comment: { body: values.description },
      custom_fields: Object.keys(values.custom_fields || {}).map(id => ({
        id,
        value: values.custom_fields[id]
      }))
    }
  }
}

export function useSupportControls({
  open,
  initial,
  steps,
  createTicketUri,
  formatTicket = defaultTicketFormatter,
  onSuccess,
  onError
}: ISupportOptions): [ISupportValues, ISupportActions] {
  const stepCount = (steps || []).length
  const [activeStep, setActiveStep] = React.useState(0)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')
  const [values, setValues] = React.useState<any>({
    custom_fields: {},
    ...initial
  })
  const setValue = (name: string, value: any) => setValues((vs: any) => ({ ...vs, [name]: value }))
  const setCustomField = (name: string, value: any) =>
    setValues((vs: any) => ({
      ...vs,
      custom_fields: { ...vs.custom_fields, [name]: value }
    }))
  const handleBack = () => setActiveStep(activeStep - 1)
  const handleNext = () => setActiveStep(activeStep + 1)
  const handleSubmit = async (ev?: any) => {
    if (ev && ev.preventDefault) ev.preventDefault()
    if (activeStep < stepCount - 1) {
      handleNext()
    } else {
      setLoading(true)
      try {
        setError('')
        if (error) await wait(200)
        const ticketData = formatTicket(values)
        const res = await fetch(createTicketUri, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(ticketData)
        })
        const data = await res.json()
        if (data && data.error) throw new Error(data.error)
        setLoading(false)
        if (onSuccess) onSuccess(data)
      } catch (e) {
        console.log(e)
        setError(e.message)
        setLoading(false)
        if (onError) onError(e)
      }
    }
  }

  return [
    {
      activeStep,
      loading,
      error,
      values
    },
    {
      setValue,
      setCustomField,
      setActiveStep,
      setError,
      handleBack,
      handleNext,
      handleSubmit
    }
  ]
}

function wait(timeout = 0) {
  return new Promise(res => setTimeout(() => res(), timeout))
}
