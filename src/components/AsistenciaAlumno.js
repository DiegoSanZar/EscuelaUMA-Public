import {React,useState,useEffect,useContext} from 'react'
import asistanceClass from "../resources/img/class_assistance.jpg"
import emptyClass from "../resources/img/empty_class.jpg"
import {obtenerClasePorAlumno} from "../services/claseService"
import { AuthContext } from '../context/AuthContext'


function AsistenciaAlumno(){

    let { alumnoIdContext } = useContext(AuthContext); 
    const [clases, setClase] = useState([]);
    const [numeroAsistencia, setNumeroAsistencia] = useState(0);
    const [numeroFaltas, setNumerofaltas] = useState(0);

    const getClasesPorAlumno = async() =>{
        try {
            let clasesObtenida = await obtenerClasePorAlumno(alumnoIdContext);
            let numAsistencia = 0;
            let numFaltas = 0;
            clasesObtenida.forEach(element => {
                if(element.estado=="A"){
                    numAsistencia++;
                }else{
                    numFaltas++; 
                }
            });    
            setNumeroAsistencia(numAsistencia)
            setNumerofaltas(numFaltas)
            setClase(clasesObtenida);
            console.log(clasesObtenida);
          } catch (error) {
            console.log(error);
          }
    }
    useEffect(()=>{
        getClasesPorAlumno()
    },[])

    return(

        <div className="container">
            <div className="row mt-3 d-flex justify-content-center mb-5" >
                <div className="card m-3 p-0" style={{maxWidth:"25rem"}}>
                    <div className="row g-0">
                        <div className="col-md-7">
                            <img src={asistanceClass} alt="..." />
                        </div>
                        <div className="col-md-5">
                            <div className="card-body">
                                <span className="card-title" style={{fontSize:"3rem", fontWeight:"bold"}}>{numeroAsistencia}</span>
                                <p className="card-text" style={{fontSize:"1.5rem"}}>Asistidos</p>                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card m-3 p-0" style={{maxWidth:"25rem"}}>
                    <div className="row g-0">
                        <div className="col-md-7">
                            <img src={emptyClass} alt="..." />
                        </div>
                        <div className="col-md-5">
                            <div className="card-body">
                                <span className="card-title" style={{fontSize:"3rem", fontWeight:"bold"}}>{numeroFaltas}</span>
                                <p className="card-text" style={{fontSize:"1.5rem"}}>faltas</p>                                
                            </div>
                        </div>
                    </div>
                </div>                
            </div>

            <div className="row">
            <div className="col-12">           
                <div className="table-responsive mb-7 mb-md-9">
                <table className="table table-align-middle">
                    <thead>                        
                    <tr>
                        <th>
                        <span className="h6 text-uppercase fw-bold">
                            Dia
                        </span>
                        </th>
                        <th>
                        <span className="h6 text-uppercase fw-bold">
                            Profesor
                        </span>
                        </th>
                        <th>
                        <span className="h6 text-uppercase fw-bold">
                            Situación
                        </span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        clases.map( function(claseItem,i) {
                            let fechaFormato  = new Intl.DateTimeFormat('es-ES', 
                            {year: 'numeric', month: '2-digit',day: '2-digit'})
                            .format(claseItem.fechaDictada);
                            
                            if(claseItem.estado == "A"){
                               return <tr className="table-success" key={i}>
                                <td>
                                    <p className="mb-1 font-weight-bold">
                                    {fechaFormato}
                                    </p>
                                    <p className="fs-sm text-muted mb-0">
                                    {claseItem.temaDictado}
                                    </p>
                                </td>
                                <td>
                                    <p className="fs-sm mb-0">
                                    {claseItem.profesor}
                                    </p>
                                </td>
                                <td className="">                      
                                    <p className="fs-sm mb-0 table-success">
                                    Asistío
                                    </p>
                                </td>
                            </tr>
                            } else {
                                return <tr className="table-warning" key={i}>
                                    <td>
                                        <p className="mb-1 font-weight-bold">
                                        {fechaFormato}
                                        </p>
                                        <p className="fs-sm text-muted mb-0">
                                        {claseItem.temaDictado}
                                        </p>
                                    </td>
                                    <td>
                                        <p className="fs-sm mb-0">
                                        {claseItem.profesor}
                                        </p>
                                    </td>
                                    <td>
                                        <p className="fs-sm mb-0">
                                        Faltó
                                        </p>                      
                                    </td>
                                </tr>  

                            }    
                        })
                    }
                    </tbody>
                </table>
                </div>

            </div>
            </div>
        </div>
    )

}

export default AsistenciaAlumno;