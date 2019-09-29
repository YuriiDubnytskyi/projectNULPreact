import React from 'react';
import '../../css/App.css';
import MainNav from '../main/MainNav.js'
import MainSubject from '../main/MainSubject.js'

function TwoSubjectOne() {
    return (
        <div>
            <MainNav urlEnd='/second' urlExit='/header'/>
            <MainSubject texting='Матеріали' cssNum='1' urlName='/second/webDesign/materials'/>
            <MainSubject texting='Звіти' cssNum='4' urlName='/second/webDesign/zvits'/>
            <MainSubject texting='Книга' cssNum='2' urlName='/second/webDesign/book'/>
            <MainSubject texting='Лекції' cssNum='5' urlName='/second/webDesign/lec'/>
        </div>
    );
}
function TwoSubjectTwo() {
    return (
        <div>
            <MainNav urlEnd='/second' urlExit='/header'/>
            <MainSubject texting='Лекції' cssNum='7' urlName='/second/hightMatchSecond/lec'/>
        </div>
    );
}
function TwoSubjectThree() {
    return (
        <div>
            <MainNav urlEnd='/second' urlExit='/header'/>
            <MainSubject texting='Матеріали' cssNum='1' urlName='/second/grafick/materials'/>
            <MainSubject texting='Звіти' cssNum='4' urlName='/second/grafick/zvits'/>
        </div>
    );
}
function TwoSubjectFour() {
    return (
        <div>
            <MainNav urlEnd='/second' urlExit='/header'/>
            <MainSubject texting='Матеріали' cssNum='1' urlName='/second/electrisy/materials'/>
            <MainSubject texting='Звіти' cssNum='4' urlName='/second/electrisy/zvits'/>
        </div>
    );
}


export {TwoSubjectOne,TwoSubjectTwo,TwoSubjectThree,TwoSubjectFour};