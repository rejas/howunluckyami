import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: "center"
    },
    title: {
        marginBottom: theme.spacing.unit * 2
    }
});

function Info(props) {
    const { classes } = props;

    return (
        <Paper className={classes.paper}>
            <Typography variant="h5" className={classes.title}>
                Select a category and item, enter your tries and find out how
                unlucky you really are.
            </Typography>
        </Paper>
    );
}

Info.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Info);
