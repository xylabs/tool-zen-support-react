import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#262525',
    },
    primary: { main: '#ee7268', contrastText: '#ffffff' },
    secondary: { main: '#32c688', contrastText: '#000000' },
  },
})