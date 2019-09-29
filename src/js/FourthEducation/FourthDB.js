import React from 'react';
import '../../css/App.css';
import MainNav from '../main/MainNav.js'
import MainZvits from '../main/MainZvits.js'
import lab1sql from "../../files/sum4/lab1sql.docx"
import lab2sql from "../../files/sum4/lab2sql.docx"
import lab3sql from "../../files/sum4/lab3sql.docx"
import lab4sql from "../../files/sum4/лаб4бази.docx"
import lab5sql from "../../files/sum4/лаб5баз.docx"
import mat1 from "../../files/sum4/Met.VK. LAB1 OBD.pdf"
import mat2 from "../../files/sum4/Met.VK. LAB2 OBD.pdf"
import mat3 from "../../files/sum4/Met.VK. LAB3 OBD.pdf"
import mat4 from "../../files/sum4/Met.VK. LAB4.pdf"
import mat5 from "../../files/sum4/Met.VK. LAB5.pdf"
import tem45 from "../../files/sum4/Теми до ЛР 4-5.pdf"

function DBZvits() {
    return (
        <div>
            <MainNav urlEnd='/fourth/dataBase' urlExit='/header'/>
            <MainZvits texting='Звіт №1' cssNum='1' urlName={lab1sql}/>
            <MainZvits texting='Звіт №2' cssNum='2' urlName={lab2sql}/>
            <MainZvits texting='Звіт №3' cssNum='3' urlName={lab3sql}/>
            <MainZvits texting='Звіт №4' cssNum='4' urlName={lab4sql}/>
            <MainZvits texting='Звіт №5' cssNum='5' urlName={lab5sql}/>
        </div>
    );
}
function DBMet() {
    return (
        <div>
            <MainNav urlEnd='/fourth/dataBase' urlExit='/header'/>
            <MainZvits texting='Методичка до лабораторної №1' cssNum='1' urlName={mat1}/>
            <MainZvits texting='Методичка до лабораторної №2' cssNum='2' urlName={mat2}/>
            <MainZvits texting='Методичка до лабораторної №3' cssNum='3' urlName={mat3}/>
            <MainZvits texting='Методичка до лабораторної №4' cssNum='4' urlName={mat4}/>
            <MainZvits texting='Методичка до лабораторної №5' cssNum='5' urlName={mat5}/>
            <MainZvits texting='Теми до лабораторних №4 і №5' cssNum='6' urlName={tem45}/>
        </div>
    );
}

export  {DBZvits,DBMet};