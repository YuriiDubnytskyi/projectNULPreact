import React from 'react';
import '../../css/App.css';
import MainNav from '../main/MainNav.js'
import MainZvits from '../main/MainZvits.js'
import lab1 from "../../files/sum1/вступ/вступ1.docx"
import lab2 from "../../files/sum1/вступ/вступ2.docx"
import lab3 from "../../files/sum1/вступ/вступ3.docx"
import lab4 from "../../files/sum1/вступ/вступ4.docx"





function VstupZvits() {
    return (
        <div>
            <MainNav urlEnd='/first/vstupSpezials' urlExit='/header'/>
            <MainZvits texting='Звіт №1' cssNum='1' urlName={lab1}/>
            <MainZvits texting='Звіт №2' cssNum='2' urlName={lab2}/>
            <MainZvits texting='Звіт №3' cssNum='3' urlName={lab3}/>
            <MainZvits texting='Звіт №4' cssNum='4' urlName={lab4}/>
        </div>
    );
}


export  {VstupZvits};