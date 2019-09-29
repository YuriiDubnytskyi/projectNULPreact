import React from 'react';
import '../../css/App.css';
import MainNav from '../main/MainNav.js'
import MainZvits from '../main/MainZvits.js'
import lab1 from "../../files/sum3/ооп/lab1c.docx"
import lab2 from "../../files/sum3/ооп/lab2c.docx"
import lab3 from "../../files/sum3/ооп/lab3c (5).docx"
import lab4 from "../../files/sum3/ооп/lab4c.docx"
import lab5 from "../../files/sum3/ооп/lab5c.docx"
import lab6 from "../../files/sum3/ооп/lab6c.docx"
import mat1 from "../../files/sum3/ооп/Lab4 _C# 2016.doc"
import mat2 from "../../files/sum3/ооп/prez_4.pdf"
import mat3 from "../../files/sum3/ооп/prez5w.pdf"
import mat4 from "../../files/sum3/ооп/prez6.pdf"
import mat5 from "../../files/sum3/ооп/prez7.pdf"



function OopZvits() {
    return (
        <div>
            <MainNav urlEnd='/third/oopSecond' urlExit='/header'/>
            <MainZvits texting='Звіт №1' cssNum='1' urlName={lab1}/>
            <MainZvits texting='Звіт №2' cssNum='2' urlName={lab2}/>
            <MainZvits texting='Звіт №3' cssNum='3' urlName={lab3}/>
            <MainZvits texting='Звіт №4' cssNum='4' urlName={lab4}/>
            <MainZvits texting='Звіт №5' cssNum='5' urlName={lab5}/>
            <MainZvits texting='Звіт №6' cssNum='6' urlName={lab6}/>
        </div>
    );
}
function OopMet() {
    return (
        <div>
            <MainNav urlEnd='/third/oopSecond' urlExit='/header'/>
            <MainZvits texting='Методичка до лабораторної №4' cssNum='1' urlName={mat1}/>
            <MainZvits texting='Методичка 1' cssNum='2' urlName={mat2}/>
            <MainZvits texting='Методичка 2' cssNum='3' urlName={mat3}/>
            <MainZvits texting='Методичка 3' cssNum='4' urlName={mat4}/>
            <MainZvits texting='Методичка 4' cssNum='5' urlName={mat5}/>
        </div>
    );
}

export  {OopZvits,OopMet};