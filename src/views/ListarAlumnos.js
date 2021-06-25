import React, {useState, useEffect} from 'react'
import {obtenerAlumnos} from '../services/alumnoService'

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
        <div>
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
                            <td>{alumn.fechaRegistro}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListarAlumnos
