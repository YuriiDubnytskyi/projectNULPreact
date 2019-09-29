import React from 'react';
import '../../css/App.css';
import MainNav from '../main/MainNav.js'
import MainZvits from '../main/MainZvits.js'

import lab1 from "../../files/sum2/веб/вебдиз2.docx"
import lab2 from "../../files/sum2/веб/вебдиз3.docx"
import lab3 from "../../files/sum2/веб/вебдиз4.docx"
import lab4 from "../../files/sum2/веб/вебди5.docx"
import met1 from "../../files/sum2/веб/lab21.pdf"
import met2 from "../../files/sum2/веб/lab3.pdf"
import book1 from "../../files/sum2/веб/web_design.doc"
import lec1 from "../../files/sum2/веб/web-1-lek.docx"



function WebdusMet() {
    return (
        <div>
            <MainNav urlEnd='/second/webDesign' urlExit='/header'/>
            <MainZvits texting='Методичка до Лабораторної №1' cssNum='1' urlName={met1}/>
            <MainZvits texting='Методичка до Лабораторної №2' cssNum='2' urlName={met2}/>
        </div>
    );
}
function WebZvit() {
    return (
        <div>
            <MainNav urlEnd='/second/webDesign' urlExit='/header'/>
            <MainZvits texting='Звіт 1' cssNum='1' urlName={lab1}/>
            <MainZvits texting='Звіт 2' cssNum='2' urlName={lab2}/>
            <MainZvits texting='Звіт 3' cssNum='3' urlName={lab3}/>
            <MainZvits texting='Звіт 4' cssNum='4' urlName={lab4}/>
        </div>
    );
}

function WebBook() {
    return (
        <div>
            <MainNav urlEnd='/second/webDesign' urlExit='/header'/>
            <MainZvits texting='Книга' cssNum='7' urlName={book1}/>
        </div>
    );
}
function WebLec() {
    return (
        <div>
            <MainNav urlEnd='/second/webDesign' urlExit='/header'/>
            <MainZvits texting='Лекція 1' cssNum='7' urlName={lec1}/>
        </div>
    );
}



export  {WebdusMet,WebBook,WebLec,WebZvit};