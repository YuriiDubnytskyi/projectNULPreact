import React from 'react';
import '../../css/App.css';
import MainNav from '../main/MainNav.js'
import MainZvits from '../main/MainZvits.js'
import lab1 from "../../files/sum3/схем/Проект. Архітектура.docx"
import lec1 from "../../files/sum3/схем/Lec_1_2017.doc"
import lec2 from "../../files/sum3/схем/Lek_2_2017.doc"
import lec3 from "../../files/sum3/схем/Lek_3_Арх.doc"
import lec4 from "../../files/sum3/схем/Lek_4b_Arx.doc"
import lec5 from "../../files/sum3/схем/Lek_6_7.doc"
import lec6 from "../../files/sum3/схем/Lek_8_9.doc"
import lec7 from "../../files/sum3/схем/Lek_10_11.doc"
import lec8 from "../../files/sum3/схем/Lek_12_2017.doc"
import mat2 from "../../files/sum3/схем/мет1.docx"
import mat3 from "../../files/sum3/схем/Лабораторна_робота_2_Архітектура_Комп'ютерів_.pdf"
import mat4 from "../../files/sum3/схем/Лабораторна_робота_3_Архітектура_Комп'ютерів.pdf"




function CompZvits() {
    return (
        <div>
            <MainNav urlEnd='/third/computers' urlExit='/header'/>
            <MainZvits texting='Звіт До проекту' cssNum='7' urlName={lab1}/>
        </div>
    );
}

function CompMet() {
    return (
        <div>
            <MainNav urlEnd='/third/computers' urlExit='/header'/>
            <MainZvits texting='Методичка 1' cssNum='2' urlName={mat2}/>
            <MainZvits texting='Методичка 2' cssNum='3' urlName={mat3}/>
            <MainZvits texting='Методичка 3' cssNum='4' urlName={mat4}/>
        </div>
    );
}
function CompLec() {
    return (
        <div>
            <MainNav urlEnd='/third/computers' urlExit='/header'/>
            <MainZvits texting='Лекція 1' cssNum='1' urlName={lec1}/>
            <MainZvits texting='Лекція 2' cssNum='2' urlName={lec2}/>
            <MainZvits texting='Лекція 3' cssNum='3' urlName={lec3}/>
            <MainZvits texting='Лекція 4' cssNum='4' urlName={lec4}/>
            <MainZvits texting='Лекція 5' cssNum='5' urlName={lec5}/>
            <MainZvits texting='Лекція 6' cssNum='6' urlName={lec6}/>
            <MainZvits texting='Лекція 7' cssNum='7' urlName={lec7}/>
            <MainZvits texting='Лекція 8' cssNum='8' urlName={lec8}/>
        </div>
    );
}
export  {CompZvits,CompMet,CompLec};