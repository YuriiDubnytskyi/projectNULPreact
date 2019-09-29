import React from 'react';
import '../../css/App.css';

function MainZvits(props) {
    let css="css"+props.cssNum;
    return (
        <div>
            <a target="_blank" className="subject" href={props.urlName} download><div className={css}>{props.texting}</div></a>
        </div>
    );
}

export default MainZvits;