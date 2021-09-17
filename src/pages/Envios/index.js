import React from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import Select from "react-select";
import Layout from "../../components/Layout";
import Grafico from "./Grafico"
import "./styles.scss";

import { useState } from "react";

import TabelaParam from "../../components/TabelaParam";

export const Envio = () => {
  const [param, setParam] = useState([]);

  const dataParam1 = [
    {
      day: "01/09/2021",
      sentPerDay: 65000,
    },
    {
      day: "02/09/2021",
      sentPerDay: 92000,
    },
    {
      day: "03/09/2021",
      sentPerDay: 88000,
    },
    {
      day: "04/09/2021",
      sentPerDay: 93000,
    },
    {
      day: "05/09/2021",
      sentPerDay: 90000,
    },
    {
      day: "06/09/2021",
      sentPerDay: 95000,
    },
  ];

  const dataParam2 = [
    {
      day: "01/09/2021",
      sentPerDay: 65000,
    },
    {
      day: "02/09/2021",
      sentPerDay: 65000,
    },
    {
      day: "03/09/2021",
      sentPerDay: 65000,
    },
    {
      day: "04/09/2021",
      sentPerDay: 65000,
    },
    {
      day: "05/09/2021",
      sentPerDay: 65000,
    },
    {
      day: "06/09/2021",
      sentPerDay: 65000,
    },
  ];

  const paramNameList = [
    { value: dataParam1, label: "Param1" },
    { value: dataParam2, label: "Param2" },
  ];

  const handleParam = (value) => {
    setParam(value.value);
  };

  return (
    <Layout>
      <Row>
        <h3>Envios por dia</h3>
      </Row>
      <Row className="mb-4 mt-2">
        <p style={{ margin: "0", fontWeight: "bold" }}>Parâmetros criados</p>
        <div
          style={{
            alignSelf: "self-end",
          }}
        >
          <Select
            placeholder={<div>Selecione a regra criada</div>}
            onChange={handleParam}
            options={paramNameList}
          />
        </div>
      </Row>
      <Row>
        <Col>
          <Grafico data={param} chartDiv="sentPerDay" />
        </Col>
      </Row>
    </Layout>
  );
};
