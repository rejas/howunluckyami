import React, { Component } from 'react';
import logo from './logo.svg';
import Result from './components/Result.js';
import './main.js';
import './App.css';

import Items from './data/items';

import { Button, ButtonGroup, ControlLabel, FormControl, FormGroup, Grid, Jumbotron, Row } from 'react-bootstrap';

class Category extends React.Component {
    render() {
        return  (
            <Button>{this.props.type}</Button>
        )
    }
}

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            type:   '',
            tries:  1,
            rate:   1,
            result: 0
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    createSelectItems = () => {
        let items = [];
        for (let i = 0; i < Items.mounts.length; i++) {
            items.push(<option key={Items.mounts[i].id} value={Items.mounts[i].rate}>{Items.mounts[i].name}</option>);
        }
        return items;
    };

    handleInputChange = (event) => {
        this.setState({tries: event.target.value});
    };

    handleSelectChange = (event) => {
        this.setState({rate: event.target.value});
    };

    handleTypeChange = (event) => {
        this.setState({type: event.target.value});
    };

    render() {
        return (
            <div className="hulai">

                <Jumbotron>
                    <img src={logo} className="hulai-logo" alt="logo" />
                    <h1>How unlucky am I?</h1>
                </Jumbotron>

                <Grid>
                    <ButtonGroup>
                        <Category type={'mounts'} />
                        <Category type={'pets'} />
                        <Category type={'toys'} />
                    </ButtonGroup>

                    {/*
                    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                        <ToggleButton value={this.props.type}>{this.props.type}</ToggleButton>
                        <ToggleButton value={this.props.type}>{this.props.type}</ToggleButton>
                        <ToggleButton value={this.props.type}>{this.props.type}</ToggleButton>
                    </ToggleButtonGroup>
                    */}

                    <Row>
                        <FormGroup className="col-sm-12 col-md-6" bsSize="large">
                            <ControlLabel>Tries: </ControlLabel>
                            <FormControl componentClass="input" type="number" value={this.state.tries}
                                         onChange={this.handleInputChange}/>
                        </FormGroup>

                        <FormGroup className="col-sm-12 col-md-6" bsSize="large">
                            <ControlLabel>Item: </ControlLabel>
                            <FormControl componentClass="select" placeholder="Select item"
                                         onChange={this.handleSelectChange}>
                                {this.createSelectItems()}
                            </FormControl>
                        </FormGroup>
                    </Row>

                    <Result tries={this.state.tries} rate={this.state.rate}/>
                </Grid>
            </div>
        );
    }
}

export default App;
