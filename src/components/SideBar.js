import {Link} from "react-router-dom" 
import logo from "../resources/img/uma_logo.jpg"
import Swal from 'sweetalert2';
import {useHistory} from "react-router-dom"
import scriptSide from "../javascript"


function SideBar(){

    const history = useHistory()
    const cerarSession = async (e) => {
        

        e.preventDefault()
        try {          
            Swal.fire({
                title: '¿Deseas cerrar sesión?',
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: `Si`,
                denyButtonText: `No`,
                }).then((result) => {                
                if (result.isConfirmed) {
                    history.push('/')
                }
                })
        } catch (error) {
          console.log(error)
        }
    }

    return (
      <div className="navbar-expand-sm sidebar bg-light">
        <div className="d-flex flex-column flex-shrink-0 p-3 " style={{width: "280px"}}>
            <div className="d-flex justify-content-center">
                <a className="navbar-brand" href="/">
                <img src={logo} alt="Logo" className="navbar-brand-img" style={{width:"150px",height:"150px",borderRadius:"50%"}}></img>
                </a>              
            </div>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
                <Link to="/intranet" id="menu-intranet" className="nav-link active" aria-current="page">                
                Inicio
                </Link>
            </li>
            <li>
                <Link to="/registro" id="menu-registro" className="nav-link link-dark">                
                Mis datos
                </Link>
            </li>
            <li>
                <Link to="/calendario" id="menu-calendario" className="nav-link link-dark">                
                Calendario clases
                </Link>
            </li>
            <li>
                <Link to="/tareas" id="menu-tareas" className="nav-link link-dark">
                
                Tareas
                </Link>
            </li>
            <li>
                <Link to="/asistencia" id="menu-asistencia" className="nav-link link-dark">
                
                Asistencia
                </Link>
            </li>
            </ul>

            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link link-dark" onClick={cerarSession}>                
                    Salir
                    </Link>
                </li>
            </ul> 
            <hr />           
        </div>

     </div>
     
    )



}

export default SideBar;