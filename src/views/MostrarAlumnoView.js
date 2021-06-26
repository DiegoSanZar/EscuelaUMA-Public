import React, {useState, useEffect,useContext} from 'react'
import { obtenerAlumnoPorId } from '../services/alumnoService'
import SideBar from "../components/SideBar"
import { AuthContext } from '../context/AuthContext'

function MostrarAlumnoView() {

    const[alumnoId, setAlumnoId] = useState([])
    let { alumnoIdContext } = useContext(AuthContext); 

    const getAlumnoId = async() =>{
        try{
            let alumnoObtenidoId = await obtenerAlumnoPorId(alumnoIdContext)            
            setAlumnoId([alumnoObtenidoId])            
         }catch(error){
             throw error
         }
    }

    useEffect(() =>{
        getAlumnoId()
    }, [])

    return (
        <div className="d-flex flex-row">
            <SideBar></SideBar>
            <div className="container">
            <h1>Hola! {alumnoId.map((alumnId, d) =>(alumnId.nombre))} estos son tus datos!</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre del Alumno</th>
                        <th>Apellido Paterno</th>
                        <th>Apellido Materno</th>
                        <th>Email</th>
                        <th>Instrumento</th>
                    </tr>
                </thead>
                <tbody>
                    {alumnoId.map((alumnId, d) =>(
                        
                        <tr key={d}>
                            <td>{alumnId.nombre}</td>
                            <td>{alumnId.apellidoPaterno}</td>
                            <td>{alumnId.apellidoMaterno}</td>
                            <td>{alumnId.email}</td>
                            <td>{alumnId.instrumento}</td>
                        </tr>
                    ))} 
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default MostrarAlumnoView
