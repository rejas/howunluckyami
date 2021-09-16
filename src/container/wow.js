import React from "react";
import { Route } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Items from "../data/items.js";
import Header from "../components/Header";
import Info from "../components/Info";
import ItemSelect from "../components/ItemSelect";
import Navigation from "../components/Navigation";
import Result from "../components/Result";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
  },
  grid: {
    padding: theme.spacing(2),
  },
  ad: {
    marginBottom: theme.spacing.navHeight + theme.spacing(1),
  },
});

class Wow extends React.Component {
  state = {
    item: "",
    tries: "",
    type: "",
  };

  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleInputChange = (event) => {
    this.setState({ tries: event.tries });
  };

  handleSelectChange = (event) => {
    let value = Items[event.type].filter(function (item) {
      return item.id === Number(event.target.value);
    });
    this.setState({ item: value[0] });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header />

        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={12} md={6}>
            <Route exact path="/" component={Info} />

            <Route
              path="/mounts"
              render={(props) => (
                <ItemSelect
                  {...props}
                  handleInputChange={this.handleInputChange}
                  handleSelectChange={this.handleSelectChange}
                  type="mounts"
                />
              )}
            />

            <Route
              path="/pets"
              render={(props) => (
                <ItemSelect
                  {...props}
                  handleInputChange={this.handleInputChange}
                  handleSelectChange={this.handleSelectChange}
                  type="pets"
                />
              )}
            />

            <Route
              path="/toys"
              render={(props) => (
                <ItemSelect
                  {...props}
                  handleInputChange={this.handleInputChange}
                  handleSelectChange={this.handleSelectChange}
                  type="toys"
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Result item={this.state.item} tries={this.state.tries} />
          </Grid>
        </Grid>

        <Navigation />
      </div>
    );
  }
}

export default withStyles(styles)(Wow);
