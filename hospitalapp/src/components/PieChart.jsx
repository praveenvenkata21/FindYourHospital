import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import './PieChart.css';
export default function PieChart() {

  am4core.ready(function () {


    am4core.useTheme(am4themes_animated);
    var chart = am4core.create("chartdiv", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0;
    chart.legend = new am4charts.Legend();        
    chart.data = [
      {
        "Speciality": " Cardiology",
        "count": "20"
      },
      {
        "Speciality": "General Medicine",
        "count": "15"
      },
      {
        "Speciality": "Dentist",
        "count": "10"
      },
      {
        "Speciality": "ENT",
        "count": "10"
      },
      {
        "Speciality": "Neurology",
        "count": "20"
      },
      {
        "Speciality": "Orthopaedics",
        "count": "20"
      },
      
      
    ];

    var series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "count";
    series.dataFields.category = "Speciality";

  });


  return (

    <div className="piechart container-fluid">

      <div id="chartdiv"></div>
    </div>
  )
}