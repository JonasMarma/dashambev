import React, { useRef, useLayoutEffect } from "react";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

function AmFunnelChart({ data, chartDiv }) {
  const chart1 = useRef(null);

  useLayoutEffect(() => {
    var chart = am4core.create(chartDiv, am4charts.SlicedChart);
    chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
    chart.logo.disabled = true; // TODO: TIRAR QUANDO FOR PARA PRODUÇÃO //

    var series = chart.series.push(new am4charts.FunnelSeries());
    series.colors.step = 2;
    series.dataFields.value = "value";
    series.dataFields.category = "name";
    series.alignLabels = true;

    series.labelsContainer.paddingLeft = 15;
    series.labelsContainer.width = 200;

    chart.legend = new am4charts.Legend();
    chart.legend.position = "left";
    chart.legend.valign = "top";
    chart.legend.margin(5, 5, 20, 5);

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
export default AmFunnelChart;
