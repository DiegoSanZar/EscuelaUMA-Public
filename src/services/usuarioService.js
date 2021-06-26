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
        const usuariosObtenidos = await obtenerUsuarios()
        return usuariosObtenidos.filter((usuario)=>{
                    return usuario.nombreUsuario === nombreUsuario && usuario.contrasenia === contraseniaUsuario
                })       
        
    }catch(error){
        console.log(error)
    }
}



export {
    loggingUsuario
}