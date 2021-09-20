import React from "react";
import PropTypes from "prop-types";
import withStyles from "@mui/styles/withStyles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const styles = (theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  title: {
    marginBottom: theme.spacing(2),
  },
});

function Info(props) {
  const { classes } = props;

  return (
    <Paper elevation={2} className={classes.paper}>
      <Typography variant="h5" className={classes.title}>
        Select a category and item, enter your tries and find out how unlucky
        you really are.
      </Typography>
    </Paper>
  );
}

Info.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Info);
