import React,{useState, useContext} from 'react'
import LoggeoAlumno from "../components/LoggeoAlumno"
import {useHistory} from "react-router-dom"
import {loggingUsuario} from "../services/usuarioService"
import Swal from 'sweetalert2'
import { AuthContext } from "../context/AuthContext";


function LoggeoView() {
    
    const history = useHistory()    
    let { actualizarAuth } = useContext(AuthContext);
    let { actualizarAlumnoId } = useContext(AuthContext);

    const [credenciales, setCredenciales] = useState({
      nombreUsuario:'',
      contrasenia:''
    })

   const actualizarCredenciales = (e) => {
      setCredenciales({
          ...credenciales,
          [e.target.name]: e.target.value
      })
   }

    const manejarSubmit = async (e) => {
      e.preventDefault()

      try {
                  
         let alumnoObtenido = await loggingUsuario(credenciales.nombreUsuario,
          credenciales.contrasenia) 
         
         if(alumnoObtenido != null && alumnoObtenido != undefined && alumnoObtenido.length > 0) {
             console.log("=>>:" + alumnoObtenido);            
             actualizarAuth(true)
             console.log("=>>:" + alumnoObtenido[0].alumnoId);    
             actualizarAlumnoId(alumnoObtenido[0].alumnoId)
             if(alumnoObtenido[0].tipo == 0){
                history.push('/intranetAdmin')
             }else{
                history.push('/intranetAlumno')
             }            
         } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario o contraseña invalidos.'          
          })
         }

      }catch(error){
        console.error(error);
      }
      
    }

    return (
        <div>
            <LoggeoAlumno value={credenciales} actualizarCredenciales={actualizarCredenciales} manejarSubmit={manejarSubmit} />
        </div>
    )
}

export default LoggeoView
