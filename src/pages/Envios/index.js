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
      sentPerDay: 74562,
    },
    {
      day: "02/09/2021",
      sentPerDay: 65874,
    },
    {
      day: "03/09/2021",
      sentPerDay: 88541,
    },
    {
      day: "04/09/2021",
      sentPerDay: 32567,
    },
    {
      day: "05/09/2021",
      sentPerDay: 74523,
    },
    {
      day: "06/09/2021",
      sentPerDay: 95478,
    },
  ];

  const dataParam2 = [
    {
      day: "01/09/2021",
      sentPerDay: 32156,
    },
    {
      day: "02/09/2021",
      sentPerDay: 75412,
    },
    {
      day: "03/09/2021",
      sentPerDay: 96581,
    },
    {
      day: "04/09/2021",
      sentPerDay: 14785,
    },
    {
      day: "05/09/2021",
      sentPerDay: 53253,
    },
    {
      day: "06/09/2021",
      sentPerDay: 14756,
    },
  ];

  const dataParam3 = [
    {
      day: "01/09/2021",
      sentPerDay: 15632,
    },
    {
      day: "02/09/2021",
      sentPerDay: 45632,
    },
    {
      day: "03/09/2021",
      sentPerDay: 85241,
    },
    {
      day: "04/09/2021",
      sentPerDay: 74125,
    },
    {
      day: "05/09/2021",
      sentPerDay: 85263,
    },
    {
      day: "06/09/2021",
      sentPerDay: 96325,
    },
  ];

  const dataParam4 = [
    {
      day: "01/09/2021",
      sentPerDay: 85269,
    },
    {
      day: "02/09/2021",
      sentPerDay: 25874,
    },
    {
      day: "03/09/2021",
      sentPerDay: 74198,
    },
    {
      day: "04/09/2021",
      sentPerDay: 36547,
    },
    {
      day: "05/09/2021",
      sentPerDay: 75632,
    },
    {
      day: "06/09/2021",
      sentPerDay: 12547,
    },
  ];

  const paramNameList = [
    { value: dataParam1, label: "Clientes entrantes" },
    { value: dataParam2, label: "Lembrete de débito" },
    { value: dataParam3, label: "Lembrete de vencimento de boleto" },
    { value: dataParam4, label: "Quebra de acordo" },
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
