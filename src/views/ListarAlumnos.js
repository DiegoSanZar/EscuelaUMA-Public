import React, {useState, useEffect} from 'react'
import {obtenerAlumnos} from '../services/alumnoService'
import SideBarAdmin from "../components/SideBarAdmin"

function ListarAlumnos(){
    const[alumnos, setAlumnos] = useState([])

    const getAlumnos = async() =>{
        try{
            let alumnosObtenidos = await obtenerAlumnos()
            setAlumnos(alumnosObtenidos)
        }catch(error){
            throw error
        }
    }

    useEffect(() => {
        getAlumnos()
    }, [])

    return (
        <div className="d-flex flex-row">        
            <SideBarAdmin></SideBarAdmin>   
            <div className="container">

            
            <h1>Lista de Alumnos</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre del Alumno</th>
                        <th>Apellido Paterno</th>
                        <th>Apellido Materno</th>
                        <th>Email</th>
                        <th>Fecha de Registro</th>
                    </tr>
                </thead>
                <tbody>
                    {alumnos.map((alumn, i) =>(
                        <tr key={i}>
                            <td>{alumn.nombre}</td>
                            <td>{alumn.apellidoPaterno}</td>
                            <td>{alumn.apellidoMaterno}</td>
                            <td>{alumn.email}</td>
                            <td>{new Intl.DateTimeFormat('es-ES', 
                            {year: 'numeric', month: '2-digit',day: '2-digit'})
                            .format(alumn.fechaRegistro)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default ListarAlumnos
