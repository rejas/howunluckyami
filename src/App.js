import React, { Component } from 'react';

import {
    HashRouter,
    Link,
    Route
} from 'react-router-dom';

import Data         from './data/items.js';
import ItemSelect   from './ItemSelect.js';
import Logo         from './components/logo/Logo.js';
import Result       from './components/Result.js';

import Home from './home.js';

import { Button, ButtonGroup, ControlLabel, FormControl, FormGroup, Grid, Jumbotron, Row } from 'react-bootstrap';

import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            item: {},
            tries:  0,
            type: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
    };

    handleInputChange = (event) => {
        this.setState({tries: event.target.value});
    };

    handleSelectChange = (event) => {

        let value = Data.filter(function(item) {
            return item.id === Number(event.target.value);
        });

        this.setState({item: value[0]});
    };

    handleTypeChange = (event) => {
        console.log(event);
        //this.setState({type: event.target.dataset.type});
    };

    render() {
        return (
            <HashRouter>
                <div className="hulai">
                    <Jumbotron>
                        <Logo/>
                        <Link to="/"><h1>How unlucky am I?</h1></Link>
                    </Jumbotron>

                    <Grid>
                        <ButtonGroup onClick={this.handleTypeChange}>
                            <Link to="/mounts"><Button>Mounts</Button></Link>
                            <Link to="/pets"><Button>Pets</Button></Link>
                            <Link to="/toys"><Button>Toys</Button></Link>
                        </ButtonGroup>

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
