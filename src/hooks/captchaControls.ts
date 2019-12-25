import * as React from 'react'

interface ICaptchaOptions {
  key: string
  action: string
}

interface ICaptchaValues {
  token: string
  error: string
}

interface ICaptchaActions {
  setError: (err: string) => void
  handleRecaptcha: () => void
}


export function useCaptchaControls({
  key,
  action
}: ICaptchaOptions): [ICaptchaValues, ICaptchaActions] {
  const [token, setToken] = React.useState('')
  const [error, setError] = React.useState('')

  const handleRecaptcha = () => {
    const gr = (window as any).grecaptcha
    if (!gr) return
    gr.ready(async () => {
      try {
        const t = await gr.execute(key, { action })
        setToken(t)
      } catch (e) {
        console.log('Recaptcha err', e)
        setError((e && e.message) || 'Unknown recaptcha error')
      }
    })
  }

  const handleRecaptchaError = (e: any) => {
    console.warn('Recaptcha error', e)
    setError((e && e.message) || 'Unknown recaptcha error')
  }

  React.useEffect(() => {
    const id = `recaptcha_${key}`
    const gr = (window as any).grecaptcha
    if (gr) {
      return handleRecaptcha()
    }

    const prevScript = document.getElementById(id)
    if (prevScript) {
      prevScript.addEventListener('load', handleRecaptcha)
      prevScript.addEventListener('error', handleRecaptchaError)
      handleRecaptcha()
      return () => {
        prevScript.removeEventListener('load', handleRecaptcha)
        prevScript.removeEventListener('error', handleRecaptchaError)
      }
    }

    const script = document.createElement('script')
    script.id = id
    script.src = `https://www.google.com/recaptcha/api.js?render=${key}`
    script.onload = handleRecaptcha
    script.onerror = handleRecaptchaError
    document.body.appendChild(script)
  }, [])

  return [{ token, error }, { handleRecaptcha, setError }]
}