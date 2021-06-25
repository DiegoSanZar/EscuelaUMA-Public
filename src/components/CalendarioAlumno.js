


function CalendarioAlumno(){


    return(
        <div className="container">

        <div className="calendar  p-5">
            <div className="d-flex align-items-center"><i className="fa fa-calendar fa-3x mr-3"></i>
            <h2 className="month font-weight-bold m-2 text-uppercase">Junio 2021</h2>
            </div>
            <p className="font-italic text-muted mb-5">No events for this day.</p>
            <ol className="day-names list-unstyled">            
            <li className="font-weight-bold text-uppercase">Lunes</li>
            <li className="font-weight-bold text-uppercase">Martes</li>
            <li className="font-weight-bold text-uppercase">Miercoles</li>
            <li className="font-weight-bold text-uppercase">Jueves</li>
            <li className="font-weight-bold text-uppercase">Viernes</li>
            <li className="font-weight-bold text-uppercase">Sabado</li>
            <li className="font-weight-bold text-uppercase">Domingo</li>
            </ol>

            <ol className="days list-unstyled">
            <li>
                <div className="date">1</div>
                <div className="event bg-success">Event with Long Name</div>
            </li>
            <li>
                <div className="date">2</div>
            </li>
            <li>
                <div className="date">3</div>
            </li>
            <li>
                <div className="date">4</div>
            </li>
            <li>
                <div className="date">5</div>
            </li>
            <li>
                <div className="date">6</div>
            </li>
            <li>
                <div className="date">7</div>
            </li>
            <li>
                <div className="date">8</div>
            </li>
            <li>
                <div className="date">9</div>
            </li>
            <li>
                <div className="date">10</div>
            </li>
            <li>
                <div className="date">11</div>
            </li>
            <li>
                <div className="date">12</div>
            </li>
            <li>
                <div className="date">13</div>
                <div className="event all-day begin span-2 bg-warning">Event Name</div>
            </li>
            <li>
                <div className="date">14</div>
            </li>
            <li>
                <div className="date">15</div>
                <div className="event all-day end bg-success">Event Name</div>
            </li>
            <li>
                <div className="date">16</div>
            </li>
            <li>
                <div className="date">17</div>
            </li>
            <li>
                <div className="date">18</div>
            </li>
            <li>
                <div className="date">19</div>
            </li>
            <li>
                <div className="date">20</div>
            </li>
            <li>
                <div className="date">21</div>
                <div className="event bg-primary">Event Name</div>
                <div className="event bg-success">Event Name</div>
            </li>
            <li>
                <div className="date">22</div>
                <div className="event bg-info">Event with Longer Name</div>
            </li>
            <li>
                <div className="date">23</div>
            </li>
            <li>
                <div className="date">24</div>
            </li>
            <li>
                <div className="date">25</div>
            </li>
            <li>
                <div className="date">26</div>
            </li>
            <li>
                <div className="date">27</div>
            </li>
            <li>
                <div className="date">28</div>
            </li>
            <li>
                <div className="date">29</div>
            </li>
            <li>
                <div className="date">30</div>
            </li>
            <li>
                <div className="date">31</div>
            </li>
            <li className="outside">
                <div className="date">1</div>
            </li>
            <li className="outside">
                <div className="date">2</div>
            </li>
            <li className="outside">
                <div className="date">3</div>
            </li>
            <li className="outside">
                <div className="date">4</div>
            </li>
            </ol>
        </div>
        </div>

    )
}

export default CalendarioAlumno;