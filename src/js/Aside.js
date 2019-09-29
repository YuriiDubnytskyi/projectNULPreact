import React from 'react';
import '../css/App.css';
import {NavLink} from 'react-router-dom'

function Aside() {
    return (
        <aside className="col-sm-2  m-3">
            <ol className="list">
                <li className="clicks">Курс
                    <ul className="opens1">
                        <li><NavLink exact to='/first'>1 симестр</NavLink></li>
                        <li><NavLink exact to='/second'>2 симестр</NavLink></li>
                    </ul>
                </li>
                <li className="clicks">Курс
                    <ul className="opens2">
                        <li><NavLink exact to='/third'>3 симестр</NavLink></li>
                        <li><NavLink exact to='/fourth'>4 симестр</NavLink></li>
                    </ul></li>
                <li className="clicks">Курс
                    <ul className="opens3">
                        <li><NavLink exact to='/fifth'>5 симестр</NavLink></li>
                        <li><NavLink exact to='/sixth'>6 симестр</NavLink></li>
                    </ul></li>
                <li className="clicks">Курс
                    <ul className="opens4">
                        <li><NavLink exact to='/seventh'>7 симестр</NavLink></li>
                        <li><NavLink exact to='/eighth'>8 симестр</NavLink></li>
                    </ul></li>
            </ol>
        </aside>
    );
}


export default Aside;