import asistanceClass from "../resources/img/class_assistance.jpg"
import emptyClass from "../resources/img/empty_class.jpg"


function AsistenciaAlumno(){

    return(

        <div className="container">
            <div className="row mt-3 d-flex justify-content-center mb-5" >
                <div className="card m-3 p-0" style={{maxWidth:"25rem"}}>
                    <div className="row g-0">
                        <div className="col-md-7">
                            <img src={asistanceClass} alt="..." />
                        </div>
                        <div className="col-md-5">
                            <div className="card-body">
                                <span className="card-title" style={{fontSize:"3rem", fontWeight:"bold"}}>158</span>
                                <p className="card-text" style={{fontSize:"1.5rem"}}>Asistidos</p>                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card m-3 p-0" style={{maxWidth:"25rem"}}>
                    <div className="row g-0">
                        <div className="col-md-7">
                            <img src={emptyClass} alt="..." />
                        </div>
                        <div className="col-md-5">
                            <div className="card-body">
                                <span className="card-title" style={{fontSize:"3rem", fontWeight:"bold"}}>2</span>
                                <p className="card-text" style={{fontSize:"1.5rem"}}>faltas</p>                                
                            </div>
                        </div>
                    </div>
                </div>                
            </div>

            <div className="row">
            <div className="col-12">           
                <div className="table-responsive mb-7 mb-md-9">
                <table className="table table-align-middle">
                    <thead>
                    <tr>
                        <th>
                        <span className="h6 text-uppercase fw-bold">
                            Dia
                        </span>
                        </th>
                        <th>
                        <span className="h6 text-uppercase fw-bold">
                            Profesor
                        </span>
                        </th>
                        <th>
                        <span className="h6 text-uppercase fw-bold">
                            Situación
                        </span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="table-success">
                        <td>
                            <p className="mb-1 font-weight-bold">
                            15 - 05 2021
                            </p>
                            <p className="fs-sm text-muted mb-0">
                            Clase de Piano, Notas musicales
                            </p>
                        </td>
                        <td>
                            <p className="fs-sm mb-0">
                            Walyel Montoya
                            </p>
                        </td>
                        <td className="">                      
                            <p className="fs-sm mb-0 table-success">
                            Asistío
                            </p>
                        </td>
                    </tr>
                    <tr className="table-warning" >
                        <td>
                            <p className="mb-1 font-weight-bold">
                            07 - 05 - 2021
                            </p>
                            <p className="fs-sm text-muted mb-0">
                            Clase de Piano, actividades musicales
                            </p>
                        </td>
                        <td>
                            <p className="fs-sm mb-0">
                            Walyel Montoya
                            </p>
                        </td>
                        <td>
                            <p className="fs-sm mb-0">
                            Faltó
                            </p>                      
                        </td>
                    </tr>    
                    </tbody>
                </table>
                </div>

            </div>
            </div>
        </div>
    )

}

export default AsistenciaAlumno;