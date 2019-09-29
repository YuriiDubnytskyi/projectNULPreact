import React from 'react';
import '../../css/App.css';
import MainNav from '../main/MainNav.js'
import MainZvits from '../main/MainZvits.js'

import lab1 from "../../files/sum2/компграф/Лаба1 (Автозбережено).docx"
import lab2 from "../../files/sum2/компграф/компютернаграф2.docx"
import lab3 from "../../files/sum2/компграф/компюткрна графіка3.docx"
import lab4 from "../../files/sum2/компграф/графіка4.docx"
import lab5 from "../../files/sum2/компграф/графіка5.docx"
import lab6 from "../../files/sum2/компграф/графіка6666.docx"
import lab7 from "../../files/sum2/компграф/графіка7777.docx"
import met1 from "../../files/sum2/компграф/метLab1-2(knm).docx"
import met2 from "../../files/sum2/компграф/метlab3.doc"
import ind from "../../files/sum2/компграф/компютернаграфікаідивідуалка.docx"
import sam from "../../files/sum2/компграф/самостійнакомпютернаграфіка.docx"




function GrafMet() {
    return (
        <div>
            <MainNav urlEnd='/second/grafick' urlExit='/header'/>
            <MainZvits texting='Методичка 1' cssNum='1' urlName={met1}/>
            <MainZvits texting='Методичка 2' cssNum='2' urlName={met2}/>
            <MainZvits texting='Індивідуальна 3' cssNum='3' urlName={ind}/>
            <MainZvits texting='Самостійна 4' cssNum='4' urlName={sam}/>

        </div>
    );
}
function GrafZvit() {
    return (
        <div>
            <MainNav urlEnd='/second/grafick' urlExit='/header'/>
            <MainZvits texting='Звіт 1' cssNum='1' urlName={lab1}/>
            <MainZvits texting='Звіт 2' cssNum='2' urlName={lab2}/>
            <MainZvits texting='Звіт 3' cssNum='3' urlName={lab3}/>
            <MainZvits texting='Звіт 4' cssNum='4' urlName={lab4}/>
            <MainZvits texting='Звіт 5' cssNum='5' urlName={lab5}/>
            <MainZvits texting='Звіт 6' cssNum='6' urlName={lab6}/>
            <MainZvits texting='Звіт 7' cssNum='7' urlName={lab7}/>
        </div>
    );
}

export  {GrafMet,GrafZvit};