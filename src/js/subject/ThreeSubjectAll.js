import React from 'react';
import '../../css/App.css';
import MainNav from '../main/MainNav.js'
import MainSubject from '../main/MainSubject.js'

function ThreeSubjectOne() {
    return (
        <div>
            <MainNav urlEnd='/third' urlExit='/header'/>
            <MainSubject texting='Матеріали' cssNum='1' urlName='/third/webTechnologies/materials'/>
            <MainSubject texting='Звіти' cssNum='4' urlName='/third/webTechnologies/zvits'/>
        </div>
    );
}
function ThreeSubjectTwo() {
    return (
        <div>
            <MainNav urlEnd='/third' urlExit='/header'/>
            <MainSubject texting='Матеріали' cssNum='1' urlName='/third/oopSecond/materials'/>
            <MainSubject texting='Звіти' cssNum='4' urlName='/third/oopSecond/zvits'/>
        </div>
    );
}
function ThreeSubjectThree() {
    return (
        <div>
            <MainNav urlEnd='/third' urlExit='/header'/>
            <MainSubject texting='Матеріали' cssNum='1' urlName='/third/computers/materials'/>
            <MainSubject texting='Звіти' cssNum='4' urlName='/third/computers/zvits'/>
            <MainSubject texting='Лекції' cssNum='3' urlName='/third/computers/lec'/>
        </div>
    );
}


export {ThreeSubjectOne,ThreeSubjectTwo,ThreeSubjectThree};