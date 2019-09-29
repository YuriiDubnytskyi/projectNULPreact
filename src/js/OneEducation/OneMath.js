import React from 'react';
import '../../css/App.css';
import MainNav from '../main/MainNav.js'
import MainZvits from '../main/MainZvits.js'
import lec1 from "../../files/sum1/вищмат/lek_1_1.doc"
import lec2 from "../../files/sum1/вищмат/lek_1_2.doc"
import lec3 from "../../files/sum1/вищмат/lek_2_1.doc"
import book from "../../files/sum1/вищмат/в_ч_мет_1_нов.doc"
import ind from "../../files/sum1/вищмат/Індивідуальна робота з дисципліни.docx"

function MathOneMet() {
    return (
        <div>
            <MainNav urlEnd='/first/hightMatchFirst' urlExit='/header'/>
            <MainZvits texting='Книга' cssNum='4' urlName={book}/>
            <MainZvits texting='Індивідуальна' cssNum='5' urlName={ind}/>
        </div>
    );
}
function MathOneLec() {
    return (
        <div>
            <MainNav urlEnd='/first/hightMatchFirst' urlExit='/header'/>
            <MainZvits texting='Лекція 1' cssNum='1' urlName={lec1}/>
            <MainZvits texting='Лекція 2' cssNum='2' urlName={lec2}/>
            <MainZvits texting='Лекція 3' cssNum='4' urlName={lec3}/>
        </div>
    );
}
export  {MathOneMet,MathOneLec};