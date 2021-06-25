import React from 'react'
import LoggeoAlumno from "../components/LoggeoAlumno"
import {useHistory} from "react-router-dom"


function LoggeoView() {
    
    const history = useHistory()

    const manejarSubmit = async (e) => {
      e.preventDefault()
      history.push('/intranet')

    }

    return (
        <div>
            <LoggeoAlumno manejarSubmit={manejarSubmit} />
        </div>
    )
}

export default LoggeoView
