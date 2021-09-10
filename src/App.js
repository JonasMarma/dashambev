import React, { Component } from 'react';
import './App.css';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'

import Navcmk from './components/Navcmk'
import { height } from '@amcharts/amcharts4/.internal/core/utils/Utils';

am4core.useTheme(am4themes_animated);

class App extends Component {

  componentDidMount() {

    // ACORDOS //////////////////////////////////////////////////////////////////////
    this.barrasCarteira = am4core.create("xyAcordos", am4charts.XYChart);

    this.barrasCarteira.data = [{
      "hora": 7,
      "qtd": 50
    }, {
      "hora": 8,
      "qtd": 510
    }, {
      "hora": 9,
      "qtd": 711
    }, {
      "hora": 10,
      "qtd": 233
    }, {
      "hora": 11,
      "qtd": 703
    }, {
      "hora": 12,
      "qtd": 750
    }, {
      "hora": 13,
      "qtd": 522
    }, {
      "hora": 14,
      "qtd": 572
    }, {
      "hora": 15,
      "qtd": 522
    }, {
      "hora": 16,
      "qtd": 300
    }, {
      "hora": 17,
      "qtd": 100
    }, {
      "hora": 18,
      "qtd": 52
    }];

    var categoryAxis = this.barrasCarteira.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "hora";
    //categoryAxis.title.text = "Produtos";
    
    var valueAxis = this.barrasCarteira.yAxes.push(new am4charts.ValueAxis());
    //valueAxis.title.text = "Litres sold (M)";

    var series = this.barrasCarteira.series.push(new am4charts.LineSeries());
    //series.name = "Quantidade";
    series.dataItems.template.tooltipText = "Produto: {categoryX}\nQuantidade: {valueY}";
    series.dataItems.template.fill = am4core.color("#9A2168"); // fill
    series.dataFields.valueY = "qtd";
    series.dataFields.categoryX = "hora";


    // VALORES //////////////////////////////////////////////////////////////////////
    this.barrasCarteira = am4core.create("xyValores", am4charts.XYChart);

    this.barrasCarteira.data  = [{
      "hora": 7,
      "qtd": 50
    }, {
      "hora": 8,
      "qtd": 510
    }, {
      "hora": 9,
      "qtd": 711
    }, {
      "hora": 10,
      "qtd": 233
    }, {
      "hora": 11,
      "qtd": 703
    }, {
      "hora": 12,
      "qtd": 750
    }, {
      "hora": 13,
      "qtd": 522
    }, {
      "hora": 14,
      "qtd": 572
    }, {
      "hora": 15,
      "qtd": 522
    }, {
      "hora": 16,
      "qtd": 300
    }, {
      "hora": 17,
      "qtd": 100
    }, {
      "hora": 18,
      "qtd": 52
    }];

    var categoryAxis = this.barrasCarteira.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "hora";
    //categoryAxis.title.text = "Produtos";
    
    var valueAxis = this.barrasCarteira.yAxes.push(new am4charts.ValueAxis());
    //valueAxis.title.text = "Litres sold (M)";

    var series = this.barrasCarteira.series.push(new am4charts.LineSeries());
    //series.name = "Quantidade";
    series.dataItems.template.tooltipText = "Produto: {categoryX}\nQuantidade: {valueY}";
    series.dataItems.template.fill = am4core.color("#9A2168"); // fill
    series.dataFields.valueY = "qtd";
    series.dataFields.categoryX = "hora";



    // PIZZA TABULADOS //////////////////////////////////////////////////////////////
    this.pizzaTabulados = am4core.create("pizzaTab", am4charts.PieChart);
    
    // Dados
    this.pizzaTabulados.data = [{
      "categoria": "Tabulados",
      "quantidade": 626,
      "color": am4core.color("#00354E")
    }, {
      "categoria": "Acionados",
      "quantidade": 355,
      "color": am4core.color("#1A7C24")
    }];

    // Adicionar dados e configurar
    var pieSeries = this.pizzaTabulados.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "quantidade";
    pieSeries.dataFields.category = "categoria";

    // Estilização do gŕafico
    this.pizzaTabulados.innerRadius = am4core.percent(40);
    pieSeries.slices.template.propertyFields.fill = "color";


    // PIZZA AGENTES ///////////////////////////////////////////////////////////////
    this.pizzaAgentes = am4core.create("pizzaAgentes", am4charts.PieChart);
    
    // Dados
    this.pizzaAgentes.data = [{
      "categoria": "Logados",
      "quantidade": 300,
      "color": am4core.color("#00354E")
    }, {
      "categoria": "Faltantes",
      "quantidade": 35,
      "color": am4core.color("#CE4F4F")
    }];

    // Adicionar dados e configurar
    var pieSeries = this.pizzaAgentes.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "quantidade";
    pieSeries.dataFields.category = "categoria";

    // Estilização do gŕafico
    this.pizzaAgentes.innerRadius = am4core.percent(40);
    pieSeries.slices.template.propertyFields.fill = "color";


    // BARRAS CARTEIRA /////////////////////////////////////////////////////////////////
    this.barrasCarteira = am4core.create("barrasCarteira", am4charts.XYChart);

    this.barrasCarteira.data = [{
      "country": "Prod1",
      "litres": 950
    }, {
      "country": "Prod2",
      "litres": 510
    }, {
      "country": "Prod3",
      "litres": 711
    }, {
      "country": "Prod4",
      "litres": 33
    }, {
      "country": "Prod5",
      "litres": 703
    }, {
      "country": "Prod6",
      "litres": 750
    }, {
      "country": "Prod7",
      "litres": 522
    }, {
      "country": "Prod8",
      "litres": 572
    }];

    var categoryAxis = this.barrasCarteira.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    //categoryAxis.title.text = "Produtos";
    
    var valueAxis = this.barrasCarteira.yAxes.push(new am4charts.ValueAxis());
    //valueAxis.title.text = "Litres sold (M)";

    var series = this.barrasCarteira.series.push(new am4charts.ColumnSeries());
    //series.name = "Quantidade";
    series.columns.template.tooltipText = "Produto: {categoryX}\nQuantidade: {valueY}";
    series.columns.template.fill = am4core.color("#9A2168"); // fill
    series.dataFields.valueY = "litres";
    series.dataFields.categoryX = "country";

  }

  componentWillUnmount() {
    if (this.pizzaTabulados) {
      this.pizzaTabulados.dispose();
    }
    if (this.chart2) {
      this.chart2.dispose();
    }
  }

  render() {
    return (

        <div className = 'App' >
          <Navcmk/>
          <Container>
            <Row>
              <h1 className='d-flex justify-content-start'>Dashboard</h1>
            </Row>

            <Row>
              <Col md={6}>
                <div id="xyAcordos" style={{ width: "100%"}}></div>
              </Col>

              <Col md={6}>
                <div id="xyValores" style={{ width: "100%"}}></div>
              </Col>
            </Row>

            <Row>
              <Col md={3}>
                <div id="pizzaTab" style={{ width: "100%"}}></div>
              </Col>

              <Col md={3}>
                <div id="pizzaAgentes" style={{ width: "100%"}}></div>
              </Col>

              <Col md={6}>
                <div id="barrasCarteira" style={{ width: "100%"}}></div>
              </Col>
            </Row>

          </Container>
        </div>

    );
  }
}

export default App;