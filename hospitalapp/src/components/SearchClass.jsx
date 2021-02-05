import React from "react";
import axios from "axios";
import HospitalDisplay from "./HospitalDisplay";
import './SearchClass.css';
import { Redirect, useHistory } from "react-router-dom";
import history from './history';


export default class SearchClass extends React.Component {
    
    state = {
        speciality: [],
        hospitalData: [],
        docList: [],
    };
   
    title = (e) => {
        this.setState({speciality:e.target.value})
        //console.log(e.target.value)
    }

    onSubmit = (e) => {
        console.log(e)
    
             axios.get(`http://127.0.0.1:5000/details/${this.state.speciality}`)
            .then(res => {
               
                this.setState({ hospitalData: res.data['hospitallist'] });
            })
           
             history.push({
                 pathname: '/hospitals',
               
                state: {
                    data:this.state.speciality,
               },
            });    
            
    }
    render() {
        return (
            
            <div>
                <section class="search-sec mt-5">
    <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12 mr-2 mt-2" id="DropdownBackground">
                            <select value={this.state.value} onChange={this.title} class="form-control search-slt" id="exampleFormControlSelect1">
                                <option>Choose Speciality</option>
                                <option value="Cardiology">Cardiology</option>
                                <option value="General Medicine">General Medicine</option>
                                <option value="Dentist">Dentist</option>
                                <option value="ENT">ENT</option>
                                <option value="Neurology">Neurology</option>
                                <option value="Orthopaedics">Orthopaedics</option>
                            </select>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-2" >
                            <button type="button" onClick={this.onSubmit} class="btn btn-success offset-0" id="SearchButton">Search</button>
                        </div>
                    </div>
                </div>
            </div>
    </div> 
             </section> 
           {/* <div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
    Right-aligned but left aligned when large screen
  </button>
  <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
    <button class="dropdown-item" type="button" value="Cardiology" onClick={this.onSubmit(this.value)} >Cardiology</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
  </div>
</div> */} </div> 
           
        )
    }
}