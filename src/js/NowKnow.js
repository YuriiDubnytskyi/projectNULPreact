import React from 'react';
import '../css/App.css';
import MainNav from './main/MainNav.js'
import imgD from "../img/idontnow.jpg"


function EngOne() {
    return (
        <div>
            <MainNav urlEnd='/first' urlExit='/header'/>
            <img src={imgD} className="DontNow" alt="logo" />
        </div>
    );
}

function EngTwo() {
    return (
        <div>
            <MainNav urlEnd='/second' urlExit='/header'/>
            <img src={imgD} className="DontNow" alt="logo" />
        </div>
    );
}

function OopTwo() {
    return (
        <div>
            <MainNav urlEnd='/second' urlExit='/header'/>
            <img src={imgD} className="DontNow" alt="logo" />
        </div>
    );
}

function CompThree() {
    return (
        <div>
            <MainNav urlEnd='/third' urlExit='/header'/>
            <img src={imgD} className="DontNow" alt="logo" />
        </div>
    );
}

function DistThree() {
    return (
        <div>
            <MainNav urlEnd='/third' urlExit='/header'/>
            <img src={imgD} className="DontNow" alt="logo" />
        </div>
    );
}

function SysThree() {
    return (
        <div>
            <MainNav urlEnd='/third' urlExit='/header'/>
            <img src={imgD} className="DontNow" alt="logo" />
        </div>
    );
}

function HistoryThree() {
    return (
        <div>
            <MainNav urlEnd='/third' urlExit='/header'/>
            <img src={imgD} className="DontNow" alt="logo" />
        </div>
    );
}
function MathFort() {
    return (
        <div>
            <MainNav urlEnd='/fourth' urlExit='/header'/>
            <img src={imgD} className="DontNow" alt="logo" />
        </div>
    );
}
function AllDont() {
    return (
        <div>
            <MainNav urlEnd='/header' urlExit='/header'/>
            <img src={imgD} className="DontNow" alt="logo" />
        </div>
    );
}
export  {EngOne,EngTwo,OopTwo,CompThree,SysThree,DistThree,HistoryThree,MathFort,AllDont};