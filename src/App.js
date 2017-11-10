import React, { Component } from 'react';

import {
    Link,
    Route,
    BrowserRouter
} from 'react-router-dom';

import Items from './data/items';
import Logo from './components/Logo.js';
import Category from './components/Category.js';
import Result from './components/Result.js';

import Home from './home.js';
import Mounts from './wow/mounts.js';
import Pets from './wow/pets.js';
import Toys from './wow/toys.js';

import { Button, ButtonGroup, ControlLabel, FormControl, FormGroup, Grid, Jumbotron, Row } from 'react-bootstrap';

import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            item: {},
            optionsdata: Items.mounts,
            tries:  0,
            type: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
    }

    handleInputChange = (event) => {
        this.setState({tries: event.target.value});
    };

    handleSelectChange = (event) => {
        let value = this.state.optionsdata.filter(function(item) {
            return item.id === Number(event.target.value);
        });
        this.setState({item: value[0]});
    };

    handleTypeChange = (event) => {
        Array.prototype.filter.call(event.target.parentNode.children, function(child) {
            if (child !== event.target) {
                child.classList.remove('active');
            }
        });
        event.target.classList.add('active');

        this.setState({optionsdata: Items[event.target.dataset.type]});
    };

    createSelectItems = () => {
        return this.state.optionsdata.map((data) => {
            return (<option key={data.id} value={data.id}>{data.name}</option>)
        });
    };

    render() {
        return (
            <BrowserRouter>
                <div className="hulai">
                    <Jumbotron>
                        <Logo/>
                        <Link to="/"><h1>How unlucky am I?</h1></Link>
                    </Jumbotron>

                    <Grid>
                        <ButtonGroup>
                            <Link to="/mounts"><Button>Mounts</Button></Link>
                            <Link to="/pets"><Button>Pets</Button></Link>
                            <Link to="/"><Button>Toys</Button></Link>
                        </ButtonGroup>

                        <Row>
                            <FormGroup className="col-sm-12 col-md-6" bsSize="large">
                                <ControlLabel>Tries: </ControlLabel>
                                <FormControl componentClass="input" type="number" value={this.state.tries}
                                             onChange={this.handleInputChange}/>
                            </FormGroup>

                            <div className="content">
                                <Route exact path="/" component={Home}/>

                                <Route path='/Mounts' render={(props) => (
                                    <Mounts {...props} data={
                                        '1'
                                    }/>
                                )}/>

                                <Route path="/pets" component={Pets}/>
                                <Route path="/toys" component={Toys}/>
                            </div>

                            <FormGroup className="col-sm-12 col-md-6" bsSize="large">
                                <ControlLabel>Item: </ControlLabel>
                                <FormControl componentClass="select" placeholder="Select item"
                                             onChange={this.handleSelectChange}>
                                    {this.createSelectItems()}
                                </FormControl>
                            </FormGroup>
                        </Row>

                        <Result item={this.state.item} tries={this.state.tries}/>
                    </Grid>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
