import React from 'react';
import '../../css/App.css';
import MainNav from '../main/MainNav.js'
import {outputsum,outputinc,outputstep,outputvusazi,dfs,bfs,district,eler}from "../servises"

function DistLab1() {
    return (
        <div>
            <MainNav urlEnd='/fourth/districkMathSecond/labs' urlExit='/header'/>
            <div className="row h-50 ">
                <div className="col-sm-5 mr-5 h-100" >
                    <p className="text">Введіть граф для розрахунку</p>
                    <textarea rows={15} cols={20} name="text" id="start" defaultValue={"1"} />
                </div>
                <div className="col-sm-5 mr-5 h-100" >
                        <p className="text">Вивід матриці суміжності</p>
                        <p><textarea rows={5} cols={45} id="sum" defaultValue={""} /></p>
                        <p><button id="outputsum" onClick={outputsum} >Матриця суміжності</button></p>
                        <p className="text">Вивід матриці інцидентності</p>
                        <p><textarea rows={5} cols={45} id="inc" defaultValue={""} /></p>
                        <p><button id="outputinc" onClick={outputinc} >Матриця інцидентності</button></p>
                </div>
            </div>
        </div>
    );
}

function DistLab2() {
    return (
        <div>
            <MainNav urlEnd='/fourth/districkMathSecond/labs' urlExit='/header'/>
            <div className="row h-50 ">
                <div className="col-sm-5 mr-5 h-100" >
                    <p className="text">Введіть граф для розрахунку</p>
                    <textarea rows={15} cols={20} name="text" id="start" defaultValue={""} />
                </div>
                <div className="col-sm-5 mr-5 h-100" >
                    <p className="text">Вивід степеней вершин графу</p>
                    <p><textarea rows={5} cols={45} id="step" defaultValue={""} /></p>
                    <p><button  id="outputstep" onClick={outputstep} >Вивід степеней вершин графу</button></p>
                    <p className="text">Вивід висячих та ізольованих вершин</p>
                    <p><textarea rows={5} cols={45} id="vusazi" defaultValue={""} /></p>
                    <p><button  id="outputvusazi" onClick={outputvusazi} >Вивід висячих та ізольованих вершин</button></p>
                </div>
            </div>
        </div>
    );
}

function DistLab4() {
    return (
        <div>
            <MainNav urlEnd='/fourth/districkMathSecond/labs' urlExit='/header'/>
            <div className="row h-50 ">
                <div className="col-sm-3 mr-5 h-100" >
                    <p className="text">Введіть граф для розрахунку</p>
                    <textarea rows={15} cols={20} name="text" id="start" defaultValue={""} />
                </div>
                <div className="col-sm-2 mr-5 h-100" >
                    <p className="text">Введіть вершину</p>
                    <p><textarea rows={5} cols={5} id="ver" defaultValue={""} /></p>
                </div>
                <div className="col-sm-5 mr-5 h-100" >
                    <p className="text">Вивід DFS</p>
                    <p><textarea rows={5} cols={45} id="dfs" defaultValue={""} /></p>
                    <p><button  id="outputdfs" onClick={dfs} >Вивід DFS</button></p>
                    <p className="text">Вивід BFS</p>
                    <p><textarea rows={5} cols={45} id="bfs" defaultValue={""} /></p>
                    <p><button  id="outputbfs" onClick={bfs} >Вивід BFS</button></p>
                </div>
            </div>
        </div>
    );
}

function DistLab7() {
    return (
        <div>
            <MainNav urlEnd='/fourth/districkMathSecond/labs' urlExit='/header'/>
            <div className="row h-50 ">
                <div className="col-sm-3 mr-5 h-100" >
                    <p className="text">Введіть граф для розрахунку</p>
                    <textarea rows={15} cols={20} name="text" id="start" defaultValue={""} />
                </div>
                <div className="col-sm-2 mr-5 h-100" >
                    <p className="text">Введіть вершину A</p>
                    <p><textarea rows={5} cols={5} id="verA" defaultValue={""} /></p>
                    <p className="text">Введіть кількість вершин</p>
                    <p><textarea rows={5} cols={5} id="vers" defaultValue={""} /></p>
                </div>
                <div className="col-sm-5 mr-5 h-100" >
                    <p className="text">Найкоротший шлях</p>
                    <p><textarea rows={10} cols={45} id="districtValue" defaultValue={""} /></p>
                    <p><button id="district" onClick={district} >Вивід DFS</button></p>
                </div>
            </div>
        </div>
    );
}

function DistLab10() {
    return (
        <div>
            <MainNav urlEnd='/fourth/districkMathSecond/labs' urlExit='/header'/>
            <div className="row h-50 ">
                <div className="col-sm-3 mr-5 h-100" >
                    <p className="text">Введіть граф для розрахунку</p>
                    <textarea rows={15} cols={20} name="text" id="start" defaultValue={""} />
                </div>
                <div className="col-sm-2 mr-5 h-100" >
                    <p className="text">Введіть кількість вершин</p>
                    <p><textarea rows={5} cols={5} id="verA" defaultValue={""} /></p>
                </div>
                <div className="col-sm-5 mr-5 h-100" >
                    <p className="text">Ейлерів цикл</p>
                    <p><textarea rows={10} cols={45} id="elerValue" defaultValue={""} /></p>
                    <p><button  id="eler" onClick={eler} >Ейлерів цикл</button></p>
                </div>
            </div>
        </div>
    );
}

export  {DistLab1,DistLab2,DistLab4,DistLab7,DistLab10};