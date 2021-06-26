import React from 'react'
import Admin from "../resources/img/Admin.png"

function IntranetAdmin() {
    return (
        <div className="container">
            <div className="mt-5" style={{margin:"auto", width:"50%"}}>
            <h1 className="mb-6"> Bienvenido Administrador</h1>
            <img className="mb-6" src={Admin} alt="Imagen administrador" />
            </div>       
        </div>
    )
}

export default IntranetAdmin
