import React,{ useState }  from 'react'

import {Route} from 'react-router-dom'

import LandingPage from "./views/LandingView"
import LandingClases from "./views/LandingClases"
import LandingContactenos from "./views/LandingContactenos"
import LandingNosotros from "./views/LandingNosotros"
import LandingEventos from "./views/LandingEventos"

import ListarAlumnos from "./views/ListarAlumnos"
import LoggeoView from "./views/LoggeoView"
import RegistroView from "./views/RegistroView"
import CalendarioAlumno from "./views/CalendarioAlumnoView"
import IntranetAlumno from './views/LoggeoMenuView'
import IntranetAdmin from './views/IntranetAdminView'
import TareasMenu from './views/TareasAlumnoView'
import AsistenciaAlumno from './views/AsistenciaAlumnoView'
import MostrarAlumnoView from './views/MostrarAlumnoView'
import ProtectedRoute from './ProtectedRoute';


function Routes() {

   
    return (
        <div>
            <Route path="/" exact component={LandingPage} />            
            <Route path="/usuario" exact component={LoggeoView} />
            <ProtectedRoute path="/listarAlumnos" exact component={ListarAlumnos} />
            <ProtectedRoute path="/registro" exact component={RegistroView} />
            <ProtectedRoute path="/calendario" exact component={CalendarioAlumno} />
            <ProtectedRoute path="/intranetAlumno" exact component={IntranetAlumno} />
            <ProtectedRoute path="/intranetAdmin" exact component={IntranetAdmin} />
            <ProtectedRoute path="/tareas" exact component={TareasMenu} />
            <ProtectedRoute path="/asistencia" exact component={AsistenciaAlumno} />
            <ProtectedRoute path="/mostrarAlumno" exact component={MostrarAlumnoView} />
            <Route path="/clases" exact component={LandingClases} />
            <Route path="/contactenos" exact component={LandingContactenos} />
            <Route path="/nosotros" exact component={LandingNosotros} />
            <Route path="/eventos" exact component={LandingEventos} />
        </div>
    )
}

export default Routes
