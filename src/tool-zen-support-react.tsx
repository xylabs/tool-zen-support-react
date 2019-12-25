import * as React from "react"
import * as ReactDOM from "react-dom"
import { CoinSupportForm } from './components/SupportForm'

export * from './components/SupportForm'

type IOnReady = (form: { setOpen: (open: boolean) => void }) => (void | (() => void))
type ICmp = typeof CoinSupportForm

function ControlledSupportForm ({ cmp: Cmp, onReady }: { cmp: ICmp, onReady: IOnReady }) {
  const [open, setOpen] = React.useState(true)
  const setClosed = () => setOpen(false)
  React.useEffect(function () {
    if (onReady) {
      return onReady({ setOpen })
    }
  }, [])

  return <Cmp open={open} onClose={setClosed} />
}

export function renderCoinSupportForm (element: any, onReady: IOnReady) {
  return ReactDOM.render(<ControlledSupportForm cmp={CoinSupportForm} onReady={onReady} />, element)
}