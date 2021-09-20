import React from "react";
import PropTypes from "prop-types";
import withStyles from "@mui/styles/withStyles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField/TextField";
import Typography from "@mui/material/Typography/Typography";
import Grid from "@mui/material/Grid/Grid";
import Items from "../data/items";

const styles = (theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(2),
    textAlign: "center",
  },
});

class ItemSelect extends React.Component {
  state = {
    item: "",
    tries: "",
  };

  handleInputChange = (event) => {
    this.setState({ tries: event.target.value });
    event.tries = event.target.value;
    this.props.handleInputChange(event);
  };

  handleSelectChange = (event) => {
    this.setState({ item: event.target.value });
    event.item = this.props.type;
    this.props.handleSelectChange(event);
  };

  createSelectItems = () => {
    return Items[this.props.type].map((data) => {
      return (
        <MenuItem key={data.id} value={data.id}>
          {data.name}
        </MenuItem>
      );
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper elevation={2} className={classes.root}>
        <Grid
          container
          spacing={3}
          className={classes.grid}
          justifyContent="center"
        >
          <Grid item xs={12}>
            <Typography variant="h5" className={classes.title}>
              Select a category, an item and enter your tries.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Tries"
              type="number"
              value={this.state.tries}
              onChange={this.handleInputChange}
              inputProps={{
                name: "tries",
                id: "tries",
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor="item">Item</InputLabel>
              <Select
                value={this.state.item}
                onChange={this.handleSelectChange}
                inputProps={{
                  name: "item",
                  id: "item",
                }}
              >
                {this.createSelectItems()}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

ItemSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemSelect);
