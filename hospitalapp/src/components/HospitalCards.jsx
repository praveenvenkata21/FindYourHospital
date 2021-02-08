import React, { useState } from 'react';
import DoctorCards from './DoctorCards';
import './HospitalCards.css';
import axios from 'axios';
import history from './history';


export default class HospitalCards extends React.Component {
  state = {
    docList: [],
    hospitalData: [],
  };


  onSubmit = (e) => {

    history.push({
      pathname: '/doctors',
      state: {
        data: this.props.hosp_id,
      },
    });
  }

  render() {

    return (

      <div>
        <center>
          <div class="card mb-3" style={{ "max-width": "60vw", "max-height": "60vh" }}>
            <div class="row no-gutters">
              <div class="col-md-4" >
                <img src="https://i.pinimg.com/474x/1e/d7/b6/1ed7b68d268434b3b130f01bbff866d4.jpg" class="card-img" alt="..." style={{ "width": "20vw" }} />
              </div>
              <div class="col-md-8">
                <div class="card-body text-left" style={{ "max-width": "60vw", "max-height": "60vh" }}>
                  <h6 class="card-title text-uppercase">{this.props.hosp_name}</h6>
                  <p class="card-text"><b>{this.props.hosp_address}</b></p>
                  <p class="card-text"><b>{this.props.hosp_email}</b></p>
                  <p class="card-text"><a href={this.props.hosp_website}>Visit Hospital Website</a></p>
                  <p class="card-text"><b> {this.props.hosp_mobile[0]}</b></p>
                  <p class="card-text"><b>{this.props.hosp_timings}</b></p>
                  <button type="submit" onClick={this.onSubmit} value={this.props.hosp_id} className="btn btn-success offset-0">View Doctors</button>
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>

    )
  }

}