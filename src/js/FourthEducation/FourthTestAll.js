import React from 'react';
import '../../css/App.css';
import MainNav from '../main/MainNav.js'
import MainZvits from '../main/MainZvits.js'
import lab1test from "../../files/sum4/лаб1.docx"
import lab2test from "../../files/sum4/лаб2.docx"
import lab3test from "../../files/sum4/лаб3.docx"
import lab4test from "../../files/sum4/лаб4.docx"
import lab5test from "../../files/sum4/лаб5.docx"
import mat1 from "../../files/sum4/Лабораторна робота1.pdf"
import mat2 from "../../files/sum4/лабораторна робота2.pdf"
import mat3 from "../../files/sum4/Лабораторна робота3.pdf"
import mat4 from "../../files/sum4/Лабораторна робота4.pdf"
import mat5 from "../../files/sum4/лабораторна робота5.pdf"


function TestZvits() {
    return (
        <div>
            <MainNav urlEnd='/fourth/testing' urlExit='/header'/>
            <MainZvits texting='Звіт №1' cssNum='1' urlName={lab1test}/>
            <MainZvits texting='Звіт №2' cssNum='2' urlName={lab2test}/>
            <MainZvits texting='Звіт №3' cssNum='3' urlName={lab3test}/>
            <MainZvits texting='Звіт №4' cssNum='4' urlName={lab4test}/>
            <MainZvits texting='Звіт №5' cssNum='5' urlName={lab5test}/>
        </div>
    );
}
function TestMet() {
    return (
        <div>
            <MainNav urlEnd='/fourth/testing' urlExit='/header'/>
            <MainZvits texting='Методичка до лабораторної №1' cssNum='1' urlName={mat1}/>
            <MainZvits texting='Методичка до лабораторної №2' cssNum='2' urlName={mat2}/>
            <MainZvits texting='Методичка до лабораторної №3' cssNum='3' urlName={mat3}/>
            <MainZvits texting='Методичка до лабораторної №4' cssNum='4' urlName={mat4}/>
            <MainZvits texting='Методичка до лабораторної №5' cssNum='5' urlName={mat5}/>
        </div>
    );
}

export  {TestZvits,TestMet};