import React, {useState, useEffect} from 'react'
import NavTop from '../components/NavTop'
import NosotrosDetail from '../components/CompNosotros'
import Footer from '../components/Footer'

function LandingNosotros(){

    const showLandingNosotros = async() => {
        
    }

    useEffect(() => {
        showLandingNosotros();
    },[])

    return(

        <div>
            <NavTop></NavTop>
            <NosotrosDetail></NosotrosDetail>
            <Footer></Footer>
        </div>
    )


}

export default LandingNosotros;
