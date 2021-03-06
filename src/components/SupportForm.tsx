import { ThemeProvider } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MobileStepper from '@material-ui/core/MobileStepper'
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'
import Slide from '@material-ui/core/Slide'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import Typography from '@material-ui/core/Typography'
import Close from '@material-ui/icons/Close'
import ErrorIcon from '@material-ui/icons/Error'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import * as React from 'react'
import { useCaptchaControls } from '../hooks/captchaControls'
import { useSupportControls, defaultTicketFormatter } from '../hooks/supportControls'
import { fieldsByName } from './SupportCustomFields'
import { SupportEmail, SupportSubject, SupportDescription } from './SupportFields'
import { SupportDetails } from './SupportDetails'
import CssBaseline from '@material-ui/core/CssBaseline'
import coinTheme from '../themes/coin'

interface ISupportFormProps {
  initial?: any
  steps?: React.ReactNode[]
  open: boolean
  onClose?: () => void
  onSuccess?: (data: any) => void
  onError?: (err: any) => void
}

interface ISupportFormOptions {
  recaptchaKey: string
  recaptchaAction: string
  createTicketUri: string
}

export const SupportForm = ({
  recaptchaKey,
  recaptchaAction = 'support',
  createTicketUri,
  initial,
  open,
  onClose,
  onSuccess,
  onError,
  steps = [
    SupportEmail,
    SupportSubject,
    SupportDescription,
    fieldsByName.PrimaryTopic.Select,
    fieldsByName.SecondaryTopic.TextField,
    fieldsByName.Platform.Select,
    // SupportAttachments,
    SupportDetails
  ]
}: ISupportFormProps & ISupportFormOptions) => {
  const stepCount = (steps || []).length
  const [
    { token, error: recaptchaError },
    { setError: setRecaptchaError }
  ] = useCaptchaControls({ key: recaptchaKey, action: recaptchaAction })
  const [
    { activeStep, prevStep, loading, error: supportError, values },
    {
      setValue,
      setCustomField,
      selectCustomField,
      setActiveStep,
      handleBack,
      handleNext,
      handleSubmit,
      setError: setSupportError
    }
  ] = useSupportControls({
    open,
    initial,
    steps,
    onSuccess,
    onError,
    createTicketUri,
    formatTicket: v => ({ token, ...defaultTicketFormatter(v) })
  })

  return (
    <Modal
      open={open}
      onEscapeKeyDown={onClose}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <>
        <Paper
          style={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'rgba(66, 66, 66, 0.8)',
            position: 'absolute'
          }}
        >
          <div
            style={{
              padding: 80,
              paddingLeft: 12,
              paddingRight: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              position: 'absolute',
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
              overflow: "auto",
              WebkitOverflowScrolling: "touch"
            }}
          >
            <form onSubmit={handleSubmit} style={{ width: 600, maxWidth: '100%' }}>
              {(steps || []).map((children, i) => 
                <Slide
                  key={`${i}_input`}
                  direction={prevStep > activeStep ? 'down' : 'up'}
                  in={i === activeStep}
                  unmountOnExit
                >
                  {typeof children === 'function'
                    ? (children as any)({
                        values,
                        setValue,
                        setCustomField,
                        selectCustomField,
                        setActiveStep,
                        loading,
                        error: recaptchaError || supportError
                      })
                    : children}
                </Slide>
              )}
            </form>
          </div>
          {onClose ? <div style={{ textAlign: 'right', padding: 8, position: "absolute", top: 0, right: 0 }}>
            <IconButton onClick={onClose}>
              <Close />
            </IconButton>
          </div> : null}
          <div style={{ flexGrow: 1 }} />
          {activeStep === stepCount - 1 ? null : (
            <MobileStepper
              variant="progress"
              steps={stepCount}
              activeStep={activeStep}
              style={{ position: 'fixed', bottom: 0 }}
              nextButton={
                <Button onClick={handleNext} disabled={activeStep === stepCount - 1}>
                  Next
                  <KeyboardArrowRight />
                </Button>
              }
              backButton={
                <Button onClick={handleBack} disabled={activeStep === 0}>
                  <KeyboardArrowLeft />
                  Back
                </Button>
              }
            ></MobileStepper>
          )}
        </Paper>
        <Snackbar
          open={!!(recaptchaError || supportError)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
        >
          <SnackbarContent
            style={{ backgroundColor: '#424242', color: '#ee7268' }}
            action={[
              <Button
                key="close"
                onClick={() => {
                  if (setRecaptchaError) setRecaptchaError('')
                  if (setSupportError) setSupportError('')
                }}
              >
                Dismiss
              </Button>
            ]}
            message={
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <ErrorIcon style={{ marginRight: '0.2rem' }} />
                {recaptchaError || supportError}
              </span>
            }
          />
        </Snackbar>
      </>
    </Modal>
  )
}

export const CoinSupportForm = (props: ISupportFormProps & Partial<ISupportFormOptions>) => {
  return (
    <ThemeProvider theme={coinTheme}>
      <CssBaseline />
      <SupportForm 
        recaptchaKey="6LcJyckUAAAAAG66729AOeCo2WMHEoVCP5IfSZsf"
        createTicketUri="https://us-central1-xyo-network-1522800011804.cloudfunctions.net/coin_subscriptions/create-zen-ticket"
        recaptchaAction="support"
        {...props} 
      />
    </ThemeProvider>
  )
}

export default SupportForm
