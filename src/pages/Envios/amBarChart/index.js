import React, { useRef, useLayoutEffect } from "react";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

function AmBarChart({ data, chartDiv }) {
  const chart1 = useRef(null);

  useLayoutEffect(() => {
    let chart = am4core.create(chartDiv, am4charts.XYChart);
    chart.logo.disabled = true; // TODO: TIRAR QUANDO FOR PARA PRODUÇÃO //

    /* Create axes */
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "day";
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.paddingBottom = 0;
    categoryAxis.fontSize = 12;

    /* Create value axis */
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 100000;
    valueAxis.fontSize = 12;
    valueAxis.renderer.labels.template.adapter.add("text", function (text) {
      return text + "";
    });

    /* Create series */
    var columnSeries = chart.series.push(new am4charts.ColumnSeries());
    columnSeries.name = "Envios";
    columnSeries.dataFields.valueY = "sentPerDay";

    columnSeries.dataFields.categoryX = "day";

    columnSeries.columns.template.strokeOpacity = 0;
    columnSeries.tooltip.label.textAlign = "middle";

    let valueLabel = columnSeries.columns.template.createChild(am4core.Label);
    valueLabel.text = "[bold][#333]{valueY} Envios[/]";
    valueLabel.fontSize = 14;
    valueLabel.valign = "bottom";
    valueLabel.dy = -10;
    valueLabel.align = "center";
    valueLabel.strokeWidth = 0;

    chart.data = data;
    chart1.current = chart;

    return () => {
      chart.dispose();
    };
  }, [data, chartDiv]);

  return (
    <div
      id={chartDiv}
      style={{
        height: "100%",
        backgroundColor: "#efefef !important",
      }}
    ></div>
  );
}
export default AmBarChart;
