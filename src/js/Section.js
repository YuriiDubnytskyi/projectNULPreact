import React from 'react';
import '../css/App.css';
import Aside from "./Aside.js"
import Main from "./Main.js"

function Section() {
    return (
        <section className="row container-fluid ">
            <Aside/>
            <Main />
        </section>
    );
}


export default Section;