import React, { Component } from 'react';

import Items from '../data/items';

import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

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
            <FormGroup bsSize="large">
                <ControlLabel>Item: </ControlLabel>
                <FormControl componentClass="select" placeholder="Select item"
                             onChange={this.handleSelectChange}
                             defaultValue={"-1"}>
                    <option value={"-1"} disabled>Please choose the item you wish for</option>
                    {this.createSelectItems()}
                </FormControl>
            </FormGroup>
        );
    }
}

export default ItemSelect;
