import React, { Component } from 'react';
import logo from './logo.svg';
import './main.js';
import './App.css';


import { Tabs, Tab } from 'react-bootstrap';

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
                        <div className="form-group col-sm-12 col-md-6 input-group-lg">
                            <input id="tries" type="text" value=""
                                   className="form-control input-lg js-tries"/>
                        </div>
                        <div className="form-group col-sm-12 col-md-6 ">
                            <select className="form-control input-lg js-select-item" id="item" required>
                                <option selected disabled>Select item</option>
                            </select>
                        </div>
                    </div>

                    <Result value={0} />
                </div>
            </div>
        );
    }
}

export default App;
