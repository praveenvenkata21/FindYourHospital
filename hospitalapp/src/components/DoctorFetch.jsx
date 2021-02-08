import React, { useState } from 'react';
import DoctorCards from './DoctorCards';
import './HospitalDisplay.css';
import axios from 'axios';
import HospitalCards from './HospitalCards';
import './DoctorFetch.css';


export default class DoctorFetch extends React.Component {
    state = {  
        docList: [],
    };
    
    componentDidMount(){
        var query=this.props.location.state.data
        axios.get(`http://127.0.0.1:5000/doctors/${query}`)
        .then(res => {
             res.data['doclist'].map(item=>this.setState({docList:item['doc_list'] }))
      })

    }
   
    render(){
    return (
       
        <div className="doctorcards">
        <div className="container mt-5">
        <h1>Doctors List</h1>           
             {
                this.state.docList.map(item=><DoctorCards doc_name={item.doc_name} doc_qualification={item.doc_qualification}
                                             doc_specialization={item.doc_specialization} 
                                             doc_experience={item.doc_experience}
                                             doc_fee={item.doc_fee}/>)
                
            } 
        </div>
        </div>
    )
    }
}