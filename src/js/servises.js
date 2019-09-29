import anime from '../../node_modules/animejs/lib/anime.es.js';
import $ from "jquery";

export function start(){
    let minHeight = document.getElementsByClassName('col-sm-9')[0];
    let minWidth = document.getElementsByClassName('col-sm-9')[0];
    console.log(minWidth.clientWidth);
    let maxWidth =document.getElementsByTagName('html')[0];
    console.log(maxWidth.clientWidth);
    let radius ;
    if(maxWidth.clientWidth > 1440){
        radius = 300
    }else if(maxWidth.clientWidth<=1440){
        radius = 200
    }else if(maxWidth.clientWidth >=720){
        radius = 150
    }

    let f = 0;
    let s = 2 * Math.PI / 180;
    function drawing(){
        f += s;
        anime({
            targets: '.css1',
            left: minWidth.clientWidth/2.5 + radius*Math.cos(f) +"px",
            top:minHeight.clientHeight/2 + radius*Math.sin(f)+"px"

        })
    }
    let g=1;
    function drawing2(){
        g += s;
        anime({
            targets: '.css5',
            left: minWidth.clientWidth/2.5 + radius*Math.cos(g) +"px",
            top:minHeight.clientHeight/2 + radius*Math.sin(g)+"px"

        })

    }

    let h=2;
    function drawing3(){
        h += s;
        anime({
            targets: '.css3',
            left: minWidth.clientWidth/2.5 + radius*Math.cos(h) +"px",
            top:minHeight.clientHeight/2 + radius*Math.sin(h)+"px"

        })

    }

    let q=3;
    function drawing4(){
        q += s;
        anime({
            targets: '.css2',
            left: minWidth.clientWidth/2.5 + radius*Math.cos(q) +"px",
            top:minHeight.clientHeight/2 + radius*Math.sin(q)+"px"

        })
    }

    let w=4.2;
    function drawing5(){
        w += s;
        anime({
            targets: '.css4',
            left: minWidth.clientWidth/2.5 + radius*Math.cos(w) +"px",
            top:minHeight.clientHeight/2 + radius*Math.sin(w)+"px"

        })
    }

    let e=5.4;
    function drawing6(){
        e += s;
        anime({
            targets: '.css6',
            left: minWidth.clientWidth/2.5 + radius*Math.cos(e) +"px",
            top:minHeight.clientHeight/2 + radius*Math.sin(e)+"px"

        })
    }

    function drawing11(){
        f += s;
        anime({
            targets: '.css11',
            left: minWidth.clientWidth/2.5 + radius*Math.cos(f) +"px",
            top:minHeight.clientHeight/2 + radius*Math.sin(f)+"px"
        })
    }
    function drawing12(){
        g += s;
        anime({
            targets: '.css15',
            left: minWidth.clientWidth/2.5 + radius*Math.cos(g) +"px",
            top:minHeight.clientHeight/2 + radius*Math.sin(g)+"px"
        })
    }
    function drawing13(){
        h += s;
        anime({
            targets: '.css13',
            left: minWidth.clientWidth/2.5 + radius*Math.cos(h) +"px",
            top:minHeight.clientHeight/2 + radius*Math.sin(h)+"px"
        })
    }
    function drawing14(){
        q += s;
        anime({
            targets: '.css12',
            left: minWidth.clientWidth/2.5 + radius*Math.cos(q) +"px",
            top:minHeight.clientHeight/2 + radius*Math.sin(q)+"px"
        })
    }
    function drawing15(){
        w += s;
        anime({
            targets: '.css14',
            left: minWidth.clientWidth/2.5 + radius*Math.cos(w) +"px",
            top:minHeight.clientHeight/2 + radius*Math.sin(w)+"px"
        })
    }
    function drawing16(){
        e += s;
        anime({
            targets: '.css16',
            left: minWidth.clientWidth/2.5 + radius*Math.cos(e) +"px",
            top:minHeight.clientHeight/2 + radius*Math.sin(e)+"px"
        })
    }


    setInterval(function(){
        drawing();
        drawing2();
        drawing3();
        drawing4();
        drawing5();
        drawing6();
    },90);
    setInterval(function(){
        drawing11();
        drawing12();
        drawing13();
        drawing14();
        drawing15();
        drawing16();
    },700);

}
export const ready = $( document ).ready(function() {
    let list = document.getElementsByClassName("list")[0].children;

    $(".clicks").click(function(){
        for(let i=0;i<list.length;i++){
            $("."+list[i].children[0].classList[0]).hide();
            $('.'+this.children[0].classList[0]).show();
        }
        setInterval(function () {
            for(let i=0;i<list.length;i++){
                $("."+list[i].children[0].classList[0]).hide();
            }
        },10000)
    });
    let maxWidth =document.getElementsByTagName('html')[0];
    if(maxWidth.clientWidth>720){
        start()
    }
    let loc =window.location.href;
    console.log(loc);
    if( loc === "http://studying.yurdub.now.sh/"){
        window.location.href="http://studying.yurdub.now.sh/header";
    }
});


