import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import MountIcon from "../img/mounts.jpg";
import PetsIcon from "../img/pets.jpg";
import ToysIcon from "../img/toys.jpg";

const styles = {
    root: {
        height: "80px"
    }
};

class Navigation extends React.Component {
    state = {
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;

        return (
            <BottomNavigation
                value={this.state.value}
                onChange={this.handleChange}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction
                    label="Mounts"
                    icon={<Avatar src={MountIcon} />}
                    component={NavLink}
                    to="/mounts"
                />
                <BottomNavigationAction
                    label="Pets"
                    icon={<Avatar src={PetsIcon} />}
                    component={NavLink}
                    to="/pets"
                />
                <BottomNavigationAction
                    label="Toys"
                    icon={<Avatar src={ToysIcon} />}
                    component={NavLink}
                    to="/toys"
                />
            </BottomNavigation>
        );
    }
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navigation);
