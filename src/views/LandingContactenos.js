import React, {useState, useEffect} from 'react'
import NavTop from '../components/NavTop'
import ContactenosDetail from '../components/CompContactenos'
import Footer from '../components/Footer'

function LandingContactenos(){

    const showLandingContactenos = async() => {
        
    }

    useEffect(() => {
        showLandingContactenos();
    },[])

    return(

        <div>
            <NavTop></NavTop>
            <ContactenosDetail></ContactenosDetail>
            <Footer></Footer>
        </div>
    )


}

export default LandingContactenos;
