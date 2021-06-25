import React from 'react'

function TareasAlumno() {

    return (

      <div className="container">
        <div class="col-12 t-3 mt-3">
        <div className="card card-row shadow-light-lg mb-6 lift lift-lg " >
        <div className="row gx-0 mt-3">
          <div className="col-12 col-md-6 order-md-2 bg-cover card-img-end p-3">
            <form>              
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon3">URL https://ejemplo.com/video/</span>
                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text">Comentarios</span>
                <textarea class="form-control" aria-label="With textarea">                  
                </textarea>
              </div>
              <button type="submit" class="btn btn-primary mb-3">Enviar</button>
            </form>
          </div>
          <div className="card-body col-12 col-md-6 order-md-1" >
            <h5 className="card-title">Tarea Session 2 </h5>
            <p className="card-text">
              Hola francisco, hoy debes de avanzar lo siguiente en tu evaluacion. 

              Primero tocar toda la pieza de piano de motzar. Luego practicar la lecturas de notas.



            </p>
            <div className=" container">
            
            <hr className="card-meta-divider"></hr>
            <div className="avatar avatar-sm me-2">
                      <img src="assets/img/avatars/avatar-1.jpg" alt="..." className="avatar-img rounded-circle" />
             </div>
             <h6 className="text-uppercase text-muted me-2 mb-0">
                      Walyel Montoya
                    </h6>

            </div>
          </div>          
          </div>
        </div>
        </div>

        <div class="col-12 t-3 mt-3">
        <div className="card card-row shadow-light-lg mb-6 lift lift-lg" >
        <div className="row gx-0 mt-3 p-3">
          <div className="col-12 col-md-6 order-md-2 bg-cover card-img-end">
          <div className="d-flex flex-row">
              <div class="embed-responsive embed-responsive-1by1 p-1">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/B0D1G5wvux4"></iframe>
              </div>
              <div class="input-group p-1">
                    <span class="input-group-text">
                        <span>Comentarios</span>                         
                    </span>
                    <textarea class="form-control" aria-label="With textarea" 
                    value="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut vel provident repellendus illo, veniam laborum amet delectus impedit pariatur saepe porro repellat ipsum cupiditate, architecto minima iste itaque in accusamus?">
                    </textarea>
              </div>
          </div>

          </div>
          <div className="card-body col-12 col-md-6 order-md-1" >
            <h5 className="card-title">Tarea Session 1 </h5>
            <p className="card-text">
              Hola francisco, hoy debes de avanzar lo siguiente en tu evaluacion. 

              Primero tocar toda la pieza de piano de motzar. Luego practicar la lecturas de notas.



            </p>
            <div className=" container">
            
            <hr className="card-meta-divider"></hr>
            <div className="avatar avatar-sm me-2">
                      <img src="assets/img/avatars/avatar-1.jpg" alt="..." className="avatar-img rounded-circle" />
             </div>
             <h6 className="text-uppercase text-muted me-2 mb-0">
                      Walyel Montoya
                    </h6>

            </div>
          </div>          
          </div>
        </div>
        </div>
      </div>


    )



}

export default TareasAlumno
