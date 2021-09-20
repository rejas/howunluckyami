import React from "react";
import PropTypes from "prop-types";
import withStyles from "@mui/styles/withStyles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const styles = (theme) => ({
  card: {
    textAlign: "center",
  },
  title: {
    marginBottom: theme.spacing(2),
  },
});

function Result(props) {
  const { classes, item, tries } = props;

  let result = Math.floor((1 - Math.pow(1 - item.rate, tries)) * 10000) / 100,
    link = "http://www.wowhead.com/item=" + item.id;

  if (isNaN(result)) {
    result = 0;
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          variant="h5"
          className={classes.title}
          color="textSecondary"
        >
          The chance of dropping{" "}
          <a target="_blank" href={link} rel="noopener noreferrer">
            {item.name}
          </a>{" "}
          at least once in your runs is:
        </Typography>
        <Typography variant="h4" component="h2">
          {result} %
        </Typography>
      </CardContent>
      <CardActions>
        {item.id && (
          <Button
            target="_blank"
            href={link}
            rel="noopener noreferrer"
            color="secondary"
            size="small"
          >
            More info
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

Result.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Result);
