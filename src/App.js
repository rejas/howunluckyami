import React from 'react';
import Items from './data/items';
import Logo from './components/Logo.js';
import Category from './components/Category.js';
import Result from './components/Result.js';

import { ButtonGroup, ControlLabel, FormControl, FormGroup, Grid, Jumbotron, Row } from 'react-bootstrap';

import './App.css';

class App extends React.Component {

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
    };

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
            <div className="hulai">

                <Jumbotron>
                    <Logo />
                    <h1>How unlucky am I?</h1>
                </Jumbotron>

                <Grid>
                    <ButtonGroup onClick={this.handleTypeChange}>
                        <Category class="active" type={'mounts'} />
                        <Category type={'pets'} />
                        <Category type={'toys'} />
                    </ButtonGroup>

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

                    <Result item={this.state.item} tries={this.state.tries}/>
                </Grid>
            </div>
        );
    }
}

export default App;
