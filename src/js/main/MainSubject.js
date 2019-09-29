import React from 'react';
import '../../css/App.css';
import {NavLink} from 'react-router-dom'

function MainSubject(props) {
    let css="css"+props.cssNum;
    return (
        <div>
            <NavLink  className="subject" to={props.urlName} ><div className={css}>{props.texting}</div></NavLink>
        </div>
    );
}

export default MainSubject;