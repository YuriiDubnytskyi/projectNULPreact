import React from 'react';
import '../../css/App.css';
import MainNav from '../main/MainNav.js'
import MainSubject from '../main/MainSubject.js'
import MainZvits from '../main/MainZvits.js'
import lab12d from "../../files/sum4/lab1and2.docx"
import lab4d from "../../files/sum4/lab4.docx"
import lab7d from "../../files/sum4/lab7.docx"
import lab10d from "../../files/sum4/lab10.docx"
import mat1 from "../../files/sum4/ЛР-01. Представлення граф_в.pdf"
import mat2 from "../../files/sum4/ЛР-02. Характеристики граф_в.pdf"
import mat7 from "../../files/sum4/ЛР-04. Обх_д граф_в.pdf"
import mat4 from "../../files/sum4/ЛР-07. Алгоритм Дейкстри.pdf"
import mat10 from "../../files/sum4/ЛР-10. Ейлеров_ цикли.pdf"

function DistLabs() {
    return (
        <div>
            <MainNav urlEnd='/fourth/districkMathSecond' urlExit='/header'/>
            <MainSubject texting='Лабораторна №1' cssNum='1' urlName='/fourth/districkMathSecond/labs/lab1'/>
            <MainSubject texting='Лабораторна №2' cssNum='2' urlName='/fourth/districkMathSecond/labs/lab2'/>
            <MainSubject texting='Лабораторна №4' cssNum='3' urlName='/fourth/districkMathSecond/labs/lab4'/>
            <MainSubject texting='Лабораторна №7' cssNum='4' urlName='/fourth/districkMathSecond/labs/lab7'/>
            <MainSubject texting='Лабораторна №10' cssNum='5' urlName='/fourth/districkMathSecond/labs/lab10'/>
        </div>
    );
}
function DistZvits() {
    return (
        <div>
            <MainNav urlEnd='/fourth/districkMathSecond' urlExit='/header'/>
            <MainZvits texting='Звіт №1 №2' cssNum='1' urlName={lab12d}/>
            <MainZvits texting='Звіт №4' cssNum='2' urlName={lab4d}/>
            <MainZvits texting='Звіт №7' cssNum='3' urlName={lab7d}/>
            <MainZvits texting='Звіт №10' cssNum='4' urlName={lab10d}/>
        </div>
    );
}
function DistMet() {
    return (
        <div>
            <MainNav urlEnd='/fourth/districkMathSecond' urlExit='/header'/>
            <MainZvits texting='Методичка до лабораторної №1' cssNum='1' urlName={mat1}/>
            <MainZvits texting='Методичка до лабораторної №2' cssNum='2' urlName={mat2}/>
            <MainZvits texting='Методичка до лабораторної №4' cssNum='3' urlName={mat4}/>
            <MainZvits texting='Методичка до лабораторної №7' cssNum='4' urlName={mat7}/>
            <MainZvits texting='Методичка до лабораторної №10' cssNum='5' urlName={mat10}/>
        </div>
    );
}

export  {DistLabs,DistZvits,DistMet};