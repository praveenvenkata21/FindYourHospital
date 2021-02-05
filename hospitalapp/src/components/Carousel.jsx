import React from 'react';
import './Carousel.css';
import Footer from './Footer';
import SearchClass from './SearchClass';


export default function Carousel() {
    return (
        <div>

            <section className="carouselstyle">
                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
                    <div class="carousel-inner" >
                        <div class="carousel-item active" >
                            <img src="https://img.freepik.com/free-vector/front-side-view-hospital-with-staff-ambulance_43633-7251.jpg?size=626&ext=jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item" >
                            <img src="https://i.pinimg.com/originals/6d/ab/60/6dab60551f03f785d57c26c8cecbfb50.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item" >
                            <img className="d-block w-100" src="https://news.wsiu.org/sites/wsiu/files/styles/x_large/public/201701/hospital_tax_exempt.jpg" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </section>
            <SearchClass />
            <Footer />
        </div>

    )
}