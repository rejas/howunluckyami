import React from 'react';
import { Jumbotron } from 'react-bootstrap';

function Result(props) {
    const result = (1 - ( Math.pow(1 - props.rate, props.tries)));

    return (
        <Jumbotron>
            <p className="h3 col-sm-12 text-center">The chance of dropping the item at least once in you runs is:<br/>
                <span className="h2 js-result text-success">{result}</span>
            </p>
            <a className="js-link" target="_blank">link to wowhead page</a>
        </Jumbotron>
    );
}

export default Result;
