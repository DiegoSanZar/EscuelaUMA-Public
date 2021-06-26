import React, {useState, useEffect} from 'react'
import NavTop from '../components/NavTop'
import Carrousel from '../components/CarrouselMainPage'
import Offerings from '../components/OfferingsMainPage'
import Footer from '../components/Footer'

function LandingView(){

    const showLadingPage = async() => {
        
    }


    useEffect(() => {
        showLadingPage();
    },[])

    return(
        <div>
            <NavTop></NavTop>
            <Carrousel></Carrousel>            
            <Offerings></Offerings>            
            <Footer></Footer>
        </div>
    )


}

export default LandingView;
