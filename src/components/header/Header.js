import React from 'react';
import Logo from '../logo/Logo.js';
import { Jumbotron } from 'react-bootstrap';

import './Header.css';

class Header extends React.Component {
    render() {
        return  (
            <Jumbotron>
                <Logo />
                <h1 className="h1">How unlucky am I?</h1>
            </Jumbotron>
        )
    }
}

export default Header;
