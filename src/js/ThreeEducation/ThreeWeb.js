import React from 'react';
import '../../css/App.css';
import MainNav from '../main/MainNav.js'
import MainZvits from '../main/MainZvits.js'
import lab1 from "../../files/sum3/веб/lab1.doc"
import lab2 from "../../files/sum3/веб/lab2.doc"
import lab3 from "../../files/sum3/веб/lab3.doc"
import lab4 from "../../files/sum3/веб/lab4.docx"
import mat1 from "../../files/sum3/веб/webjs1 (1).docx"
import mat2 from "../../files/sum3/веб/webjs1 (2).docx"
import mat3 from "../../files/sum3/веб/webjs3.docx"
import mat4 from "../../files/sum3/веб/webjs1 (4).docx"



function WebZvits() {
    return (
        <div>
            <MainNav urlEnd='/third/webTechnologies' urlExit='/header'/>
            <MainZvits texting='Звіт №1' cssNum='1' urlName={lab1}/>
            <MainZvits texting='Звіт №2' cssNum='2' urlName={lab2}/>
            <MainZvits texting='Звіт №3' cssNum='3' urlName={lab3}/>
            <MainZvits texting='Звіт №4' cssNum='4' urlName={lab4}/>
        </div>
    );
}
function WebMet() {
    return (
        <div>
            <MainNav urlEnd='/third/webTechnologies' urlExit='/header'/>
            <MainZvits texting='Методичка до лабораторної №1' cssNum='1' urlName={mat1}/>
            <MainZvits texting='Методичка до лабораторної №2' cssNum='2' urlName={mat2}/>
            <MainZvits texting='Методичка до лабораторної №3' cssNum='3' urlName={mat3}/>
            <MainZvits texting='Методичка до лабораторної №4' cssNum='4' urlName={mat4}/>
        </div>
    );
}

export  {WebZvits,WebMet};