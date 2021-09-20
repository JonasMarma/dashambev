import React from "react";

import { Card } from "react-bootstrap";
import AmBarChart from "./amBarChart";

import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

function Grafico({ data, chartDiv }) {
  if (data.length > 0) {
    const envios =
      data[0].sentPerDay +
      data[1].sentPerDay +
      data[2].sentPerDay +
      data[3].sentPerDay +
      data[4].sentPerDay +
      data[5].sentPerDay;

    return (
      <Card className=" p-3" style={{ height: "25em" }}>
        <header>
          <h5>Envios por dia</h5>
          <div>
            <p className="headerValue">{envios.toLocaleString()}</p>
            <p className="headerValueLabel">Envios totais</p>
          </div>
        </header>

        <AmBarChart data={data} chartDiv={chartDiv} />
      </Card>
    );
  }

  return (
    <Card className=" p-3" style={{ height: "25em" }}>
      <header>
        <h5>Selecione uma regra</h5>
      </header>
    </Card>
  );
}
export default Grafico;
