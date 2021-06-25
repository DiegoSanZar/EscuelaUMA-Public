import React from 'react'
import AsistenciaAlumno from "../components/AsistenciaAlumno"
import SideBar from "../components/SideBar"

function AsistenciaAlumnoView() {
    return (
        <div className="d-flex flex-row">
            <SideBar></SideBar>            
            <AsistenciaAlumno></AsistenciaAlumno>
        </div>
    )
}

export default AsistenciaAlumnoView
