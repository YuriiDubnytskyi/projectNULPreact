import React from 'react';
import {Route} from 'react-router-dom'
import MainHeader from './main/MainHeader.js'
import {MainFirst,MainSecond,MainThird,MainFourth} from './main/MainAllCourse.js'

import {FourthSubjectOne,FourthSubjectTwo,FourthSubjectThree,FourthSubjectFour,FourthSubjectFive,FourthSubjectSix} from './subject/FourthSubjectOne.js'
import {ThreeSubjectOne,ThreeSubjectTwo,ThreeSubjectThree} from "./subject/ThreeSubjectAll";
import {TwoSubjectOne,TwoSubjectTwo,TwoSubjectThree,TwoSubjectFour} from "./subject/TwoSubjectAll";
import {OneSubjectOne,OneSubjectTwo,OneSubjectThree,OneSubjectFour,OneSubjectFive} from "./subject/OneSubject";
import {AlgLabs,AlgZvits,AlgMet} from "./FourthEducation/FourthAlgLabs"
import {TestZvits,TestMet} from "./FourthEducation/FourthTestAll"
import {ServZvits} from "./FourthEducation/FourthClientServ"
import {DBZvits,DBMet} from "./FourthEducation/FourthDB"
import {DistLabs,DistZvits,DistMet} from "./FourthEducation/FourthDistrict"
import {DistLab1,DistLab2,DistLab4,DistLab7,DistLab10} from "./FourthEducation/FourthDistrictLab1";
import {AlgLab3,AlgLab4,AlgLab5} from "./FourthEducation/FourthAlgorytm";
import {WebZvits,WebMet} from "./ThreeEducation/ThreeWeb"
import {OopZvits,OopMet} from "./ThreeEducation/ThreeOop";
import {CompLec,CompMet,CompZvits} from "./ThreeEducation/ThreeComps";
import {MathLec} from "./TwoEducation/Math";
import {GrafZvit,GrafMet} from "./TwoEducation/Grafics";
import {ElecZvit,ElecMet} from "./TwoEducation/Elect";
import {WebZvit,WebLec,WebBook,WebdusMet} from "./TwoEducation/Web";
import {OsZvits,OsMet,OsLec} from "./OneEducation/OneOs"
import {VstupZvits} from "./OneEducation/OneVstup"
import {MathOneLec,MathOneMet} from "./OneEducation/OneMath"
import {PhizMet,PhizLab} from "./OneEducation/OnePhiz"
import {UkrOneLec} from "./OneEducation/OneUkr"
import {EngOne,EngTwo,OopTwo,SysThree,DistThree,HistoryThree,CompThree,MathFort,AllDont} from "./NowKnow"

