import React, { Component } from 'react';
import logo from './logo.svg';
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

function Result(props) {
    var result = (1 - ( Math.pow(1 - props.rate, props.tries)));

    /*
     result = $.grep(items[selectedType], function(e){ return e.id === val; });
     if (result.length !== 1) {
     // nothing or multiple items found
     return;
     }
     */

    //this.setState({result: 1 - ( Math.pow(1 - 0.25, val))});
    //this.setState({result: 1 - ( Math.pow(1 - result[0].rate, val))});
    // $('.js-result').text(parseFloat(result*100).toFixed(2) + '%');
    // $('.js-link').attr('href', 'http://www.wowhead.com/item=' + val);


    return (
        <Jumbotron>
            <p className="h3 col-sm-12 text-center">The chance of dropping the item at least once in you runs is:<br/>
                <span className="h2 js-result text-success">{result}</span>
            </p>
            <a className="js-link" target="_blank">link to wowhead page</a>
        </Jumbotron>
    );
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
        console.log(Items);

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
