import React from 'react';
import '../../css/App.css';
import MainNav from '../main/MainNav.js'
import MainZvits from '../main/MainZvits.js'
import lec1 from "../../files/sum1/укр/посібник_Укр_мова_за_проф_спрямув.doc"
import lec2 from "../../files/sum1/укр/Відмінювання імен.doc"
import lec3 from "../../files/sum1/укр/ІМЕННИК.doc"
import lec4 from "../../files/sum1/укр/Культура мовлення особистості. практична.doc"
import lec5 from "../../files/sum1/укр/питання на іспит.doc"
import lec6 from "../../files/sum1/укр/практичнаЛЕКСИЧНІ_ТА_ФРАЗЕОЛОГІЧНІ.doc"
import lec7 from "../../files/sum1/укр/Практичне заняття 1 укр мова.docx"
import lec8 from "../../files/sum1/укр/прикметник.doc"
import lec9 from "../../files/sum1/укр/Тема 3 Вербальні та невербальні засоби спілкування.docx"
import lec10 from "../../files/sum1/укр/Тема_6_Текст_як_засіб_різностильової.docx"
import lec11 from "../../files/sum1/укр/Теми_індивідуальних_робіт_укр_мов.doc"


function UkrOneLec() {
    return (
        <div>
            <MainNav urlEnd='/first/ukrainian' urlExit='/header'/>
            <MainZvits texting='Лекція 1' cssNum='9' urlName={lec1}/>
            <MainZvits texting='Лекція 2' cssNum='9' urlName={lec2}/>
            <MainZvits texting='Лекція 3' cssNum='9' urlName={lec3}/>
            <MainZvits texting='Лекція 4' cssNum='9' urlName={lec4}/>
            <MainZvits texting='Лекція 6' cssNum='9' urlName={lec6}/>
            <MainZvits texting='Лекція 7' cssNum='9' urlName={lec7}/>
            <MainZvits texting='Лекція 8' cssNum='9' urlName={lec8}/>
            <MainZvits texting='Лекція 9' cssNum='9' urlName={lec9}/>
            <MainZvits texting='Лекція 10' cssNum='9' urlName={lec10}/>
            <MainZvits texting='Індивідуалка' cssNum='9' urlName={lec11}/>
            <MainZvits texting='Питання на іспит' cssNum='9' urlName={lec5}/>
        </div>
    );
}
export  {UkrOneLec};