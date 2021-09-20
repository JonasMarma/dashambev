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
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.dataFields.category = "hora";
    categoryAxis.renderer.labels.template.adapter.add("text", function (text) {
      return text + "h";
    });

    var valueAxis = this.barrasCarteira.yAxes.push(new am4charts.ValueAxis());

    var series = this.barrasCarteira.series.push(new am4charts.LineSeries());
    series.smoothing = "monotoneX";
    series.dataItems.template.fill = am4core.color("#9A2168"); // fill
    series.dataFields.valueY = "qtd";
    series.dataFields.categoryX = "hora";
    series.propertyFields.fill = "color";
    series.fillOpacity = 1;

    var circleBullet = series.bullets.push(new am4charts.CircleBullet());
    circleBullet.circle.stroke = am4core.color("white");
    circleBullet.circle.strokeOpacity = 0.5;
    circleBullet.circle.strokeWidth = 2;
    circleBullet.circle.radius = 6;
    circleBullet.tooltipText =
      "[bold] {categoryX} [/] horas \n  [bold] {valueY} [/]Acordos";

    // VALORES //////////////////////////////////////////////////////////////////////
    this.barrasCarteira = am4core.create("xyValores", am4charts.XYChart);
    this.barrasCarteira.logo.disabled = true;

    this.barrasCarteira.colors.list = [am4core.color("#bac9f5")];
    this.barrasCarteira.data = [
      {
        hora: 7,
        qtd: 9000,
      },
      {
        hora: 8,
        qtd: 5100,
      },
      {
        hora: 9,
        qtd: 7011,
      },
      {
        hora: 10,
        qtd: 2330,
      },
      {
        hora: 11,
        qtd: 7030,
      },
      {
        hora: 12,
        qtd: 7500,
      },
      {
        hora: 13,
        qtd: 5202,
      },
      {
        hora: 14,
        qtd: 5702,
      },
      {
        hora: 15,
        qtd: 5022,
      },
      {
        hora: 16,
        qtd: 3000,
      },
      {
        hora: 17,
        qtd: 8600,
      },
      {
        hora: 18,
        qtd: 5022,
      },
    ];

    var categoryAxis1 = this.barrasCarteira.xAxes.push(
      new am4charts.CategoryAxis()
    );
    categoryAxis1.renderer.minGridDistance = 10;
    categoryAxis1.dataFields.category = "hora";
    categoryAxis1.renderer.labels.template.adapter.add("text", function (text) {
      return text + "h";
    });

    var valueAxis1 = this.barrasCarteira.yAxes.push(new am4charts.ValueAxis());
    valueAxis1.min = 0;
    valueAxis1.max = 10000;

    var series1 = this.barrasCarteira.series.push(new am4charts.LineSeries());
    series1.smoothing = "monotoneX";

    var circleBullet1 = series1.bullets.push(new am4charts.CircleBullet());
    circleBullet1.circle.stroke = am4core.color("black");
    circleBullet1.circle.strokeOpacity = 0.5;
    circleBullet1.circle.strokeWidth = 2;
    circleBullet1.circle.radius = 6;

    circleBullet1.tooltipText =
      "[bold]Hora:[/] {categoryX} horas \n [bold]Valor: [/]R$ {valueY}";
    series1.tooltipText =
      "[bold]Hora:[/] {categoryX} \n [bold]Valor: [/]R$ {valueY}";

    series1.dataFields.valueY = "qtd";
    series1.dataFields.categoryX = "hora";
    series1.propertyFields.fill = "color";
    series1.fillOpacity = 1;

    // PIZZA TABULADOS //////////////////////////////////////////////////////////////
    this.pizzaTabulados = am4core.create("pizzaTab", am4charts.PieChart);
    this.pizzaTabulados.logo.disabled = true;
    // Dados
    this.pizzaTabulados.data = [
      {
        categoria: "Tabulados",
        quantidade: 253,
        color: am4core.color("#21409a"),
      },
      {
        categoria: "Acionados",
        quantidade: 310,
        color: am4core.color("#8CD9F3"),
      },
    ];

    // Adicionar dados e configurar
    var pieSeries = this.pizzaTabulados.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "quantidade";
    pieSeries.dataFields.category = "categoria";

    // Estilização do gŕafico
    this.pizzaTabulados.innerRadius = am4core.percent(30);
    pieSeries.slices.template.propertyFields.fill = "color";

    // Add a legend
    this.pizzaTabulados.legend = new am4charts.Legend();
    this.pizzaTabulados.legend.position = "right";
    this.pizzaTabulados.legend.fontSize = "12px";

    // Workarounds para tentar fazer caber tudo %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    this.pizzaTabulados.radius = am4core.percent(70);
    pieSeries.labels.template.disabled = true;

    // PIZZA AGENTES ///////////////////////////////////////////////////////////////
    this.pizzaAgentes = am4core.create("pizzaAgentes", am4charts.PieChart);
    this.pizzaAgentes.logo.disabled = true;

    // Dados
    this.pizzaAgentes.data = [
      {
        categoria: "Logados",
        quantidade: 300,
        color: am4core.color("#8CD9F3"),
      },
      {
        categoria: "Faltantes",
        quantidade: 35,
        color: am4core.color("#21409a"),
      },
    ];

    // Adicionar dados e configurar
    var agentsPieChart = this.pizzaAgentes.series.push(
      new am4charts.PieSeries()
    );
    agentsPieChart.dataFields.value = "quantidade";
    agentsPieChart.dataFields.category = "categoria";
    // 440

    // Estilização do gŕafico
    this.pizzaAgentes.innerRadius = am4core.percent(40);
    agentsPieChart.labels.template.disabled = true;
    agentsPieChart.slices.template.propertyFields.fill = "color";

    // Add a legend
    this.pizzaAgentes.legend = new am4charts.Legend();
    this.pizzaAgentes.legend.position = "right";
    this.pizzaAgentes.legend.fontSize = "12px";

    // BARRAS CARTEIRA /////////////////////////////////////////////////////////////////
    this.barrasCarteira = am4core.create("barrasCarteira", am4charts.XYChart);
    this.barrasCarteira.logo.disabled = true;
    this.barrasCarteira.colors.list = [
      am4core.color("#845EC2"),
      am4core.color("#D65DB1"),
      am4core.color("#FF6F91"),
      am4core.color("#FF9671"),
      am4core.color("#FFC75F"),
      am4core.color("#F9F871"),
    ];

    this.barrasCarteira.data = [
      {
        country: "AB608293",
        litres: 950,
      },
      {
        country: "AB608514",
        litres: 510,
      },
      {
        country: "AB603893",
        litres: 711,
      },
      {
        country: "AB608292",
        litres: 150,
      },
      {
        country: "AB238293",
        litres: 703,
      },
      {
        country: "AB238200",
        litres: 750,
      },
      {
        country: "AB238299",
        litres: 522,
      },
      {
        country: "AB238291",
        litres: 572,
      },
    ];

    var categoryAxis = this.barrasCarteira.xAxes.push(
      new am4charts.CategoryAxis()
    );
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.labels.template.fontSize = 13;

    var valueAxis = this.barrasCarteira.yAxes.push(new am4charts.ValueAxis());

    var series = this.barrasCarteira.series.push(new am4charts.ColumnSeries());
    this.barrasCarteira.colors.list = [am4core.color("#bac9f5")];

    series.columns.template.tooltipText =
      "Produto: {categoryX}\nQuantidade: {valueY}";
    series.columns.template.fill = am4core.color("#bac9f5"); // fill
    series.columns.template.stroke = am4core.color("#bac9f5"); // fill

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
          <h3>Dashboard</h3>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <Card className="mt-2 p-3">
              <header>
                <h5>Quantidade de Acordos</h5>
                <div>
                  <p className="headerValue">9.686</p>
                  <p className="headerValueLabel">Acordos Totais</p>
                </div>
              </header>
              <div id="xyAcordos" style={{ height: "12em" }}></div>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="mt-2 p-3">
              <header>
                <h5>Valor em Acordos</h5>
                <div>
                  <p className="headerValue">R$305.885,00</p>
                  <p className="headerValueLabel">Valor em acordos</p>
                </div>
              </header>
              <div id="xyValores" style={{ height: "12em" }}></div>
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
