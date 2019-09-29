import React from 'react';
import logo from '../img/logo.jpg';
import '../css/App.css';
import {NavLink} from 'react-router-dom'

function Nav() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-between m-3">
            <NavLink exact className="navbar-brand" to="#">
                <img src={logo} alt="logo"/>
            </NavLink>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink exact className="nav-link" to="#">ВСП НН ІППТ НУЛП</NavLink>
                </li>
            </ul>
        </nav>
    );
}


export default Nav;