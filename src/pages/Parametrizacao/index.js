import { SlicedChart } from "@amcharts/amcharts4/charts";
import React, { useState, useEffect } from "react";

import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import Select from "react-select";
import Layout from "../../components/Layout";
import TabelaParam from "../../components/TabelaParam";
import "./styles.scss";

export const Parametrizacao = ({ rows, onAdd }) => {
  const [type, setType] = useState("");
  const [paramName, setParamName] = useState("");
  const [lateGap, setLateGap] = useState("");
  const [product, setProduct] = useState([]);
  const [directDate, setDirectDate] = useState("");
  const [uf, setUf] = useState("");

  const productList = [
    { value: "prod1", label: "AB608293" },
    { value: "prod2", label: "AB608514" },
    { value: "prod3", label: "AB603893" },
    { value: "prod4", label: "AB608292" },
    { value: "prod5", label: "AB238293" },
    { value: "prod6", label: "AB238200" },
    { value: "prod7", label: "AB238299" },
    { value: "prod8", label: "AB238291" },
  ];

  const ufList = [
    { value: "SP", label: "SP" },
    { value: "BA", label: "BA" },
    { value: "PA", label: "PA" },
    { value: "AM", label: "AM" },
    { value: "RR", label: "RR" },
    { value: "RO", label: "RO" },
    { value: "MG", label: "MG" },
    { value: "RJ", label: "RJ" },
  ];

  const onSubmit = (e) => {
    e.preventDefault();

    // Validar
    /*
    if (!text) {
      alert('Please add a task')
      return
    }
    */

    onAdd({ type, paramName, lateGap, product, directDate, uf })

    // Resetar campos
    setType("SMS")
    setParamName("")
    setLateGap("")
    setProduct([])
    setDirectDate("")
    setUf("")
  }

  const handleProduct = (options) => {
    setProduct(options);
    console.log(product);
  };

  const handleUf = (options) => {
    setUf(options);
    console.log(product);
  };

  return (
    <Layout id="param">
      <Row>
        <h1>Parametrização de régua de cobrança</h1>
      </Row>

      <Form onSubmit={onSubmit}>
        <Row className="mb-4 mt-2">
          <Col md={1} className="param-input-group mr-4 pl-2">
            <Row>
              <Form.Check
                label="Envio SMS"
                value="SMS"
                name="sendType"
                type="radio"
                onChange={(e) => setType(e.target.value)}
              />
            </Row>
            <Row>
              <Form.Check
                label="Envio Email"
                value="E-mail"
                name="sendType"
                type="radio"
                onChange={(e) => setType(e.target.value)}
              />
            </Row>
          </Col>
          <Col md={11} className="d-flex justify-content-between">
            <Col style={{ marginRight: "10px", maxWidth: "500px" }}>
              <p style={{ margin: "0", fontWeight: "bold" }}>
                Nome do Parâmetro
              </p>
              <div style={{ marginRight: "10px" }}>
                <InputGroup>
                  <FormControl
                    placeholder="Insira um nome"
                    aria-label="nome"
                    aria-describedby="basic-addon1"
                    value={paramName}
                    onChange={(e) => setParamName(e.target.value)}
                  />
                </InputGroup>
              </div>
            </Col>
            <Col
              style={{
                alignSelf: "self-end",
                marginRight: "10px",
              }}
            >
              <p style={{ margin: "0", fontWeight: "bold" }}>Faixa de Atraso</p>
              <div>
                <InputGroup>
                  <FormControl
                    placeholder="__ dias"
                    aria-label="nome"
                    aria-describedby="basic-addon1"
                    value={lateGap}
                    onChange={(e) => setLateGap(e.target.value)}
                  />
                </InputGroup>
              </div>
            </Col>
            <Col
              style={{
                alignSelf: "self-end",
                marginRight: "10px",
              }}
            >
              <p style={{ margin: "0", fontWeight: "bold" }}>Produto</p>
              <div>
                <Select
                  className="caixa"
                  options={productList}
                  value={product}
                  placeholder={<div>Selecione</div>}
                  onChange={handleProduct}
                />
              </div>
            </Col>

            <Col
              style={{
                alignSelf: "self-end",
                marginRight: "10px",
                maxWidth: "200px",
              }}
            >
              <span style={{ margin: "0", fontWeight: "bold" }}>
                Data de Direcionamento
              </span>

              <div>
                <Form.Control
                  type="date"
                  name="date-direc"
                  className="caixa mr-1"
                  value={directDate}
                  onChange={(e) => setDirectDate(e.target.value)}
                />
              </div>
            </Col>
            <Col
              style={{
                alignSelf: "self-end",
                marginRight: "30px",
                maxWidth: "120px",
              }}
            >
              <p style={{ margin: "0", fontWeight: "bold" }}>UF</p>
              <div
                style={{
                  alignSelf: "self-end",
                }}
              >
                <Select
                  options={ufList}
                  placeholder={<div>Selecione</div>}
                  value={uf}
                  onChange={handleUf}
                />
              </div>
            </Col>
            <Col
              md={1}
              style={{
                alignSelf: "self-end",
              }}
            >
              <div
                style={{
                  alignSelf: "self-end",
                }}
              >
                <Button className="button" type="submit">
                  {" "}
                  Salvar{" "}
                </Button>
              </div>
            </Col>
          </Col>
        </Row>
      </Form>

      <Row>
        <Col md={12}>
          <TabelaParam rows={rows} />
        </Col>
      </Row>
    </Layout>
  );
};
