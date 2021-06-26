import axios from 'axios'

const URL = `${process.env.REACT_APP_URL_API}/alumno`

const creaAlumno  = async (nuevoAlumno) => {
    try{
        let headers = {"Content-Type":"application/json"}
        let {data} = await axios.post(URL, nuevoAlumno, {headers} )
        console.log(data)
        return data
    }catch(error){
        throw error
    }
}

const obtenerAlumnoPorId = async(id) => {
    try{
        let {data} = await axios.get(`${URL}/${id}`)        
        return data
    }catch(error){
        console.log(error)
    }
 
}

const obtenerAlumnos = async() => {
    try{
        let {data} = await axios.get(URL)
        return data
    }catch(error){
        throw error
    }
 
}

const actualizarAlumno = async(alumnoEditado, id) => {
    try{
        let headers = {
            "Content-Type":"application/json"
        }
        let {data} = await axios.put(`${URL}/${id}`, alumnoEditado, {headers})
        return data
    }catch(error){
        console.log(error)
    }
}

const loggingAlumno = async(usuario, contrasenia) => {
    try{
        const alumnosObtenidos = obtenerAlumnos()
        alumnosObtenidos.filter((alumno)=>{
            return alumno.usuario === usuario && alumno.contrasenia === contrasenia
        })
        return alumnosObtenidos
    }catch(error){
        console.log(error)
    }
}

export {
    creaAlumno,
    obtenerAlumnoPorId,
    actualizarAlumno,
    obtenerAlumnos,
    loggingAlumno
}