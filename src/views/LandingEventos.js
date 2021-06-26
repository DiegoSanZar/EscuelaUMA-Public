import React, {useState, useEffect} from 'react'
import NavTop from '../components/NavTop'
import EventosDetail from '../components/CompEventos'
import Footer from '../components/Footer'

function LandingEventos(){

    const showLandingEventos = async() => {
        
    }

    useEffect(() => {
        showLandingEventos();
    },[])

    return(

        <div>
            <NavTop></NavTop>
            <EventosDetail></EventosDetail>
            <Footer></Footer>
        </div>
    )


}

export default LandingEventos;
