import React, { Component } from 'react';

import Items from '../data/items';

import { ControlLabel, FormControl, FormGroup, Row } from 'react-bootstrap';

class ItemSelect extends Component {

    handleSelectChange = (event) => {
        event.type = this.props.type;
        this.props.handleSelectChange(event)
    };

    createSelectItems = () => {
        return Items[this.props.type].map((data) => {
            return (<option key={data.id} value={data.id}>{data.name}</option>)
        });
    };

    render() {
        return (
            <Row>
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

export default ItemSelect;
