import React, { useState } from 'react';
import DoctorCards from './DoctorCards';
import './HospitalDisplay.css';
import axios from 'axios';
import location from './location';
import HospitalCards from './HospitalCards';


export default class HospitalDisplay extends React.Component {
    state = {  
        docList: [],
        hospitalData: [],
    };
    
    componentDidMount(){
        var query=this.props.location.state.data
        axios.get(`http://127.0.0.1:5000/details/${query}`)
        .then(res => {

            this.setState({ hospitalData: res.data['hospitallist'] });
           console.log(this.state.hospitalData)           
      })

    }
   
    render(){
       
    return (
        <div className="hospitalcards" style={{"max-height":"100%"}}>
        <div className="container mt-5" >
      <h1> Hospitals List </h1> 
             {
              this.state.hospitalData.map(item=><HospitalCards hosp_id={item.hosp_id} hosp_name={item.hosp_name} hosp_address={item.hosp_address} 
                                                hosp_email={item.hosp_email} hosp_website={item.hosp_website} 
                                                hosp_mobile={item.hosp_mobile} hosp_timings={item.hosp_timings}
                                                speciality={this.state.speciality}/>)                             
            }   
        </div> 
        </div>
    )
    }
}