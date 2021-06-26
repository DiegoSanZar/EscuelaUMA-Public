import {React,useState,useEffect,useContext} from 'react'
import {obtenerTareaPorAlumno} from "../services/tareaService"
import { AuthContext } from '../context/AuthContext'

function TareasAlumno() {

    let { alumnoIdContext } = useContext(AuthContext); 
    const [tarea, setTarea] = useState([]);

    const getTareasPorAlumno = async() =>{
        try {
            let tareaObtenida = await obtenerTareaPorAlumno(alumnoIdContext);
            setTarea(tareaObtenida);
            console.log(tarea);
          } catch (error) {
            console.log(error);
          }
    }
    useEffect(()=>{
      getTareasPorAlumno()
    },[])

    return (

      <div className="container">
         {
          tarea.map( function(tareaItem,i) {

            
            if(tareaItem.activo){
              if(tareaItem.urlVideo == ""){
                return <div className="col-12 t-3 mt-3" key={i}>
                <div className="card card-row shadow-light-lg mb-6 lift lift-lg " >
                <div className="row gx-0 mt-3">
                  <div className="col-12 col-md-6 order-md-2 bg-cover card-img-end p-3">   
                    <form >              
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon3">URL https://ejemplo.com/video/</span>
                        <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                      </div>
                      <div className="input-group mb-3">
                        <span className="input-group-text">Comentarios</span>
                        <textarea className="form-control" aria-label="With textarea">                  
                        </textarea>
                      </div>
                      <button type="submit" className="btn btn-primary mb-3">Enviar</button>
                    </form>
  
                  </div>
                  <div className="card-body col-12 col-md-6 order-md-1" >
                    <h5 className="card-title">{tareaItem.tareaTitulo} </h5>
                    <p className="card-text">
                        {tareaItem.tareaDetalle}
                    </p>
                    <div className="p-2 mb-1 bg-warning text-dark" style={{width:"25%"}}>
                       Pendiente
                    </div>
                  </div>          
                  </div>
                </div>
                </div>
              }else {
                return <div className="card card-row shadow-light-lg mb-6 lift lift-lg "  key={i}>
                <div className="row gx-0 mt-3">
                  <div className="col-12 col-md-6 order-md-2 bg-cover card-img-end p-3">   
                    <h1>En revisión del profesor</h1>
  
                  </div>
                  <div className="card-body col-12 col-md-6 order-md-1" >
                    <h5 className="card-title">{tareaItem.tareaTitulo} </h5>
                    <p className="card-text">
                        {tareaItem.tareaDetalle}
                    </p>
                    <div className="p-2 mb-1 bg-warning text-dark" style={{width:"25%"}}>
                       Pendiente
                    </div>
                  </div>          
                  </div>
                </div>                             
              }
              
            }else{
              return <div className="col-12 t-3 mt-3">
              <div className="card card-row shadow-light-lg mb-6 lift lift-lg" >
              <div className="row gx-0 mt-3">
                <div className="col-12 col-md-6 order-md-2 bg-cover card-img-end">
                <div className="d-flex flex-row">
                    <div className="embed-responsive embed-responsive-1by1 p-1">
                      <iframe className="embed-responsive-item" src={tareaItem.urlVideo}></iframe>
                    </div>
                    <div className="input-group p-1">
                          <span className="input-group-text">
                              <span>Comentarios</span>                         
                          </span>
                          <textarea className="form-control" aria-label="With textarea" defaultValue={tareaItem.comentarioProfesor}>
                          
                          </textarea>
                    </div>
                </div>
      
                </div>
                <div className="card-body col-12 col-md-6 order-md-1" >
                  <h5 className="card-title">{tareaItem.tareaTitulo} </h5>
                  <p className="card-text">
                  {tareaItem.tareaDetalle}
                  </p>
                  
                  <div className="p-2 mb-1 bg-success text-white" style={{width:"25%"}}>
                     Completada
                  </div>
                </div>          
                </div>
              </div>
              </div>
            }
          })         
        }
      </div>
    )



}

export default TareasAlumno
