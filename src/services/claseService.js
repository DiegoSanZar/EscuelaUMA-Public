import axios from 'axios'

const URL = "https://609f2660c512c20017dccd5e.mockapi.io/clase"


const obtenerClasePorAlumno = async(alumnoId) => {
    try{
        let {data} = await axios.get(URL)
        console.log(data);
        return data.filter((clase)=>{
            return clase.alumnoID === alumnoId
        });        
    }catch(error){
        console.log(error)
    }
 
}


export {
    obtenerClasePorAlumno
}