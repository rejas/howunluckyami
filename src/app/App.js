import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CSSBaseline from "@material-ui/core/CssBaseline";
import theme from "../data/theme";
import Main from "../container/wow";

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CSSBaseline />
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
