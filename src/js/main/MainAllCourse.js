import React from 'react';
import '../../css/App.css';
import MainNav from './MainNav.js'
import MainSubject from './MainSubject.js'

function MainFirst() {
    return (
        <div>
            <MainNav urlEnd='/header' urlExit='/header'/>
            <MainSubject texting='Українська мова' cssNum='1' urlName='/first/ukrainian'/>
            <MainSubject texting='Іноземна мова ч.1' cssNum='2' urlName='/first/englishFirst'/>
            <MainSubject texting='Вища математика ч.1' cssNum='3' urlName='/first/hightMatchFirst'/>
            <MainSubject texting='Операційні системи' cssNum='4' urlName='/first/operatingSystem'/>
            <MainSubject texting='Фізика' cssNum='5' urlName='/first/phisiks'/>
            <MainSubject texting='Вступ до спеціальност' cssNum='6' urlName='/first/vstupSpezials'/>
        </div>
    );
}
function MainSecond() {
    return (
        <div>
            <MainNav urlEnd='/header' urlExit='/header'/>
            <MainSubject texting="Комп'ютерна графіка" cssNum='1' urlName='/second/grafick'/>
            <MainSubject texting='Іноземна мова ч.2' cssNum='2' urlName='/second/englishSecond'/>
            <MainSubject texting='Вища математика ч.2' cssNum='3' urlName='/second/hightMatchSecond'/>
            <MainSubject texting='Веб дизайн' cssNum='4' urlName='/second/webDesign'/>
            <MainSubject texting='Основи Електроніки' cssNum='5' urlName='/second/electrisy'/>
            <MainSubject texting="Об'єктно орієнтовне програмування ч.1 (C++)" cssNum='6' urlName='/second/oopFirst'/>
        </div>
    );
}
function MainThird() {
    return (
        <div>
            <MainNav urlEnd='/header' urlExit='/header'/>
            <MainSubject texting="Системне програмування" cssNum='1' urlName='/third/systemPrograming'/>
            <MainSubject texting="Веб-технології" cssNum='2' urlName='/third/webTechnologies'/>
            <MainSubject texting="Cхемотехніка та архітектура комп'ютерів" cssNum='3' urlName='/third/computers'/>
            <MainSubject texting="Дискретна математика частина 1" cssNum='4' urlName='/third/districkMathFirst'/>
            <MainSubject texting="Об'єктно орієнтовне програмування ч.2 (С#)" cssNum='5' urlName='/third/oopSecond'/>
            <MainSubject texting="Історія України" cssNum='6' urlName='/third/ukraineHistory'/>
            <MainSubject texting="Комп'ютерні мережі" cssNum='7' urlName='/third/computerMerez'/>
        </div>
    );
}
function MainFourth() {
    return (
        <div>
            <MainNav urlEnd='/header' urlExit='/header'/>
            <MainSubject texting='Якість ПЗ та тестування' cssNum='1' urlName='/fourth/testing'/>
            <MainSubject texting='Теорія ймовірності та математична статистика' cssNum='2' urlName='/fourth/teoriMath'/>
            <MainSubject texting='Клієнт-серверне програмування' cssNum='3' urlName='/fourth/clientServer'/>
            <MainSubject texting='Дискретна математика частина 2' cssNum='4' urlName='/fourth/districkMathSecond'/>
            <MainSubject texting='Алгоритми та структури даних' cssNum='5' urlName='/fourth/algorutm'/>
            <MainSubject texting='Бази даних (SQL)' cssNum='6' urlName='/fourth/dataBase'/>
        </div>
    );
}



export  {MainFourth,MainThird,MainSecond,MainFirst};