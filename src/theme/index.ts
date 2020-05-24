import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#002369',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
});
