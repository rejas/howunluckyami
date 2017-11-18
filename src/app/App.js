import React, { Component } from 'react';

import {
    HashRouter,
    NavLink,
    Route
} from 'react-router-dom';

import Data         from '../data/items.js';
import Header       from '../components/header/Header.js';
import Home         from '../components/Home.js';
import ItemSelect   from '../components/ItemSelect.js';
import Result       from '../components/Result.js';

import MountIcon    from '../img/mounts.jpg';
import PetIcon      from '../img/pets.jpg';
import ToyIcon      from '../img/toys.jpg';

import { ControlLabel, FormControl, FormGroup, Grid, Row, Thumbnail } from 'react-bootstrap';

import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            item: {},
            tries: 0,
            type: ''
        };

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
        return (
            <HashRouter>
                <div className="hulai">
                    <Header />

                    <Grid>
                        <Row>
                            <NavLink className="col-sm-12 col-md-4" to="/mounts"><Thumbnail alt="Mounts" src={MountIcon} /></NavLink>
                            <NavLink className="col-sm-12 col-md-4" to="/pets"><Thumbnail alt="Pets" src={PetIcon} /></NavLink>
                            <NavLink className="col-sm-12 col-md-4" to="/toys"><Thumbnail alt="Toys" src={ToyIcon} /></NavLink>
                        </Row>

                        <Row>
                            <FormGroup className="col-sm-12 col-md-6" bsSize="large">
                                <ControlLabel>Tries: </ControlLabel>
                                <FormControl componentClass="input" type="number" value={this.state.tries}
                                             onChange={this.handleInputChange}/>
                            </FormGroup>

                            <div className="content">
                                <Route exact path="/" component={Home}/>

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
                            </div>
                        </Row>

                        <Result item={this.state.item} tries={this.state.tries}/>
                    </Grid>
                </div>
            </HashRouter>
        );
    }
}

export default App;
