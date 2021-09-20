import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import CSSBaseline from "@mui/material/CssBaseline";
import theme from "../data/theme";
import Main from "../container/wow";

class App extends React.Component {
  render() {
    return (
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CSSBaseline />
          <BrowserRouter>
            <Main />
          </BrowserRouter>
        </ThemeProvider>
      </StyledEngineProvider>
    );
  }
}

export default App;
