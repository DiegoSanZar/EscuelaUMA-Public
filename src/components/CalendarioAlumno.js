import React,{useContext,useState} from 'react'
import { AuthContext } from "../context/AuthContext";
import construccion from "../resources/img/construccion.png"


function CalendarioAlumno(){

    let { alumnoIdContext } = useContext(AuthContext);    

    return(
        <div className="container">
          <div className="mt-5" style={{margin:"auto", width:"50%"}}>
          <h1> Página en construcción</h1>
          <img src={construccion} alt="en construccion" />
          </div>          
        </div>

    )
}

export default CalendarioAlumno;