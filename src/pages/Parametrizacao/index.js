import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";
import Select from "react-select";
import Layout from "../../components/Layout";
import "./styles.scss";

export const Parametrizacao = () => {
  const [sendType, setSendType] = useState("");
  const [paramName, setParamName] = useState("");
  const [lateGap, setLateGap] = useState("");
  const [product, setProduct] = useState("");
  const [directDate, setDirectDate] = useState("");
  const [uf, setUf] = useState("");

  const productList = [
    { value: "prod1", label: "AB608293" },
    { value: "prod2", label: "AB608514" },
    { value: "prod3", label: "AB603893" },
    { value: "prod4", label: "AB608292" },
    { value: "prod5", label: "AB238293" },
    { value: "prod6", label: "AB238200" },
    { value: "prod3", label: "AB238299" },
    { value: "prod3", label: "AB238291" },
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

  const tableData = [
    {
      id: 1,
      type: "SMS",
      paramName: "Param1",
      lateGap: "03",
      product: "AB608293",
      directDate: "24/09/2021",
      uf: "SP",
    },
    {
      id: 2,
      type: "E-mail",
      paramName: "Param2",
      lateGap: "01",
      product: "AB608514",
      directDate: "21/09/2021",
      uf: "BA",
    },
    {
      id: 3,
      type: "SMS",
      paramName: "Param3",
      lateGap: "20",
      product: "AB603893",
      directDate: "24/09/2021",
      uf: "SP",
    },
    {
      id: 4,
      type: "E-mail",
      paramName: "Param4",
      lateGap: "20",
      product: "AB608514",
      directDate: "24/09/2021",
      uf: "PA",
    },
    {
      id: 5,
      type: "E-mail",
      paramName: "Param5",
      lateGap: "365",
      product: "AB608292",
      directDate: "12/09/2021",
      uf: "AM",
    },
  ];

  return (
    <Layout id="param">
      <Row>
        <h1>Parametrização de régua de cobrança</h1>
      </Row>

      <Row className="mb-4 mt-2">
        <Col md={1} className="param-input-group mr-4 pl-2">
          <Row>
            <Form.Check
              label="Envio SMS"
              value="sms"
              name="sendType"
              type="radio"
            />
          </Row>
          <Row>
            <Form.Check
              label="Envio Email"
              value="email"
              name="sendType"
              type="radio"
            />
          </Row>
        </Col>
        <Col md={11} className="d-flex justify-content-between">
          <Col style={{ marginRight: "10px", maxWidth: "500px" }}>
            <p style={{ margin: "0", fontWeight: "bold" }}>Nome do Parâmetro</p>
            <div style={{ marginRight: "10px" }}>
              <InputGroup>
                <FormControl
                  placeholder="Insira um nome"
                  aria-label="nome"
                  aria-describedby="basic-addon1"
                  value={paramName}
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
                  value={lateGap}
                  aria-describedby="basic-addon1"
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
                value={directDate}
                className="caixa mr-1"
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
                value={uf}
                placeholder={<div>Selecione</div>}
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
              <Button className="button"> Salvar </Button>
            </div>
          </Col>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Table bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Tipo da Regra</th>
                <th>Nome do Parâmetro</th>
                <th>Faixa de Atraso</th>
                <th>Produto</th>
                <th>Direcionamento</th>
                <th>UF</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => {
                return (
                  <tr>
                    <td>{row.id}</td>
                    <td>{row.type}</td>
                    <td>{row.paramName}</td>
                    <td>
                      {row.lateGap} {row.lateGap === "01" ? "dia" : "dias"}
                    </td>
                    <td>{row.product}</td>
                    <td>{row.directDate}</td>
                    <td>{row.uf}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Layout>
  );
};
