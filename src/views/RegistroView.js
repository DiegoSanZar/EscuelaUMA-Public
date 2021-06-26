import React, {useState} from 'react'
import RegistroAlumno from "../components/RegistroAlumno"
import SideBarAdmin from '../components/SideBarAdmin'
import {useHistory} from "react-router-dom"
import { creaAlumno } from '../services/alumnoService'
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

    const actualizarImput = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const history = useHistory()

    const manejarSubmit = async (e) => {
        e.preventDefault()
        try {
            await creaAlumno({...value})
            await Swal.fire({
                icon:'success',
                title:'Alumno Registrado',
                showConfirmButton:false,
                timer:2000
            })
            history.push("/")
        }catch(error){
            console.log(error)
        }
    }
    return (
        <div className="d-flex flex-row"> 
             <SideBarAdmin></SideBarAdmin> 
            <RegistroAlumno value={value} actualizarInput={actualizarImput} setValue={setValue} manejarSubmit={manejarSubmit}></RegistroAlumno>
        </div>
    )
}

export default RegistroView
