import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MountIcon from '@material-ui/icons/AirplanemodeActive';
import PetsIcon from '@material-ui/icons/Pets';
import ToysIcon from '@material-ui/icons/Toys';
import { NavLink } from 'react-router-dom';

const styles = {
    root: {
    }
};

class Navigation extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction label="Mounts" icon={<MountIcon />} component={NavLink} to="/mounts"/>
                <BottomNavigationAction label="Pets" icon={<PetsIcon />} component={NavLink} to="/pets"/>
                <BottomNavigationAction label="Toys" icon={<ToysIcon />} component={NavLink} to="/toys"/>
            </BottomNavigation>
        );
    }
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);
