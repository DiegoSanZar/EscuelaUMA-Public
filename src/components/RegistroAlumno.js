import React from 'react'
import {creaAlumno} from "../services/alumnoService"


function RegistroAlumno({value, actualizarInput, setValue, manejarSubmit}) {

    
    return (
            <div className="container">
                <h1 className="text-center">Formulario de Registro</h1>
                <hr/>
                <form onClick={(e) =>{manejarSubmit(e)}} className="row g-3">
                    <div className="col-sm-4">
                        <label className="form-label fw-bold">Nombres:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ej. Diego Eugenio"
                            name="nombre"
                            value={value.nombre}
                            onChange={(e)=>{actualizarInput(e)}}
                            />
                    </div>

                    <div className="col-sm-4">
                        <label className="form-label fw-bold">Apellido Paterno:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ej. Sotomayor"
                            name="apellidoPaterno"
                            value={value.apellidoPaterno}
                            onChange={(e)=>{actualizarInput(e)}}
                            />
                    </div>        

                    <div className="col-sm-4">
                        <label className="form-label fw-bold">Apellido Materno:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ej. Reyes"
                            name="nombre"
                            value={value.nombre}
                            onChange={(e)=>{actualizarInput(e)}}
                            />
                    </div>

                    <div className="col-12">
                        <label className="form-label fw-bold">email:</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Ej. dsotomayor@gmail.com"
                            name="email"
                            value={value.email}
                            onChange={(e)=>{actualizarInput(e)}}
                            />
                    </div>

                    <div className="col-sm-6">
                        <label className="form-label fw-bold">Fecha Nacimiento:</label>
                        <input
                            type="date"
                            className="form-control"
                            name="fechaNacimiento"
                            value={value.fechaNacimiento}
                            onChange={(e)=>{actualizarInput(e)}}
                            />
                    </div>

                    <div className="col-sm-6">
                        <label className="form-label fw-bold">Padre o Apoderado:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ej. fernando Francisco Sotomayor Garcia"
                            name="nombrePadre"
                            value={value.nombrePadre}
                            onChange={(e)=>{actualizarInput(e)}}
                            />
                    </div>

                    <hr/>
                    
                    <div className="col-12">
                        <label className="form-label fw-bold">Usuario:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="usuario"
                            value={value.usuario}
                            onChange={(e)=>{actualizarInput(e)}}
                            />
                    </div>

                    <div className="col-sm-6">
                        <label className="form-label fw-bold">Contraseña:</label>
                        <input
                            type="password"
                            className="form-control"
                            name="contrasea"
                            value={value.contrasea}
                            onChange={(e)=>{actualizarInput(e)}}
                            />
                    </div>

                    <div className="col-sm-6">
                        <label className="form-label fw-bold">Confirmar contraseña:</label>
                        <input
                            type="password"
                            className="form-control"
                            />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Guardar
                    </button>
                </form>
        </div>
    )
}

export default RegistroAlumno
