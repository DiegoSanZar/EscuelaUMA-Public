
import Calendario from '../components/CalendarioAlumno'
import SideBar from "../components/SideBar"


function CalendarioAlumnoView(){


    return(
        <div className="d-flex flex-row">
            <SideBar></SideBar>   
            <Calendario></Calendario>            

        </div>
    )


}

export default CalendarioAlumnoView;