function startlab() {
    let text = document.getElementById('start').value;
    if(text === null){
        return false
    }
    function starting( text){
        let array = text.split(",");
        let number = [];
        let a;
        for(let i =0;i<array.length;i++){
            a = [array[i].trim().split(" ")];
            number[i] = a;
        }
        return number
    }
    let number = starting(text);
    return number
}

function newArray(masif,a,b){
    let j = 0;
    for(let i = 1;i<masif.length;i++){

        if(masif[i][0][j] == a && masif[i][0][j+1] == b){
            if(a == b){
                return 2
            }else{
                return true
            }
        }else if(masif[i][0][j] == b && masif[i][0][j+1] == a){
            return -1
        }else if(i ==masif.length){
            return false
        }
    }
}

export function outputsum() {
    let number = startlab();
    function sum(number){
        let text = document.getElementById('sum');
        let n = number[0][0][0], m = number[0][0][0];
        text.value = '';
        for (let i = 0; i < m; i++){
            for (let j = 0; j < n; j++){
                if(newArray(number,i+1,j+1)==true || newArray(number,i+1,j+1) == 2  ){
                    text.value += 1 + " "
                }else{
                    text.value += 0 + " ";
                }
            }
            text.value += "\n"
        }
    }
    sum(number)
}

export function outputinc() {
    let number = startlab();
    function inzuden(number){
        let text = document.getElementById('inc');
        text.value = '';
        let k = number[0][0][1], g = number[0][0][0];
        let matrix = [];
        for (let i = 0; i < g; i++){
            matrix[i] = [];
            for (let j = 0; j < k; j++){
                matrix[i][j] = 0;
            }
        }
        for(let i = 1;i<number.length;i++){
            try{
                if((number[i][0][0]-1)==(number[i][0][1]-1)){
                    matrix[number[i][0][0]-1][i-1] = 2;
                }else{
                    matrix[number[i][0][0]-1][i-1] = 1;
                    matrix[number[i][0][1]-1][i-1] = -1;
                }
            }catch(e){
                console.log(e.name)
            }
        }
        for (let i = 0; i < g; i++){
            for (let j = 0; j < k; j++){
                text.value += matrix[i][j] + " " ;
            }
            text.value += '\n'
        }
        return matrix
    }
    inzuden(number)
}

let degvplus =[];
let degvminus =[];

export function outputstep() {
    let number = startlab();
    degvplus =[];
    degvminus =[];

    let text = document.getElementById('step');
    text.value = '';
    for (let i = 1; i <= number[0][0][0]; i++) {
        let degplus = 0;
        for (let j = 1; j < number.length; j++) {
            if (number[j][0][0] == i) {
                degplus++
            }
        }
        degvplus.push(degplus)
    }
    for (let i = 1; i <= number[0][0][0]; i++) {
        let degminus = 0;
        for (let j = 1; j < number.length; j++) {
            if (number[j][0][1] == i) {
                degminus++
            }
        }
        degvminus.push(degminus)
    }
    for (let i = 0; i < degvplus.length; i++) {
        text.value += "Степінь виходу вершини " + (i + 1)+"--"+ + degvplus[i] +'\n';
    }
    text.value +="\n";
    for (let i = 0; i < degvminus.length; i++) {
        text.value += "Степінь заходу вершини " + (i + 1)+"--"+ + degvminus[i] +'\n';
    }
    return {degvplus,degvminus}
}

export function outputvusazi(){
    function outputing(degvplus,degvminus) {
        console.log(degvminus);
        let text = document.getElementById('vusazi');
        text.value = '';
        for(let i = 0; i < degvplus.length;i++){
            if(degvplus[i] + degvminus[i] == 0){
                text.value += "Ізольована вершина " + (i+1);
                text.value += "\n"
            }else if(degvplus[i] + degvminus[i] == 1){
                text.value += "Висяча вершина " + (i+1);
                text.value += "\n"
            }
        }
    }
    outputing(degvplus,degvminus)
}

