import React, { Component } from 'react';
import logo from './logo.svg';
import './main.js';
import './App.css';

import Items from './data/items';

import { ControlLabel, FormGroup, FormControl, Tabs, Tab } from 'react-bootstrap';

class Category extends React.Component {
    render() {
        return  (
            <Tab data-type="{this.props.type}" eventKey={1} title="{this.props.type}">TODO</Tab>
        )
    }
}

function Result(props) {
    return (
        <div className="jumbotron row">
            <p className="h3 col-sm-12 text-center">The chance of dropping the item at least once in you runs is:<br/>
                <span className="h2 js-result text-success">{props.value}</span>
            </p>
            <a className="js-link" target="_blank">link to wowhead page</a>
        </div>
    );
}

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tries: '',
            result: ''
        };
        console.log(Items);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    createSelectItems() {
        let items = [];
        for (let i = 0; i <= Items.mounts.length; i++) {
        //for (let i = 0; i <= this.props.maxValue; i++) {
            items.push(<option key={Items.mounts[i].rate} value={Items.mounts[i].id}>{Items.mounts[i].name}</option>);
            //here I will be creating my options dynamically based on
            //what props are currently passed to the parent component
        }
        return items;
    }

    handleInputChange(event) {
        const val = event.target.value;

        this.setState({tries: val});

        /*
        result = $.grep(items[selectedType], function(e){ return e.id === val; });
        if (result.length !== 1) {
            // nothing or multiple items found
            return;
        }
        */

        this.setState({result: 1 - ( Math.pow(1 - 0.25, val))});
        //this.setState({result: 1 - ( Math.pow(1 - result[0].rate, val))});
        // $('.js-result').text(parseFloat(result*100).toFixed(2) + '%');
        // $('.js-link').attr('href', 'http://www.wowhead.com/item=' + val);
    }

    handleSelectChange(event) {
        const val = event.target.value;

        console.log(val);
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>How unlucky am I?</h1>
                </div>

                <div className="App-intro">

                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                        <Category type={'mounts'} />
                        <Category type={'pets'} />
                        <Category type={'toys'} />
                    </Tabs>

                    <div className="row">

                        <FormGroup className="col-sm-12 col-md-6" bsSize="large">
                            <ControlLabel>Tries: </ControlLabel>
                            <FormControl type="text" className="form-control input-lg"
                                   value={this.state.tries} onChange={this.handleInputChange}/>
                        </FormGroup>

                        <FormGroup className="col-sm-12 col-md-6" bsSize="large">
                            <ControlLabel>Item: </ControlLabel>
                            <FormControl componentClass="select" placeholder="Select item"
                                         onChange={this.handleSelectChange}>
                                <option value="select">select</option>
                                <option value="other">...</option>
                                {this.createSelectItems()}
                            </FormControl>
                        </FormGroup>

                    </div>

                    <Result value={this.state.result}/>
                </div>

                <select className="form-control input-lg js-select-item" id="item" required>
                    <option selected disabled>Select item</option>
                </select>
            </div>
        );
    }
}

export default App;
