import React from "react";
import PropTypes from "prop-types";
import withStyles from "@mui/styles/withStyles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GamepadIcon from "@mui/icons-material/Gamepad";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    marginRight: theme.spacing(2),
  },
});

class Header extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <GamepadIcon className={classes.logo} />
            <Typography variant="h5">How unlucky am I?</Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