export function dfs() {
    let degvplus =[];
    let ver = document.getElementById('ver').value;
    let number = startlab();
    for (let i = 1; i <= number.length; i++) {
        let degplus = 0;
        for (let j = 0; j < number.length; j++) {
            if (number[j][0][0] == i) {
                degplus++
            }
        }
        degvplus.push(degplus)
    }
    deathFirstSearch(number,ver,degvplus)
}

function search(array,ver,vizut){
    for(let i = 0;i<array.length;i++){
        if(array[i][0][1]==ver){
            vizut[array[i][0][0]-1]= vizut[array[i][0][0]-1]-1
        }
    }
    for(let i =0 ;i<vizut.length;i++){
        if(vizut[i]<0){
            vizut[i]=0
        }
    }
}
function newVersearch(numb,vizut) {
    for(let i =0;i<vizut.length;i++){
        if(vizut[i]==0){

        }else{
            return numb=i+1
        }
    }
}

function output(text,array,values){
    text.value+=values;
    for(let i = 0;i<array.length;i++){
        text.value+=array[i]+' '
    }
    text.value+='\n'
}
function deathFirstSearch(array,ver,vizut){
    let varIndexClone=[];
    let varIndex=[];
    let verIndexNumb=ver;
    let DFS = [];
    let STACK=[];
    let indexDfs = 1;
    let verhun;
    let newVer;
    verhun = ver;
    let str='';
    let chexk=0;
    for ( let i = 0;i<array.length;i++) {
        if (!varIndex.includes(verIndexNumb+'')){
            varIndex.push(verIndexNumb);
            varIndexClone.push(verIndexNumb)
        }
        DFS.push(indexDfs);

        if(i == 0 ){
            STACK.push(verIndexNumb)
        }else{
            for(let i=0;i<varIndexClone.length;i++){
                str += varIndexClone[i]+''
            }
            STACK.push(str);
            str=''
        }

        for(let a = 0;a<vizut.length;a++) {
            if(array[a][0][0] == verIndexNumb) {
                if(verhun == verIndexNumb&&chexk==0){
                    search(array,verIndexNumb,vizut);
                    chexk++
                }
                if(varIndex.includes(array[a][0][1])){
                    if(vizut[verIndexNumb-1]  == 0){
                        verIndexNumb= newVersearch(verIndexNumb,vizut);
                        newVer = verIndexNumb;
                        for(let i =varIndexClone.length;i>=varIndexClone.length;){
                            if(varIndexClone[--i]!=verIndexNumb){
                                varIndexClone.pop()
                            }
                        }
                    }
                    continue;
                }else{
                    newVer = array[a][0][1];
                    break;
                }
            }
        }
        verIndexNumb = newVer;
        verhun=newVer;
        chexk=0;
        indexDfs++;

        if(varIndex.length==array[array.length-1][0][0]){
            let text = document.getElementById('dfs');
            output(text,DFS,'DFS : ');
            output(text,varIndex,'Index v : ');
            output(text,STACK,'STACK : ');
            return
        }
    }

}
export function bfs() {
    let ver = document.getElementById('ver').value;
    let number = startlab();
    BFirstSearch(number,ver)

}
function BFirstSearch(array,ver) {
    let verIndex = [];
    let BFS=[];
    let Guene=[];
    let index = 1;
    verIndex.push(ver);
    BFS.push(index);
    Guene.push(ver);
    let numbIndex =0;
    let numb = verIndex[numbIndex];
    let indexgo =0;
    let a;
    for(let i =0;i<array.length;i++){
        if(array[i][0][0]==numb){
            if(verIndex.includes(array[i][0][1])){
                continue
            }else{
                for(a = 0;a<array.length;a++){
                    if(array[a][0][0]==numb && !verIndex.includes(array[a][0][1])){
                        verIndex.push(array[a][0][1]);
                        BFS.push(++index)
                    }
                }
                numb=verIndex[++indexgo];
                i=-1;
                a=0;
            }
        }
        if(9==BFS.length){
            break
        }
    }
    let text=document.getElementById('bfs');
    output(text,verIndex,'Index v :');
    output(text,BFS,'BFS : ')

}

