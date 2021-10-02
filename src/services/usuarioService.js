import axios from 'axios'

const URL = `${process.env.REACT_APP_URL_API}/usuario`


const obtenerUsuarios = async() => {
    try{
        let {data} = await axios.get(URL)
        return data
    }catch(error){
        throw error
    }
 
}

const loggingUsuario = async(nombreUsuario, contraseniaUsuario) => {
    try{
        let headers = {"Content-Type":"application/json"}
        let {data} = await axios.post(URL, nuevoUsuario, {headers} )
        return usuariosObtenidos.filter((usuario)=>{
                    return usuario.nombreUsuario === nombreUsuario && usuario.contrasenia === contraseniaUsuario
                })       
        
    }catch(error){
        console.log(error)
    }
}


const creaUsuario  = async (nuevoUsuario) => {
    try{
        let headers = {"Content-Type":"application/json"}
        let {data} = await axios.post(URL, nuevoUsuario, {headers} )
        console.log(data)
        return data
    }catch(error){
        throw error
    }
}




export {
    loggingUsuario,
    creaUsuario
}