import { createTheme } from '@material-ui/core/styles';
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";

import "typeface-roboto";

const theme = createTheme({
  palette: {
    primary: {
      light: red[300],
      main: red[500],
      dark: red[700],
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
  },
});

export default theme;
