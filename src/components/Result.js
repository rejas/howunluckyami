import React from 'react';
import { Jumbotron } from 'react-bootstrap';

function Result(props) {
    const result = (1 - ( Math.pow(1 - props.item.rate, props.tries))),
          link = "http://www.wowhead.com/item=" + props.item.id;

    return (
        <Jumbotron>
            <p className="h3 col-sm-12 text-center">The chance of dropping the item at least once in you runs is:<br/>
                <span className="h2 js-result text-success">{result}</span>
            </p>
            <a target="_blank" href={link}>link to wowhead page</a>
        </Jumbotron>
    );
}

export default Result;
