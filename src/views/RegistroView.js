import React, {useState} from 'react'
import RegistroAlumno from "../components/RegistroAlumno"
import SideBarAdmin from '../components/SideBarAdmin'
import {useHistory} from "react-router-dom"
import { creaAlumno } from '../services/alumnoService'
import { creaUsuario } from '../services/usuarioService'
import Swal from 'sweetalert2'

 
function RegistroView() {
    const [value, setValue] = useState({
        nombre:'',
        apellidoPaterno:'',
        apellidoMaterno:'',
        email:'',
        fechaRegistro:'',
        nombrePadre:'',
        nombreMadre:'',
        direccion:'',
        fechaNacimiento:'',
        usuario:'',
        contrasea:'',
        instrumento:''
    })

    const [usuarioNuevo, setUsuarioNuevo] = useState({
        nombreUsuario:'',
        contrasenia:'',
        tipo:'1',
        alumnoId:''
    })    

    const actualizarImput = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const actualizarImputUsuario = (e) => {
        setUsuarioNuevo({
            ...usuarioNuevo,
            [e.target.name]: e.target.value
        })
    }  

    const history = useHistory()

    const manejarSubmit = async (e) => {
        e.preventDefault()
        try {
            value.fechaRegistro = Date.now()
            let responseAlumno = await creaAlumno({...value})            
            usuarioNuevo.alumnoId = responseAlumno.id
            await creaUsuario({...usuarioNuevo})
            await Swal.fire({
                icon:'success',
                title:'Alumno Registrado',
                showConfirmButton:false,
                timer:2000
            })
            history.push("/listarAlumnos")
        }catch(error){
            console.log(error)
        }
    }
    return (
        <div className="d-flex flex-row"> 
             <SideBarAdmin></SideBarAdmin> 
            <RegistroAlumno value={value} actualizarInput={actualizarImput} actualizarImputUsuario={actualizarImputUsuario} setValue={setValue} manejarSubmit={manejarSubmit}></RegistroAlumno>
        </div>
    )
}

export default RegistroView