export function district() {
    let starting = document.getElementById('verA').value;
    let vers = document.getElementById('vers').value;
    let text = document.getElementById('start').value;
    let number = start(text);
    let arraymax=[];
    let arraynow=[];
    let arraymin=[];
    let obg={};
    let visit= new Array(8);


    let graf = new districtGraf();
    for(let m = 1;m<=vers;m++){
        graf.addVertex(''+m+'',searh(m,number))
    }
    let output = document.getElementById('districtValue');
    output.value += ('Жадібний алгоритм'+'\n');
    for(let b =1;b<=vers;b++){
        output.value += 'До вершини '+b+'--'+(graf.shortestPath(starting, b+'').concat([starting]).reverse())+'\n';
    }



    for(let i =0;i<vers;i++){
        arraymax[i]=100;
        arraynow[i]=0;
        visit[i]=0
    }
    for(let i = 0 ; i < vers ; i++){let verhin=100;
        for(let k =0;k<number.length;k++){
            if(starting == number[k][0][0] && visit[number[k][0][1]-1] != 1){

                if(arraynow[number[k][0][1]-1] == 0){
                    if(arraymax[number[k][0][1]-1] > (+arraynow[number[k][0][0]-1] + +number[k][0][2])){

                        arraynow[number[k][0][1]-1]=+arraynow[number[k][0][0]-1] + +number[k][0][2]
                        obg[number[k][0][1]]=arraynow[number[k][0][1]-1]
                    }
                }else if(arraynow[number[k][0][1]-1] != 0){
                    if(arraynow[number[k][0][1]-1] > (+arraynow[number[k][0][0]-1] + +number[k][0][2])){
                        arraynow[number[k][0][1]-1]=+arraynow[number[k][0][0]-1] + +number[k][0][2]
                        obg[number[k][0][1]]=arraynow[number[k][0][1]-1]
                    }
                }
                visit[number[k][0][0]-1]=1;
            }
        }
        starting = searchmin(obg);
        for (const prop of Object.getOwnPropertyNames(obg)) {
            delete obg[prop];
        }
        if(starting==undefined){
            starting=search2(number,lastStarting)

        }
        let lastStarting=starting
    }
    console.log(arraynow);
    console.log(arraymax);
    console.log(visit);
    console.log(obg);
    output.value += ('Дейкстри алгоритм'+'\n');
    for(let q =1;q<=vers;q++){
        output.value += 'До вершини '+q+'--'+arraynow[q-1]+'\n';
    }
}
function search2(array,numb){
    for(let g=0;g<array.length;g++){
        if(numb==array[g][0][0]){
            return array[g][0][1]
        }
    }
}
function searchmin(obg){
    let min =Math.min.apply(Math,Object.values(obg))
    for(let item in obg){
        if(obg[item] == min){
            return item
        }
    }
}
function searh(ver,array){
    let obg={};
    for(let i =0 ;i<array.length;i++){
        if(array[i][0][0]==ver){
            obg[array[i][0][1]]=array[i][0][2]
        }
    }
    return obg

}

function PriorityQueue () {
    this._nodes = [];
    this.enqueue = function (priority, key) {
        this._nodes.push({key: key, priority: priority });
        this.sort();
    };
    this.dequeue = function () {
        return this._nodes.shift().key;
    };
    this.sort = function () {
        this._nodes.sort(function (a, b) {
            return a.priority - b.priority;
        });
    };
    this.isEmpty = function () {
        return !this._nodes.length;
    };
}

function districtGraf(){
    let INFINITY = 1/0;
    this.vertices = {};
    this.addVertex = function(name, edges){
        this.vertices[name] = edges;
    };
    this.shortestPath = function (start, finish) {
        let nodes = new PriorityQueue(),
            distances = {},
            previous = {},
            path = [],
            smallest, vertex, neighbor, alt;
        for(vertex in this.vertices) {
            if(vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(0, vertex);
            }
            else {
                distances[vertex] = INFINITY;
                nodes.enqueue(INFINITY, vertex);
            }
            previous[vertex] = null;
        }
        while(!nodes.isEmpty()) {
            smallest = nodes.dequeue();
            if(smallest === finish) {
                path = [];
                while(previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if(!smallest || distances[smallest] === INFINITY){
                continue;
            }
            for(neighbor in this.vertices[smallest]) {
                alt = distances[smallest] + this.vertices[smallest][neighbor];
                if(alt < distances[neighbor]) {
                    distances[neighbor] = alt;
                    previous[neighbor] = smallest;
                    nodes.enqueue(alt, neighbor);
                }
            }
        }
        return path;
    };
}


export function eler() {
    let number = startlab();
    let numbing=document.getElementById("verA").value
    let degvplus =[];
    for (let i = 1; i <= numbing; i++) {
        let degplus = 0;
        for (let j = 0; j < number.length; j++) {
            if (number[j][0][0] == i) {
                degplus++
            }
        }
        degvplus.push(degplus)
    }
    console.log(degvplus);
    let check=0;
    for(let i =0;i<degvplus.length;i++){
        if(degvplus[i]%2==0){
            check++
        }
    }
    /*
	перевіряєм чи має кожна вершина парну кількість ребер
	*/
    if(check==degvplus.length){
        elering(number,check)
    }else{
        let texting = document.getElementById("elerValue")
        texting.value="nothing"
    }
}

function elering(number,length) {

    let arrayLength=number.length;
    let eleringVerh=[];
    eleringVerh.push(length)
    for(let i=0;i<number.length;i++){
        for(let j =0;j<number.length;j++){
            if(number[j][0][0]==length){

                length=number[j][0][1];
                eleringVerh.push(length);

                let k = deleting(number,number[j][0][0],number[j][0][1]);
                number[j][0][0]=0;
                number[j][0][1]=0;
                number[k][0][0]=0;
                number[k][0][1]=0;
                break
            }
        }
        let texting = document.getElementById("elerValue");
        arrayLength-=2;
        if(eleringVerh[0]==eleringVerh[eleringVerh.length-1]&&arrayLength==0){
            console.log('greate');

            //output(text,eleringVerh,"Ейлерів цикл")
            texting.value="Ейлерів цикл - ";
            for(let i = 0;i<eleringVerh.length;i++){
                texting.value+=eleringVerh[i]+' '
            }
            console.log(eleringVerh)
            break
        }
    }

}
function deleting(array,numberFirst,numberLast) {
    for(let i=0;i<array.length;i++){
        if(array[i][0][0]==numberLast&&array[i][0][1]==numberFirst){
            return i
        }
    }
}
/*----aaaaaaaaalllllllllllllggggggggggooooooooooooooorrrrrrrrrruuuuuuuuuuuutttttttmmmmmmmm
*
*
* */

function searchNumb(arr,index){
    let numbing=[];
    let check=0;
    for(let number = 0,j=0;j<index;j++){
        for(let i=0;i<arr.length;i++){
            if(number==arr[i]){
                check++
            }
            if(check==2){
                numbing.push(arr[i]);
                break
            }

        }
        number++;
        check=0
    }
    return numbing
}
function selectionSort(arr){
    let minIdx, temp,
        len = arr.length;
    for(let i = 0; i < len; i++){
        minIdx = i;
        for(let  j = i+1; j<len; j++){
            if(arr[j]<arr[minIdx]){
                minIdx = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
    return arr;
}
function outputAlg1(text,array){
    for(let i = 0;i<array.length;i++){
        text.value += array[i]+' '
    }
}
export function clearFix(){
    let arrAoutput = document.getElementById('arrA');
    let arrBoutput =document.getElementById('arrB');
    let numbNotsort =document.getElementById('notSort');
    let numbSort = document.getElementById('sort');
    arrAoutput.value ='';
    arrBoutput.value ='';
    numbNotsort.value ='';
    numbSort.value =''
}
export function start1(){
    let size = document.getElementById('numb').value;
    let arrAoutput = document.getElementById('arrA');
    let arrBoutput =document.getElementById('arrB');
    let numbNotsort =document.getElementById('notSort');
    let numbSort = document.getElementById('sort');
    let index=100;
    let arrA = [size];
    let arrB = [size];
    for(let i =0;i<size;i++){
        let numb = Math.floor(Math.random()*index);
        arrA[i]=numb;
        numb = Math.floor(Math.random()*index);
        arrB[i]=numb
    };
    outputAlg1(arrAoutput,arrA);
    outputAlg1(arrBoutput,arrB);

    console.time("first");

    let first= searchNumb(arrA,index);
    let second=searchNumb(arrB,index);
    let zero = first.concat(second);
    let setNotsort = new Set(zero);

    console.timeEnd("first");

    selectionSort(arrA);
    selectionSort(arrB);

    console.time("firstsort");

    let firstSort=searchNumb(arrA,index);
    let secondSort=searchNumb(arrB,index);
    let zeroSort=firstSort.concat(secondSort);
    let setSort = new Set(zeroSort);

    console.timeEnd("firstsort");
    outputAlg1(numbNotsort,Array.from(setNotsort));
    outputAlg1(numbSort,Array.from(setSort))

}
function second(array1,array2,size){
    let numbing=[];
    let check=0;
    for(let number = 0,j=0;j<size;j++){
        for(let i=0;i<array1.length;i++){
            if(number==array1[i]){
                check++
            }
        }
        if(check == 1 && array2.includes(number)){
            numbing.push(number)
        }
        number++;
        check=0
    }
    return numbing
}
export function start2(){
    let size = document.getElementById('numb').value;
    let arrAoutput = document.getElementById('arrA');
    let arrBoutput =document.getElementById('arrB');
    let numbNotsort =document.getElementById('notSort');
    let numbSort = document.getElementById('sort');
    let index=100;
    let arrA = [size];
    let arrB = [size];
    for(let i =0;i<size;i++){
        let numb = Math.floor(Math.random()*index);
        arrA[i]=numb;
        numb = Math.floor(Math.random()*index);
        arrB[i]=numb
    }
    outputAlg1(arrAoutput,arrA);
    outputAlg1(arrBoutput,arrB);

    console.time("second");

    let twoNotsort = second(arrA,arrB,size);

    console.timeEnd("second");

    selectionSort(arrA);
    selectionSort(arrB);

    console.time("secondsort");

    let twoSort=second(arrA,arrB,size);

    console.timeEnd("secondsort");
    outputAlg1(numbNotsort,twoNotsort);
    outputAlg1(numbSort,twoSort)

}


export function clearFixLab4(){
    let arrAoutput = document.getElementById('arrA');
    let insertionSortValue =document.getElementById('insertionSort');
    let radixSortValue = document.getElementById('radixSort');
    arrAoutput.value ='';
    insertionSortValue.value ='';
    radixSortValue.value =''
}
function outputLab4(text,array){
    for(let i = 0;i<array.length;i++){
        text.value += array[i]+' '
    }
}
let counter = [[]];
function radixSorting(array, maxDigitSymbols) {
    let mod = 10;
    let dev = 1;
    for (let i = 0; i < maxDigitSymbols; i++, dev *= 10, mod *= 10) {
        for (let j = 0; j < array.length; j++) {
            let bucket = parseInt((array[j] % mod) / dev);
            if (counter[bucket] == null ) {
                counter[bucket] = [];
            }
            counter[bucket].push(array[j]);
        }
        let pos = 0;
        for (let j = 0; j < counter.length; j++) {
            let value = null ;
            if (counter[j] != null ) {
                while ((value = counter[j].shift()) != null ) {
                    array[pos++] = value;
                }
            }
        }
    }
    return array;
}
export function start3() {
    let size = document.getElementById('numb').value;
    let arrAoutput = document.getElementById('arrA');
    let insertionSortValue =document.getElementById('insertionSort');
    let radixSortValue = document.getElementById('radixSort');
    let arrA = [size];
    let arrB = [size];
    for(let i =0;i<size;i++){
        let rand = 100 + Math.random() * (999 - 100);
        arrA[i]= Math.round(rand);
        arrB[i]= Math.round(rand);
    };
    outputLab4(arrAoutput,arrA);
    console.time('insertionSort');
    insertionSort(arrA);
    console.timeEnd('insertionSort');
    outputLab4(insertionSortValue,arrA);
    console.time('radixSort');
    radixSorting(arrB,3);
    console.timeEnd('radixSort');
    outputLab4(radixSortValue,arrB)
}
const insertionSort = arr => {
    for (let i = 1, l = arr.length; i < l; i++) {
        const current = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = current;
    }
    return arr;
};


export function exOne() {
    let x1 = document.getElementById('verAx').value;
    let y1 = document.getElementById('verAy').value;
    let x2 = document.getElementById('verBx').value;
    let y2 = document.getElementById('verBy').value;
    let x3 = document.getElementById('verCx').value;
    let y3 = document.getElementById('verCy').value;
    let x4 = document.getElementById('verDx').value;
    let y4 = document.getElementById('verDy').value;
    let canvas = document.getElementById('myCanvas');
    let context = canvas.getContext('2d');
    context.beginPath();
    context.moveTo(x1*30,y1*30);
    context.lineTo(x2*30,y2*30);
    context.lineTo(x3*30,y3*30);
    context.closePath();
    context.strokeStyle='red';
    context.stroke();
    let contextPoint = canvas.getContext('2d');
    contextPoint.beginPath();
    contextPoint.fillRect(x4*30,y4*30,5,5);
    contextPoint.closePath();
    contextPoint.strokeStyle='black';
    contextPoint.stroke();
}