function Main() {
    return (
            <main className="col-sm-9 h-100 m-3" >
                <Route path='/header' exact component={MainHeader}/>
                <Route path='/first' exact component={MainFirst}/>
                <Route path='/first/hightMatchFirst' exact component={OneSubjectOne}/>
                <Route path='/first/vstupSpezials' exact component={OneSubjectTwo}/>
                <Route path='/first/operatingSystem' exact component={OneSubjectThree}/>
                <Route path='/first/phisiks' exact component={OneSubjectFour}/>


                <Route path='/first/englishFirst' exact component={EngOne}/>
                <Route path='/second/englishSecond' exact component={EngTwo}/>
                <Route path='/second/oopFirst' exact component={OopTwo}/>
                <Route path='/third/systemPrograming' exact component={SysThree}/>
                <Route path='/third/districkMathFirst' exact component={DistThree}/>
                <Route path='/third/ukraineHistory' exact component={HistoryThree}/>
                <Route path='/third/computerMerez' exact component={CompThree}/>
                <Route path='/fourth/teoriMath' exact component={MathFort}/>


                <Route path='/first/ukrainian' exact component={OneSubjectFive}/>
                <Route path='/first/operatingSystem/zvits' exact component={OsZvits}/>
                <Route path='/first/operatingSystem/materials' exact component={OsMet}/>
                <Route path='/first/operatingSystem/lec' exact component={OsLec}/>
                <Route path='/first/vstupSpezials/zvits' exact component={VstupZvits}/>
                <Route path='/first/hightMatchFirst/lec' exact component={MathOneLec}/>
                <Route path='/first/hightMatchFirst/materials' exact component={MathOneMet}/>
                <Route path='/first/phisiks/materials' exact component={PhizMet}/>
                <Route path='/first/phisiks/zvits' exact component={PhizLab}/>
                <Route path='/first/ukrainian/lec' exact component={UkrOneLec}/>

                <Route path='/second' exact component={MainSecond}/>
                <Route path='/second/grafick' exact component={TwoSubjectThree}/>
                <Route path='/second/hightMatchSecond' exact component={TwoSubjectTwo}/>
                <Route path='/second/webDesign' exact component={TwoSubjectOne}/>
                <Route path='/second/electrisy' exact component={TwoSubjectFour}/>
                <Route path='/second/hightMatchSecond/lec' exact component={MathLec}/>
                <Route path='/second/grafick/materials' exact component={GrafMet}/>
                <Route path='/second/grafick/zvits' exact component={GrafZvit}/>
                <Route path='/second/electrisy/materials' exact component={ElecMet}/>
                <Route path='/second/electrisy/zvits' exact component={ElecZvit}/>

                <Route path='/second/webDesign/materials' exact component={WebdusMet}/>
                <Route path='/second/webDesign/zvits' exact component={WebZvit}/>
                <Route path='/second/webDesign/book' exact component={WebBook}/>
                <Route path='/second/webDesign/lec' exact component={WebLec}/>

                <Route path='/third' exact component={MainThird}/>
                <Route path='/third/webTechnologies' exact component={ThreeSubjectOne}/>
                <Route path='/third/oopSecond' exact component={ThreeSubjectTwo}/>
                <Route path='/third/computers' exact component={ThreeSubjectThree}/>
                <Route path='/third/webTechnologies/materials' exact component={WebMet}/>
                <Route path='/third/webTechnologies/zvits' exact component={WebZvits}/>
                <Route path='/third/oopSecond/materials' exact component={OopMet}/>
                <Route path='/third/oopSecond/zvits' exact component={OopZvits}/>
                <Route path='/third/computers/zvits' exact component={CompZvits}/>
                <Route path='/third/computers/materials' exact component={CompMet}/>
                <Route path='/third/computers/lec' exact component={CompLec}/>


                <Route path='/fourth' exact component={MainFourth}/>
                <Route path='/fourth/algorutm' exact component={FourthSubjectOne}/>
                <Route path='/fourth/testing' exact component={FourthSubjectTwo}/>

                <Route path='/fourth/clientServer' exact component={FourthSubjectFour}/>
                <Route path='/fourth/districkMathSecond' exact component={FourthSubjectFive}/>
                <Route path='/fourth/dataBase' exact component={FourthSubjectSix}/>
                <Route path='/fourth/algorutm/labs' exact component={AlgLabs}/>
                <Route path='/fourth/algorutm/zvits' exact component={AlgZvits}/>
                <Route path='/fourth/algorutm/materials' exact component={AlgMet}/>
                <Route path='/fourth/testing/zvits' exact component={TestZvits}/>
                <Route path='/fourth/testing/materials' exact component={TestMet}/>
                <Route path='/fourth/clientServer/zvits' exact component={ServZvits}/>
                <Route path='/fourth/dataBase/zvits' exact component={DBZvits}/>
                <Route path='/fourth/dataBase/materials' exact component={DBMet}/>
                <Route path='/fourth/districkMathSecond/labs' exact component={DistLabs}/>
                <Route path='/fourth/districkMathSecond/zvits' exact component={DistZvits}/>
                <Route path='/fourth/districkMathSecond/materials' exact component={DistMet}/>
                <Route path='/fourth/districkMathSecond/labs/lab1' exact component={DistLab1}/>
                <Route path='/fourth/districkMathSecond/labs/lab2' exact component={DistLab2}/>
                <Route path='/fourth/districkMathSecond/labs/lab4' exact component={DistLab4}/>
                <Route path='/fourth/districkMathSecond/labs/lab7' exact component={DistLab7}/>
                <Route path='/fourth/districkMathSecond/labs/lab10' exact component={DistLab10}/>
                <Route path='/fourth/algorutm/labs/lab3' exact component={AlgLab3}/>
                <Route path='/fourth/algorutm/labs/lab4' exact component={AlgLab4}/>
                <Route path='/fourth/algorutm/labs/lab5' exact component={AlgLab5}/>






                <Route path='/fifth' component={AllDont}/>
                <Route path='/sixth' component={AllDont}/>
                <Route path='/seventh' component={AllDont}/>
                <Route path='/eighth' component={AllDont}/>

            </main>
    );
}


export default Main;