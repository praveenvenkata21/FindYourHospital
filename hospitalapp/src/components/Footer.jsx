import React from 'react';
import './Footer.css'
export default function Footer(){
    return(
      <div className="Footer">
 <footer class="bg-secondary text-white text-center text-lg-start">
  <div class="container p-4">
    <div class="row">
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase">website content</h5>
        <p>
          "The people who has the health,they only can have a hope..<br></br>
           and the people who has the hope can lead the life.!!<br></br>
          You are not alone..We are here to help you out..<br></br>
           Come and find your doctor.."
        </p>
      </div>
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        
        <div className = "text-center center-block pull-right" >
        <ul class="list-unstyled">
          <li>
          <h5 class="text-uppercase mb-0">Our socialmedias</h5>
          </li>
          <li>
            <a href="#!" class="fa fa-facebook"></a>
          </li>
          <li>
            <a href="#!" class="fa fa-twitter"></a>
          </li>
          <li>
            <a href="#!" class="fa fa-youtube"></a>
          </li>
          <li>
            <a href="#!" class="fa fa-instagram"></a>
          </li>
        </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="text-center p-3" style={{"background-color": "rgba(0, 0, 0, 0.2)"}}>
    ©️ 2020 Copyright:
    <a class="text-white">HealthCare</a>
  </div>
</footer>
</div>
    )
}