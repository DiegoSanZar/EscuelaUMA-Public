import {React} from 'react'
import TareasAlumno from "../components/TareasAlumno"
import SideBar from "../components/SideBar"


function TareasAlumnoView() {



    return (
        <div className="d-flex flex-row">
            <SideBar></SideBar>   
            <TareasAlumno></TareasAlumno>
        </div>
    )
}

export default TareasAlumnoView
