import React from 'react';
import './Logo.css';

function Logo(props) {
    return (
        <div id="dice">
            <div className="side front">
                <div className="dot center">&nbsp;</div>
            </div>
            <div className="side front inner">&nbsp;</div>
            <div className="side top">
                <div className="dot dtop dleft">&nbsp;</div>
                <div className="dot dbottom dright">&nbsp;</div>
            </div>
            <div className="side top inner">&nbsp;</div>
            <div className="side right">
                <div className="dot dtop dleft">&nbsp;</div>
                <div className="dot center">&nbsp;</div>
                <div className="dot dbottom dright">&nbsp;</div>
            </div>
            <div className="side right inner">&nbsp;</div>
            <div className="side left">
                <div className="dot dtop dleft">&nbsp;</div>
                <div className="dot dtop dright">&nbsp;</div>
                <div className="dot dbottom dleft">&nbsp;</div>
                <div className="dot dbottom dright">&nbsp;</div>
            </div>
            <div className="side left inner">&nbsp;</div>
            <div className="side bottom">
                <div className="dot center">&nbsp;</div>
                <div className="dot dtop dleft">&nbsp;</div>
                <div className="dot dtop dright">&nbsp;</div>
                <div className="dot dbottom dleft">&nbsp;</div>
                <div className="dot dbottom dright">&nbsp;</div>
            </div>
            <div className="side bottom inner">&nbsp;</div>
            <div className="side back">
                <div className="dot dtop dleft">&nbsp;</div>
                <div className="dot dtop dright">&nbsp;</div>
                <div className="dot dbottom dleft">&nbsp;</div>
                <div className="dot dbottom dright">&nbsp;</div>
                <div className="dot center dleft">&nbsp;</div>
                <div className="dot center dright">&nbsp;</div>
            </div>
            <div className="side back inner">&nbsp;</div>
            <div className="side cover x">&nbsp;</div>
            <div className="side cover y">&nbsp;</div>
            <div className="side cover z">&nbsp;</div>
        </div>
    );
}

export default Logo;
