import React from 'react'
import loggingAlumno from "../services/alumnoService"
import "../LoggeoAlumno.css";


function LoggeoAlumno({manejarSubmit}) {


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
                                className="form-control"
                                />
                        </div>
                        <div className="form-floating">
                            <label className="form-label">Contraseña:</label>
                            <input
                                type="password"
                                className="form-control"
                                />
                        </div>
                        <button class="w-100 btn btn-lg btn-primary" type="submit">Iniciar sesión</button>
                    </form>
                <hr/>
                <span style={{color:'blue'}}>Olvide mi contraseña</span>
                <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
            </main>
        </div>
    )
}

export default LoggeoAlumno
