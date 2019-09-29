import React from 'react';
import '../../css/App.css';
import MainNav from '../main/MainNav.js'
import MainZvits from '../main/MainZvits.js'

import lec1 from "../../files/sum2/вищмат/Лекція 1.1..pdf"
import lec2 from "../../files/sum2/вищмат/Лекція 2.1..pdf"
import lec3 from "../../files/sum2/вищмат/Лекція 2.2..pdf"
import lec4 from "../../files/sum2/вищмат/Лекція 3.1..pdf"
import lec5 from "../../files/sum2/вищмат/Лекція 3.2..pdf"
import lec6 from "../../files/sum2/вищмат/Лекція 4.1..pdf"
import lec7 from "../../files/sum2/вищмат/Лекція 4.2..pdf"
import lec8 from "../../files/sum2/вищмат/Лекція 5.1..pdf"
import lec9 from "../../files/sum2/вищмат/Лекція 5.2..pdf"
import lec10 from "../../files/sum2/вищмат/Лекція 6.1..pdf"
import lec11 from "../../files/sum2/вищмат/Лекція 6.2..pdf"
import lec12 from "../../files/sum2/вищмат/Лекція 6.3..pdf"
import lec13 from "../../files/sum2/вищмат/Лекція 7.1..pdf"
import lec14 from "../../files/sum2/вищмат/Лекція 8.1..pdf"
import lec15 from "../../files/sum2/вищмат/Лекція 9.1..pdf"
import lec16 from "../../files/sum2/вищмат/Лекція 9.2..pdf"
import lec17 from "../../files/sum2/вищмат/Лекція 9.3..pdf"
import lec18 from "../../files/sum2/вищмат/Лекція 9.4..pdf"



function MathLec() {
    return (
        <div>
            <MainNav urlEnd='/second/hightMatchSecond' urlExit='/header'/>
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
        </div>
    );
}
export  {MathLec};