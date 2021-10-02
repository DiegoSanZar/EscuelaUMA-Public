import axios from 'axios'

const URL = `${process.env.REACT_APP_URL_API}/`


// const obtenerUsuarios = async() => {
//     try{
//         let {data} = await axios.get(URL)
//         return data
//     }catch(error){
//         throw error
//     }
 
// }

const loggingUsuario = async(nombreUsuario, contraseniaUsuario) => {
    try{
        let headers = {"Content-Type":"application/json"}
        let datosLogin = {"username":nombreUsuario, "password":contraseniaUsuario}
        let {data} = await axios.post(URL + "login", datosLogin, {headers} )
        
        return data;      
        
    }catch(error){
        console.log(error)
    }
}


const creaUsuario  = async (nuevoUsuario) => {
    try{
        let headers = {"Content-Type":"application/json"}
        let {data} = await axios.post(URL + "create", nuevoUsuario, {headers} )
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