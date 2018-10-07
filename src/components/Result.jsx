import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    minWidth: 275
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  }
};

function Result(props) {
  const { classes } = props;

  let result =
      Math.floor((1 - Math.pow(1 - props.item.rate, props.tries)) * 10000) /
      100,
    link = "http://www.wowhead.com/item=" + props.item.id;

  if (isNaN(result)) {
    result = 0;
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          The chance of dropping{" "}
          <a target="_blank" href={link} rel="noopener noreferrer">
            {props.item.name}
          </a>{" "}
          at least once in your runs is:
        </Typography>
        <Typography variant="headline" component="h2">
          {result} %
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={link} color="secondary" size="small">
          More info
        </Button>
      </CardActions>
    </Card>
  );
}

Result.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Result);
