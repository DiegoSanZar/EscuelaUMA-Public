import carrouselFirstImage from "../resources/img/carrousel_first_image.jpg"
import carrouselSecondImage from "../resources/img/carrousel_second_image.jpg"
import carrouselThirdImage from "../resources/img/carrousel_third_image.jpg"

function CarrouselMainPage(){

  return (
    <div className="pt-md-11">
        <div className="container">
            <div id="carouselExampleDark" className="carousel carousel slide" data-bs-ride="carousel"> 
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={carrouselFirstImage} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={carrouselSecondImage} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={carrouselThirdImage} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next white" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
                </button>    
            </div>
        </div>
    </div>
  
  )

}

export default CarrouselMainPage;
