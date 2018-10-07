import React from "react";
import { HashRouter } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CSSBaseline from "@material-ui/core/CssBaseline";
import theme from "../data/theme";
import Main from "../container/wow";

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CSSBaseline />
        <HashRouter>
          <Main />
        </HashRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
