import React from 'react';
import '../../css/App.css';
import MainNav from '../main/MainNav.js'
import MainSubject from '../main/MainSubject.js'

function FourthSubjectOne() {
    return (
        <div>
            <MainNav urlEnd='/fourth' urlExit='/header'/>
            <MainSubject texting='Лабораторні' cssNum='1' urlName='/fourth/algorutm/labs'/>
            <MainSubject texting='Матеріали' cssNum='3' urlName='/fourth/algorutm/materials'/>
            <MainSubject texting='Звіти' cssNum='4' urlName='/fourth/algorutm/zvits'/>
        </div>
    );
}
function FourthSubjectTwo() {
    return (
        <div>
            <MainNav urlEnd='/fourth' urlExit='/header'/>
            <MainSubject texting='Матеріали' cssNum='1' urlName='/fourth/testing/materials'/>
            <MainSubject texting='Звіти' cssNum='4' urlName='/fourth/testing/zvits'/>
        </div>
    );
}

function FourthSubjectFour() {
    return (
        <div>
            <MainNav urlEnd='/fourth' urlExit='/header'/>
            <MainSubject texting='Звіти' cssNum='7' urlName='/fourth/clientServer/zvits'/>
        </div>
    );
}
function FourthSubjectFive() {
    return (
        <div>
            <MainNav urlEnd='/fourth' urlExit='/header'/>
            <MainSubject texting='Лабораторні' cssNum='1' urlName='/fourth/districkMathSecond/labs'/>
            <MainSubject texting='Матеріали' cssNum='3' urlName='/fourth/districkMathSecond/materials'/>
            <MainSubject texting='Звіти' cssNum='4' urlName='/fourth/districkMathSecond/zvits'/>
        </div>
    );
}
function FourthSubjectSix() {
    return (
        <div>
            <MainNav urlEnd='/fourth' urlExit='/header'/>
            <MainSubject texting='Матеріали' cssNum='1' urlName='/fourth/dataBase/materials'/>
            <MainSubject texting='Звіти' cssNum='4' urlName='/fourth/dataBase/zvits'/>
        </div>
    );
}

export {FourthSubjectOne,FourthSubjectTwo,FourthSubjectFour,FourthSubjectFive,FourthSubjectSix};