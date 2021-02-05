import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';

export default function Header() {
    return (

        
        <div className="Header">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="#">Find Your Hospital</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <Link className="nav-link" to='/home'>Home</Link>                               
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to='/about'>Statistics</Link>
                            </li>
                            <li class="nav-item">
                            <Link className="nav-link" to='/speciality'>Specialities</Link>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        
    )
}