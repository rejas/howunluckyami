import React from 'react';

import { Button } from 'react-bootstrap';

class Category extends React.Component {
    render() {
        return  (
            <Button className={this.props.class} data-type={this.props.type}>{this.props.type}</Button>
        )
    }
}

export default Category;
