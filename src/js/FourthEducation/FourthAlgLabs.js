import React from 'react';
import '../../css/App.css';
import MainNav from '../main/MainNav.js'
import MainSubject from '../main/MainSubject.js'
import MainZvits from '../main/MainZvits.js'
import lab1a from "../../files/sum4/lab1argum.docx"
import lab2a from "../../files/sum4/lab2argum.docx"
import lab3a from "../../files/sum4/lab3argum.docx"
import lab4a from "../../files/sum4/lab4argum.docx"
import lab5a from "../../files/sum4/lab5argum.docx"
import mat1 from "../../files/sum4/Lab1_A_SD 2019.pdf"
import mat2 from "../../files/sum4/Lab 2_w2019 LZW.pdf"
import mat3 from "../../files/sum4/LAB 3.pdf"
import mat4 from "../../files/sum4/Lab4_A_SD 2019.pdf"
import mat5 from "../../files/sum4/Lab5_A_SD 2019.pdf"

function AlgLabs() {
    return (
        <div>
            <MainNav urlEnd='/fourth/algorutm' urlExit='/header'/>
            <MainSubject texting='Лабораторна №3' cssNum='1' urlName='/fourth/algorutm/labs/lab3'/>
            <MainSubject texting='Лабораторна №4' cssNum='3' urlName='/fourth/algorutm/labs/lab4'/>
            <MainSubject texting='Лабораторна №5' cssNum='4' urlName='/fourth/algorutm/labs/lab5'/>
        </div>
    );
}
function AlgZvits() {
    return (
        <div>
            <MainNav urlEnd='/fourth/algorutm' urlExit='/header'/>
            <MainZvits texting='Звіт №1' cssNum='1' urlName={lab1a}/>
            <MainZvits texting='Звіт №2' cssNum='2' urlName={lab2a}/>
            <MainZvits texting='Звіт №3' cssNum='3' urlName={lab3a}/>
            <MainZvits texting='Звіт №4' cssNum='4' urlName={lab4a}/>
            <MainZvits texting='Звіт №5' cssNum='5' urlName={lab5a}/>
        </div>
    );
}
function AlgMet() {
    return (
        <div>
            <MainNav urlEnd='/fourth/algorutm' urlExit='/header'/>
            <MainZvits texting='Методичка до лабораторної №1' cssNum='1' urlName={mat1}/>
            <MainZvits texting='Методичка до лабораторної №2' cssNum='2' urlName={mat2}/>
            <MainZvits texting='Методичка до лабораторної №3' cssNum='3' urlName={mat3}/>
            <MainZvits texting='Методичка до лабораторної №4' cssNum='4' urlName={mat4}/>
            <MainZvits texting='Методичка до лабораторної №5' cssNum='5' urlName={mat5}/>
        </div>
    );
}

export  {AlgLabs,AlgZvits,AlgMet};