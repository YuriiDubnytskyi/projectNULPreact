import React from 'react';
import '../../css/App.css';
import MainNav from '../main/MainNav.js'
import MainZvits from '../main/MainZvits.js'

import lab1 from "../../files/sum2/ое/Основи електроніки лаб-1.docx"
import lab2 from "../../files/sum2/ое/основиедектронікилаб2.docx"
import lab3 from "../../files/sum2/ое/основиелектроніки3лаб.docx"
import lab4 from "../../files/sum2/ое/основиелектроніки4лаб.docx"
import lab5 from "../../files/sum2/ое/основиелект5лаб.docx"
import lab6 from "../../files/sum2/ое/основиелектроніки7.docx"
import met1 from "../../files/sum2/ое/Лабораторна робота 1.pdf"
import met2 from "../../files/sum2/ое/Лабораторна робота 2.pdf"
import met3 from "../../files/sum2/ое/Лабораторна робота 3.pdf"
import met4 from "../../files/sum2/ое/Лабораторна робота 4.pdf"
import met5 from "../../files/sum2/ое/Лабораторна робота 5.pdf"



function ElecMet() {
    return (
        <div>
            <MainNav urlEnd='/second/electrisy' urlExit='/header'/>
            <MainZvits texting='Методичка до Лабораторної №1' cssNum='1' urlName={met1}/>
            <MainZvits texting='Методичка до Лабораторної №2' cssNum='2' urlName={met2}/>
            <MainZvits texting='Методичка до Лабораторної №3' cssNum='3' urlName={met3}/>
            <MainZvits texting='Методичка до Лабораторної №4' cssNum='4' urlName={met4}/>
            <MainZvits texting='Методичка до Лабораторної №5' cssNum='5' urlName={met5}/>
        </div>
    );
}
function ElecZvit() {
    return (
        <div>
            <MainNav urlEnd='/second/electrisy' urlExit='/header'/>
            <MainZvits texting='Звіт 1' cssNum='1' urlName={lab1}/>
            <MainZvits texting='Звіт 2' cssNum='2' urlName={lab2}/>
            <MainZvits texting='Звіт 3' cssNum='3' urlName={lab3}/>
            <MainZvits texting='Звіт 4' cssNum='4' urlName={lab4}/>
            <MainZvits texting='Звіт 5' cssNum='5' urlName={lab5}/>
            <MainZvits texting='Проект' cssNum='6' urlName={lab6}/>
        </div>
    );
}

export  {ElecMet,ElecZvit};