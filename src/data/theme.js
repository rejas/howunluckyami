import { createTheme, adaptV4Theme } from "@mui/material/styles";
import { red, green } from "@mui/material/colors";

import "typeface-roboto";

const theme = createTheme(
  adaptV4Theme({
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
  })
);

export default theme;
