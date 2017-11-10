import React from 'react';
import { Jumbotron } from 'react-bootstrap';

import './Result.css';

function Result(props) {
    const result = Math.floor((1 - ( Math.pow(1 - props.item.rate, props.tries))) * 10000) / 100,
          link = "http://www.wowhead.com/item=" + props.item.id;

    return (
        <Jumbotron>
            <h3 className="h3 col-sm-12 text-center">
                The chance of dropping <a target="_blank" href={link}>{props.item.name}</a> at least once in your runs is:
            </h3>
            <h2 className="h2 js-result text-success">
                {result} %
            </h2>
        </Jumbotron>
    );
}

export default Result;
