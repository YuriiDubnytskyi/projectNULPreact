import React from 'react';
import '../../css/App.css';
import MainNav from '../main/MainNav.js'
import {start1,start2,clearFix,start3,clearFixLab4,exOne} from "../servises"

function AlgLab3() {
    return (
        <div>
            <MainNav urlEnd='/fourth/algorutm/labs' urlExit='/header'/>
            <div className="row h-50 ">
                <div className="col-sm-2 mr-1 h-100" >
                    <p className="text">Введіть кількість елементів</p>
                    <p><textarea rows={5} cols={5} id="numb" defaultValue={""} /></p>
                    <p><button  id="outputdfs" onClick={start1} >Завдання 1</button></p>
                    <p><button  onClick={start2} >Завдання 2</button></p>
                    <p><button  id="o" onClick={clearFix} >чистити</button></p>
                </div>
                <div className="col-sm-4 mr-5 h-100" >
                    <p className="text">Вивід масиву A</p>
                    <p><textarea rows={5} cols={45} id="arrA" defaultValue={""} /></p>
                    <p className="text">Вивід масиву B</p>
                    <p><textarea rows={5} cols={45} id="arrB" defaultValue={""} /></p>
                </div>
                <div className="col-sm-4 h-100" >
                    <p className="text">Вивід чисел в несортованому масиві</p>
                    <p><textarea rows={5} cols={45} id="notSort" defaultValue={""} /></p>
                    <p className="text">Вивід чисел в відсортованому масиві</p>
                    <p><textarea rows={5} cols={45} id="sort" defaultValue={""} /></p>
                </div>
            </div>
        </div>
    );
}
function AlgLab4() {
    return (
        <div>
            <MainNav urlEnd='/fourth/algorutm/labs' urlExit='/header'/>
            <div className="row h-50 ">
                <div className="col-sm-2 mr-1 h-100" >
                    <p className="text">Введіть кількість елементів</p>
                    <p><textarea rows={5} cols={5} id="numb" defaultValue={""} /></p>
                    <p><button id="outputdfs" onClick={start3} >Завдання 1</button></p>
                    <p><button id="o" onClick={clearFixLab4} >чистити</button></p>
                </div>
                <div className="col-sm-4 mr-5 h-100" >
                    <p className="text">Вивід масиву A</p>
                    <p><textarea rows={5} cols={45} id="arrA" defaultValue={""} /></p>
                </div>
                <div className="col-sm-4 h-100" >
                    <p className="text">Вивід сортування включеням</p>
                    <p><textarea rows={5} cols={45} id="insertionSort" defaultValue={""} /></p>
                    <p className="text">Вивід порозрядного сортування</p>
                    <p><textarea rows={5} cols={45} id="radixSort" defaultValue={""} /></p>
                </div>
            </div>
        </div>
    );
}
function AlgLab5() {
    return (
        <div>
            <MainNav urlEnd='/fourth/algorutm/labs' urlExit='/header'/>
            <div className="row h-50 ">
                <div className="col-sm-2 mr-5 h-100" >
                    <p className="text">Вершина A</p>
                    <p><textarea rows={2} cols={2} id="verAx" defaultValue={""} /></p>
                    <p><textarea rows={2} cols={2} id="verAy" defaultValue={""} /></p>
                    <p className="text">Вершина B</p>
                    <p><textarea rows={2} cols={2} id="verBx" defaultValue={""} /></p>
                    <p><textarea rows={2} cols={2} id="verBy" defaultValue={""} /></p>
                </div>
                <div className="col-sm-2 mr-5 h-100" >
                    <p className="text">Вершина C</p>
                    <p><textarea rows={2} cols={2} id="verCx" defaultValue={""} /></p>
                    <p><textarea rows={2} cols={2} id="verCy" defaultValue={""} /></p>
                    <p className="text">Вершина D</p>
                    <p><textarea rows={2} cols={2} id="verDx" defaultValue={""} /></p>
                    <p><textarea rows={2} cols={2} id="verDy" defaultValue={""} /></p>
                </div>
                <div className="col-sm-5 mr-5 h-100" >
                    <canvas id="myCanvas" width={300} height={300} style={{background: 'white', border: '1px solid black'}} />
                    <p><button id="exone" onClick={exOne} >Завдання 2</button></p>
                </div>
            </div>
        </div>
    );
}

export  {AlgLab3,AlgLab4,AlgLab5};