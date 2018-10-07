import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Items from '../data/items';

const styles = theme => ({
    root: {
        minWidth: 120,
    }
});

class ItemSelect extends React.Component {

    state = {
        item: '',
        name: 'item'
    };

    handleSelectChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        event.type = this.props.type;
        this.props.handleSelectChange(event);
    };

    createSelectItems = () => {
        return Items[this.props.type].map((data) => {
            return (<MenuItem key={data.id} value={data.id}>{data.name}</MenuItem>)
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <FormControl className={classes.root}>
                <InputLabel htmlFor="item">Item</InputLabel>
                <Select
                    value={this.state.item}
                    onChange={this.handleSelectChange}
                    inputProps={{
                        name: 'item',
                        id: 'item',
                    }}
                >
                    {this.createSelectItems()}
                </Select>
            </FormControl>
        );
    }
}

ItemSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemSelect);
