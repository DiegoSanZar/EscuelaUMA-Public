import React, {useState, useEffect} from 'react'
import NavTop from '../components/NavTop'
import ClasesDetail from '../components/CompClases'
import Footer from '../components/Footer'

function LandingClases(){

    const showLandingClases = async() => {
        
    }

    useEffect(() => {
        showLandingClases();
    },[])

    return(

        <div>
            <NavTop></NavTop>
            <ClasesDetail></ClasesDetail>
            <Footer></Footer>
        </div>
    )


}

export default LandingClases;
