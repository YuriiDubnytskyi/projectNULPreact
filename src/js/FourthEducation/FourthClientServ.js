import React from 'react';
import '../../css/App.css';
import MainNav from '../main/MainNav.js'
import MainZvits from '../main/MainZvits.js'
import lab1cli from "../../files/sum4/CS1.docx"
import lab2cli from "../../files/sum4/CS2.docx"
import lab3cli from "../../files/sum4/CS3.docx"
import lab4cli from "../../files/sum4/CS4.docx"

function ServZvits() {
    return (
        <div>
            <MainNav urlEnd='/fourth/clientServer' urlExit='/header'/>
            <MainZvits texting='Звіт №1' cssNum='1' urlName={lab1cli}/>
            <MainZvits texting='Звіт №2' cssNum='2' urlName={lab2cli}/>
            <MainZvits texting='Звіт №3' cssNum='3' urlName={lab3cli}/>
            <MainZvits texting='Звіт №4' cssNum='4' urlName={lab4cli}/>
        </div>
    );
}


export  {ServZvits};