import React from 'react'
import "../LoggeoAlumno.css";


function LoggeoAlumno({value,actualizarCredenciales,manejarSubmit}) {


    return (
        <div className="text-center">
            <main className="form-signin">
                <h1 className="text-center">Escuela de Música UMA - <i>Intranet</i></h1>
                    <form
                    onSubmit={(e) => {manejarSubmit(e)}}
                    >
                        <div className="form-floating">
                        <label className="form-label">Usuario:</label>
                        <input
                            type="text"
                            placeholder="Usuario"
                            name="nombreUsuario"                                
                            onChange={(e)=>{actualizarCredenciales(e)}}                                
                            className="form-control pt-5"
                            />
                        </div>
                        <div className="form-floating">     
                        <label className="form-label">Contraseña:</label>                       
                        <input
                            type="password"
                            placeholder="Contraseña"
                            name="contrasenia"       
                            onChange={(e)=>{actualizarCredenciales(e)}}
                            className="form-control pt-5"
                            />
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Iniciar sesión</button>
                    </form>
                <hr/>
                <span style={{color:'blue'}}>Olvide mi contraseña</span>
                <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
            </main>
        </div>
    )
}

export default LoggeoAlumno
