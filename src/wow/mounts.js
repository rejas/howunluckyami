import React, { Component } from 'react';

import Items from '../data/items';

import { ControlLabel, FormControl, FormGroup, Row } from 'react-bootstrap';

class Mounts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            item: {},
            optionsdata: Items[props.type],
            tries:  0,
            type: ''
        };

        console.log(Items[props.type]);

        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleSelectChange = (event) => {
        let value = this.state.optionsdata.filter(function(item) {
            return item.id === Number(event.target.value);
        });
        this.setState({item: value[0]});
    };

    createSelectItems = () => {
        return this.state.optionsdata.map((data) => {
            return (<option key={data.id} value={data.id}>{data.name}</option>)
        });
    };

    render() {
        return (
            <Row>
                <h1>{this.props.type}</h1>
                <FormGroup className="col-sm-12 col-md-6" bsSize="large">
                    <ControlLabel>Item: </ControlLabel>
                    <FormControl componentClass="select" placeholder="Select item"
                                 onChange={this.handleSelectChange}>
                        {this.createSelectItems()}
                    </FormControl>
                </FormGroup>
            </Row>
        );
    }
}

export default Mounts;
