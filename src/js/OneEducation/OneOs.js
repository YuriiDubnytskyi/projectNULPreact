import React from 'react';
import '../../css/App.css';
import MainNav from '../main/MainNav.js'
import MainZvits from '../main/MainZvits.js'
import lab1 from "../../files/sum1/ос/лаб1ос.docx"
import lab2 from "../../files/sum1/ос/лаб2ос.docx"
import lab3 from "../../files/sum1/ос/Лабораторна робота 3 операційка.docx"
import lab4 from "../../files/sum1/ос/лаб 4 ос.docx"
import lab5 from "../../files/sum1/ос/ос лаб5.docx"
import mat1 from "../../files/sum1/ос/мет ос.docx"
import mat2 from "../../files/sum1/ос/мет ос2.docx"
import mat3 from "../../files/sum1/ос/Лабораторна робота _2_KN1_Variant.pdf"
import mat4 from "../../files/sum1/ос/Лабораторна робота 4.pdf"
import lec1 from "../../files/sum1/ос/pdf/Лекція 001.pdf"
import lec2 from "../../files/sum1/ос/pdf/Лекція 002.pdf"
import lec3 from "../../files/sum1/ос/pdf/Лекція 003.pdf"
import lec4 from "../../files/sum1/ос/pdf/Лекція 004.pdf"
import lec5 from "../../files/sum1/ос/pdf/Лекція 005.pdf"
import lec6 from "../../files/sum1/ос/pdf/Лекція 006.pdf"
import lec7 from "../../files/sum1/ос/pdf/Лекція 007.pdf"
import lec8 from "../../files/sum1/ос/pdf/Лекція 008.pdf"
import lec9 from "../../files/sum1/ос/pdf/Лекція 009.pdf"
import lec10 from "../../files/sum1/ос/pdf/Лекція 010.pdf"
import lec11 from "../../files/sum1/ос/pdf/Лекція 011.pdf"
import lec12 from "../../files/sum1/ос/pdf/Лекція 012.pdf"
import lec13 from "../../files/sum1/ос/pdf/Лекція 013.pdf"
import lec14 from "../../files/sum1/ос/pdf/Лекція 014.pdf"
import lec15 from "../../files/sum1/ос/pdf/Лекція 015.pdf"
import lec16 from "../../files/sum1/ос/pdf/Лекція 016.pdf"
import lec17 from "../../files/sum1/ос/pdf/Лекція 017.pdf"
import lec18 from "../../files/sum1/ос/pdf/Лекція 018.pdf"
import lec19 from "../../files/sum1/ос/pdf/Лекція 019.pdf"
import lec20 from "../../files/sum1/ос/pdf/Лекція 020.pdf"
import lec21 from "../../files/sum1/ос/pdf/Лекція 021.pdf"




function OsZvits() {
    return (
        <div>
            <MainNav urlEnd='/first/operatingSystem' urlExit='/header'/>
            <MainZvits texting='Звіт №1' cssNum='1' urlName={lab1}/>
            <MainZvits texting='Звіт №2' cssNum='2' urlName={lab2}/>
            <MainZvits texting='Звіт №3' cssNum='3' urlName={lab3}/>
            <MainZvits texting='Звіт №4' cssNum='4' urlName={lab4}/>
            <MainZvits texting='Звіт №5' cssNum='5' urlName={lab5}/>
        </div>
    );
}
function OsMet() {
    return (
        <div>
            <MainNav urlEnd='/first/operatingSystem' urlExit='/header'/>
            <MainZvits texting='Методичка до лабораторної №1' cssNum='2' urlName={mat1}/>
            <MainZvits texting='Методичка до лабораторної №2' cssNum='3' urlName={mat2}/>
            <MainZvits texting='Методичка до лабораторної №3' cssNum='4' urlName={mat3}/>
            <MainZvits texting='Методичка до лабораторної №4' cssNum='5' urlName={mat4}/>
        </div>
    );
}
function OsLec() {
    return (
        <div>
            <MainNav urlEnd='/first/operatingSystem' urlExit='/header'/>
            <MainZvits texting='Лекція 1' cssNum='9' urlName={lec1}/>
            <MainZvits texting='Лекція 2' cssNum='9' urlName={lec2}/>
            <MainZvits texting='Лекція 3' cssNum='9' urlName={lec3}/>
            <MainZvits texting='Лекція 4' cssNum='9' urlName={lec4}/>
            <MainZvits texting='Лекція 5' cssNum='9' urlName={lec5}/>
            <MainZvits texting='Лекція 6' cssNum='9' urlName={lec6}/>
            <MainZvits texting='Лекція 7' cssNum='9' urlName={lec7}/>
            <MainZvits texting='Лекція 8' cssNum='9' urlName={lec8}/>
            <MainZvits texting='Лекція 9' cssNum='9' urlName={lec9}/>
            <MainZvits texting='Лекція 10' cssNum='9' urlName={lec10}/>
            <MainZvits texting='Лекція 11' cssNum='9' urlName={lec11}/>
            <MainZvits texting='Лекція 12' cssNum='9' urlName={lec12}/>
            <MainZvits texting='Лекція 13' cssNum='9' urlName={lec13}/>
            <MainZvits texting='Лекція 14' cssNum='9' urlName={lec14}/>
            <MainZvits texting='Лекція 15' cssNum='9' urlName={lec15}/>
            <MainZvits texting='Лекція 16' cssNum='9' urlName={lec16}/>
            <MainZvits texting='Лекція 17' cssNum='9' urlName={lec17}/>
            <MainZvits texting='Лекція 18' cssNum='9' urlName={lec18}/>
            <MainZvits texting='Лекція 19' cssNum='9' urlName={lec19}/>
            <MainZvits texting='Лекція 20' cssNum='9' urlName={lec20}/>
            <MainZvits texting='Лекція 21' cssNum='9' urlName={lec21}/>
        </div>
    );
}
export  {OsLec,OsMet,OsZvits};