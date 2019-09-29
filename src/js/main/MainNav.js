import React from 'react';
import '../../css/App.css';
import {NavLink} from 'react-router-dom'

function MainNav(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-between">
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <NavLink className="nav-link" to={props.urlEnd}>Назад</NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <NavLink className="nav-link" to={props.urlExit}>X</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default MainNav;