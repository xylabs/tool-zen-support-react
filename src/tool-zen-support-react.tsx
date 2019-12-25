import * as React from "react"
import * as ReactDOM from "react-dom"
import { CoinSupportForm } from './components/SupportForm'

export * from './components/SupportForm'

type IOnReady = (form: { setOpen: (open: boolean) => void }) => (void | (() => void))
type ICmp = typeof CoinSupportForm

function ControlledSupportForm ({ cmp: Cmp, onReady, open: initiallyOpen, ...rest }: { cmp: ICmp, onReady: IOnReady, open: boolean }) {
  const [open, setOpen] = React.useState(initiallyOpen || false)
  const setClosed = () => setOpen(false)
  React.useEffect(function () {
    if (onReady) {
      return onReady({ setOpen })
    }
  }, [])

  return <Cmp open={open} onClose={setClosed} {...rest} />
}

export function renderCoinSupportForm (element: any, onReady: IOnReady, rest: any) {
  return ReactDOM.render(<ControlledSupportForm cmp={CoinSupportForm} onReady={onReady} {...rest} />, element)
}