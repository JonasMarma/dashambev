import React, { Component } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import 'bootstrap/dist/css/bootstrap.min.css'


am4core.useTheme(am4themes_animated);

class GraficoAgentes extends Component {

  componentDidMount() {

    this.chart = am4core.create("chartdiv", am4charts.PieChart);
    
    // Dados
    this.chart.data = [{
      "categoria": "Logados",
      "quantidade": 300
    }, {
      "categoria": "Faltantes",
      "quantidade": 35
    }];

    // Adicionar dados e configurar
    var pieSeries = this.chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "quantidade";
    pieSeries.dataFields.category = "categoria";

  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
        <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
    );
  }
}

export default GraficoAgentes;