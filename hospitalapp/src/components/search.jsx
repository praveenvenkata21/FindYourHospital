import React, { useState } from 'react';
// import DisplayLayout from './DisplayLayout';
import axios from 'axios';

const Search = () =>{

    const [speciality,setSpeciality]=useState()
    const [hospitalData,setHospitalData]=useState()
    const hospitalArray = [];
    

    const title = (e) =>{
        setSpeciality([e.target.value])
    }

    const onSubmit = (event)=>{
        
        event.preventDefault()
        axios.get(`http://127.0.0.1:5000/details/${speciality}`) 
        .then(res => {
            //console.log(res.data['hospitallist'])
            if(res.data['hospitallist'] !== null){
            setHospitalData(res.data['hospitallist'])
            console.log(hospitalData)
            console.log(res.data) 
           
            }
        })
    }

   return(
       <div className="container mt-1"> 
       <div className="row">
            <input type="text" onChange={title}  className="form-control col-md-9" placeholder="Search by Speciality"/>
            <button type="button" onClick={onSubmit}className="btn btn-success offset-0">Search</button>
        </div>
       {/* {
             hospitalData.map((item)=>console.log("map=",item))
         }  */}
        </div> 
   )
}

export default Search;