import React from 'react';
import '../../css/App.css';
import MainNav from '../main/MainNav.js'
import MainSubject from '../main/MainSubject.js'

function OneSubjectOne() {
    return (
        <div>
            <MainNav urlEnd='/first' urlExit='/header'/>
            <MainSubject texting='Матеріали' cssNum='4' urlName='/first/hightMatchFirst/materials'/>
            <MainSubject texting='Лекції' cssNum='5' urlName='/first/hightMatchFirst/lec'/>
        </div>
    );
}
function OneSubjectTwo() {
    return (
        <div>
            <MainNav urlEnd='/first' urlExit='/header'/>
            <MainSubject texting='Звіти' cssNum='7' urlName='/first/vstupSpezials/zvits'/>
        </div>
    );
}
function OneSubjectThree() {
    return (
        <div>
            <MainNav urlEnd='/first' urlExit='/header'/>
            <MainSubject texting='Матеріали' cssNum='1' urlName='/first/operatingSystem/materials'/>
            <MainSubject texting='Звіти' cssNum='4' urlName='/first/operatingSystem/zvits'/>
            <MainSubject texting='Лекції' cssNum='5' urlName='/first/operatingSystem/lec'/>
        </div>
    );
}
function OneSubjectFour() {
    return (
        <div>
            <MainNav urlEnd='/first' urlExit='/header'/>
            <MainSubject texting='Матеріали' cssNum='5' urlName='/first/phisiks/materials'/>
            <MainSubject texting='Звіти' cssNum='4' urlName='/first/phisiks/zvits'/>
        </div>
    );
}
function OneSubjectFive() {
    return (
        <div>
            <MainNav urlEnd='/first' urlExit='/header'/>
            <MainSubject texting='Лекції' cssNum='7' urlName='/first/ukrainian/lec'/>
        </div>
    );
}


export {OneSubjectOne,OneSubjectTwo,OneSubjectThree,OneSubjectFour,OneSubjectFive};