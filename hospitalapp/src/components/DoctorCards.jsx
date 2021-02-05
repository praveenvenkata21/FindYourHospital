import React from 'react';
import './DoctorCards.css';
import Header from './Header';

export default function DoctorCards(props) {

    return (

        <div>
            <center>
                <div class="card mb-4" style={{ "max-width": "60vw", "max-height": "60vh","min-height":"70vh" }}>
                    <div class="row no-gutters">
                        <div class="col-md-4" >
                            <img src="images/doctor.jpeg" class="card-img" alt="..." style={{ "width": "20vw" }} />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body text-left" style={{ "width": "41vw" }}>
                                <h6 class="card-title text-uppercase">{props.doc_name}</h6>
                                <p class="card-text"><b>Qualification:{props.doc_qualification}</b></p>
                                <p class="card-text"><b>Specialization:{props.doc_specialization}</b></p>
                                <p class="card-text"><b>Experience:{props.doc_experience}</b></p>
                                <p class="card-text"><b>Fee:{props.doc_fee}</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        </div>

    )
}