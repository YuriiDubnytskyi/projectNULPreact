import React from 'react';
import '../../css/App.css';
import MainNav from '../main/MainNav.js'
import MainZvits from '../main/MainZvits.js'
import lab1 from "../../files/sum1/фізика/фізикалаб1.docx"
import lab2 from "../../files/sum1/фізика/фізикалаб2.docx"
import lab3 from "../../files/sum1/фізика/фізикалаб3.docx"
import lab4 from "../../files/sum1/фізика/фізикалаб4.docx"
import lab5 from "../../files/sum1/фізика/фізикалаб5.docx"
import met1 from "../../files/sum1/фізика/мет фізика.doc"
import met2 from "../../files/sum1/фізика/мет фізика 2.doc"

function PhizMet() {
    return (
        <div>
            <MainNav urlEnd='/first/phisiks' urlExit='/header'/>
            <MainZvits texting='Методичка 1' cssNum='4' urlName={met1}/>
            <MainZvits texting='Методичка 2' cssNum='5' urlName={met2}/>
        </div>
    );
}
function PhizLab() {
    return (
        <div>
            <MainNav urlEnd='/first/phisiks' urlExit='/header'/>
            <MainZvits texting='Лабораторна 1' cssNum='1' urlName={lab1}/>
            <MainZvits texting='Лабораторна 2' cssNum='2' urlName={lab2}/>
            <MainZvits texting='Лабораторна 3' cssNum='3' urlName={lab3}/>
            <MainZvits texting='Лабораторна 4' cssNum='4' urlName={lab4}/>
            <MainZvits texting='Лабораторна 5' cssNum='5' urlName={lab5}/>
        </div>
    );
}
export  {PhizLab,PhizMet};