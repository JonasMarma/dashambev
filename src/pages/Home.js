import React, { Component } from "react";
import "../App.scss";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card } from "react-bootstrap";

import Layout from "../components/Layout";

am4core.useTheme(am4themes_animated);

class Home extends Component {
  componentDidMount() {
    // ACORDOS //////////////////////////////////////////////////////////////////////
    this.barrasCarteira = am4core.create("xyAcordos", am4charts.XYChart);
    this.barrasCarteira.logo.disabled = true;
    this.barrasCarteira.data = [
      {
        hora: 7,
        qtd: 50,
      },
      {
        hora: 8,
        qtd: 510,
      },
      {
        hora: 9,
        qtd: 711,
      },
      {
        hora: 10,
        qtd: 233,
      },
      {
        hora: 11,
        qtd: 703,
      },
      {
        hora: 12,
        qtd: 750,
      },
      {
        hora: 13,
        qtd: 522,
      },
      {
        hora: 14,
        qtd: 572,
      },
      {
        hora: 15,
        qtd: 522,
      },
      {
        hora: 16,
        qtd: 300,
      },
      {
        hora: 17,
        qtd: 100,
      },
      {
        hora: 18,
        qtd: 52,
      },
    ];

    var categoryAxis = this.barrasCarteira.xAxes.push(
      new am4charts.CategoryAxis()
    );
    categoryAxis.dataFields.category = "hora";
    //categoryAxis.title.text = "Produtos";

    var valueAxis = this.barrasCarteira.yAxes.push(new am4charts.ValueAxis());
    //valueAxis.title.text = "Litres sold (M)";

    var series = this.barrasCarteira.series.push(new am4charts.LineSeries());
    //series.name = "Quantidade";
    series.dataItems.template.tooltipText =
      "Produto: {categoryX}\nQuantidade: {valueY}";
    series.dataItems.template.fill = am4core.color("#9A2168"); // fill
    series.dataFields.valueY = "qtd";
    series.dataFields.categoryX = "hora";

    // VALORES //////////////////////////////////////////////////////////////////////
    this.barrasCarteira = am4core.create("xyValores", am4charts.XYChart);
    this.barrasCarteira.logo.disabled = true;

    this.barrasCarteira.data = [
      {
        hora: 7,
        qtd: 50,
      },
      {
        hora: 8,
        qtd: 510,
      },
      {
        hora: 9,
        qtd: 711,
      },
      {
        hora: 10,
        qtd: 233,
      },
      {
        hora: 11,
        qtd: 703,
      },
      {
        hora: 12,
        qtd: 750,
      },
      {
        hora: 13,
        qtd: 522,
      },
      {
        hora: 14,
        qtd: 572,
      },
      {
        hora: 15,
        qtd: 522,
      },
      {
        hora: 16,
        qtd: 300,
      },
      {
        hora: 17,
        qtd: 100,
      },
      {
        hora: 18,
        qtd: 52,
      },
    ];

    var categoryAxis = this.barrasCarteira.xAxes.push(
      new am4charts.CategoryAxis()
    );
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
    series.propertyFields.fill = "color";
    series.fillOpacity = 1;

    // PIZZA TABULADOS //////////////////////////////////////////////////////////////
    this.pizzaTabulados = am4core.create("pizzaTab", am4charts.PieChart);
    this.pizzaTabulados.logo.disabled = true;


    // Dados
    this.pizzaTabulados.data = [
      {
        categoria: "Tabulados",
        quantidade: 300,
        color: am4core.color("#00354E"),
      },
      {
        categoria: "Acionados",
        quantidade: 300,
        color: am4core.color("#1A7C24"),
      },
    ];

    // Adicionar dados e configurar
    var pieSeries = this.pizzaTabulados.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "quantidade";
    pieSeries.dataFields.category = "categoria";

    // Estilização do gŕafico
    this.pizzaTabulados.innerRadius = am4core.percent(30);
    pieSeries.slices.template.propertyFields.fill = "color";

    // Workarounds para tentar fazer caber tudo %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    this.pizzaTabulados.radius = am4core.percent(70);
    pieSeries.labels.template.text = "{category}";
    pieSeries.labels.template.fontSize = 11;
    pieSeries.alignLabels = false;

    // PIZZA AGENTES ///////////////////////////////////////////////////////////////
    this.pizzaAgentes = am4core.create("pizzaAgentes", am4charts.PieChart);
    this.pizzaAgentes.logo.disabled = true;

    // Dados
    this.pizzaAgentes.data = [
      {
        categoria: "Logados",
        quantidade: 300,
        color: am4core.color("#00354E"),
      },
      {
        categoria: "Faltantes",
        quantidade: 35,
        color: am4core.color("#CE4F4F"),
      },
    ];

    // Adicionar dados e configurar
    var pieSeries = this.pizzaAgentes.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "quantidade";
    pieSeries.dataFields.category = "categoria";

    // Estilização do gŕafico
    this.pizzaAgentes.innerRadius = am4core.percent(40);
    pieSeries.slices.template.propertyFields.fill = "color";

    // BARRAS CARTEIRA /////////////////////////////////////////////////////////////////
    this.barrasCarteira = am4core.create("barrasCarteira", am4charts.XYChart);
    this.barrasCarteira.logo.disabled = true;

    this.barrasCarteira.data = [
      {
        country: "Prod1",
        litres: 950,
      },
      {
        country: "Prod2",
        litres: 510,
      },
      {
        country: "Prod3",
        litres: 711,
      },
      {
        country: "Prod4",
        litres: 150,
      },
      {
        country: "Prod5",
        litres: 703,
      },
      {
        country: "Prod6",
        litres: 750,
      },
      {
        country: "Prod7",
        litres: 522,
      },
      {
        country: "Prod8",
        litres: 572,
      },
    ];

    var categoryAxis = this.barrasCarteira.xAxes.push(
      new am4charts.CategoryAxis()
    );
    categoryAxis.dataFields.category = "country";
    //categoryAxis.title.text = "Produtos";

    var valueAxis = this.barrasCarteira.yAxes.push(new am4charts.ValueAxis());
    //valueAxis.title.text = "Litres sold (M)";

    var series = this.barrasCarteira.series.push(new am4charts.ColumnSeries());
    //series.name = "Quantidade";
    series.columns.template.tooltipText =
      "Produto: {categoryX}\nQuantidade: {valueY}";
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
      <Layout>
        <Row>
          <h1>Dashboard</h1>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <Card className="mt-2 p-3">
              <header>
                <h5>Quantidade de Acordos</h5>
                <div>
                  <p className="headerValue">869.600</p>
                  <p className="headerValueLabel">Acordos Totais</p>
                </div>
              </header>
              <div id="xyAcordos"></div>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="mt-2 p-3">
              <header>
                <h5>Valor em Acordos</h5>
                <div>
                  <p className="headerValue">R$1.305.885.888.737</p>
                  <p className="headerValueLabel">Valor em acordos</p>
                </div>
              </header>
              <div id="xyValores"></div>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={3}>
            <Card className="mt-2 p-3">
              <header>
                <h5>
                  Tabulação e <br />
                  Acionamento
                </h5>
                <div>
                  <p className="headerValue">888.737</p>
                  <p className="headerValueLabel">Eventos</p>
                </div>
              </header>
              <div id="pizzaTab" style={{ maxWidth: "100%" }}></div>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="mt-2 p-3">
              <header>
                <h5>Agentes</h5>
                <div>
                  <p className="headerValue">737</p>
                  <p className="headerValueLabel">Total</p>
                </div>
              </header>
              <div id="pizzaAgentes" style={{ maxWidth: "100%" }}></div>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="mt-2 p-3">
              <header>
                <h5>Carteira</h5>
                <div>
                  <p className="headerValue">305.885</p>
                  <p className="headerValueLabel">Acordos</p>
                </div>
              </header>
              <div id="barrasCarteira"></div>
            </Card>
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default Home;
