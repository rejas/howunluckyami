import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import {withStyles} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Data from '../data/items.js';
import Header from '../components/Header';
import ItemSelect from '../components/ItemSelect';
import Result from '../components/Result';
import Navigation from "../components/Navigation";

const styles = theme => ({
    root: {
    }
});

class App extends React.Component {

    state = {
        item: '',
        tries: '',
        type: ''
    };

    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    };

    handleInputChange = (event) => {
        this.setState({tries: event.target.value});
    };

    handleSelectChange = (event) => {
        let value = Data[event.type].filter(function(item) {
            return item.id === Number(event.target.value);
        });
        this.setState({item: value[0]});
    };

    render() {
        const { classes } = this.props;

        return (
            <HashRouter>
                <Grid container spacing={24}
                      justify="center">
                    <Grid item xs={12}>
                        <Header />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            id="standard-name"
                            label="Tries"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <Route exact path="/" render={(props) => (
                            <h2>Please select a type of item.</h2>
                        )}/>

                        <Route path='/mounts' render={(props) => (
                            <ItemSelect {...props}
                                        handleSelectChange={this.handleSelectChange} type='mounts'/>
                        )}/>

                        <Route path='/pets' render={(props) => (
                            <ItemSelect {...props}
                                        handleSelectChange={this.handleSelectChange} type='pets' />
                        )}/>

                        <Route path='/toys' render={(props) => (
                            <ItemSelect {...props}
                                        handleSelectChange={this.handleSelectChange} type='toys' />
                        )}/>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Result item={this.state.item} tries={this.state.tries}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Navigation />
                    </Grid>
                </Grid>
            </HashRouter>
        );
    }
}

export default withStyles(styles)(App);
