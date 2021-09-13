import React from "react";
import { Button, Col, Form, InputGroup, Row, Table } from "react-bootstrap";
import Select from "react-select";
import Layout from "../../components/Layout";
import "./styles.scss";

export const Parametrizacao = () => {
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
      beginDate: "03/09/2021",
      endDate: "04/09/2021",
      product: "AB608293",
      directDate: "24/09/2021",
      uf: "SP",
    },
    {
      id: 2,
      beginDate: "01/09/2021",
      endDate: "02/09/2021",
      product: "AB608514",
      directDate: "21/09/2021",
      uf: "BA",
    },
    {
      id: 3,
      beginDate: "03/09/2021",
      endDate: "04/09/2021",
      product: "AB603893",
      directDate: "24/09/2021",
      uf: "SP",
    },
    {
      id: 4,
      beginDate: "1/09/2021",
      endDate: "02/09/2021",
      product: "AB608514",
      directDate: "24/09/2021",
      uf: "PA",
    },
    {
      id: 5,
      beginDate: "02/09/2021",
      endDate: "03/09/2021",
      product: "AB608292",
      directDate: "12/09/2021",
      uf: "AM",
    },
    {
      id: 6,
      beginDate: "02/09/2021",
      endDate: "03/09/2021",
      product: "AB608292",
      directDate: "12/09/2021",
      uf: "RR",
    },
    {
      id: 7,
      beginDate: "01/09/2021",
      endDate: "05/09/2021",
      product: "AB238293",
      directDate: "22/09/2021",
      uf: "PA",
    },
    {
      id: 8,
      beginDate: "01/09/2021",
      endDate: "05/09/2021",
      product: "AB238200",
      directDate: "22/09/2021",
      uf: "RO",
    },
    {
      id: 9,
      beginDate: "08/09/2021",
      endDate: "09/09/2021",
      product: "AB238299",
      directDate: "22/09/2021",
      uf: "MG",
    },
    {
      id: 10,
      beginDate: "08/09/2021",
      endDate: "09/09/2021",
      product: "AB238291",
      directDate: "12/09/2021",
      uf: "RJ",
    },
  ];

  return (
    <Layout>
      <Row>
        <h1>Parametrização de régua de cobrança</h1>
      </Row>

      <Row className="mb-4 mt-2">
        <Col md={1} className="param-input-group mr-4">
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
            <p style={{ margin: "0", fontWeight: "bold" }}>Faixa de atraso</p>
            <div className="d-flex justify-content-between">
              <div style={{ marginRight: "10px" }}>
                <p style={{ margin: "0" }}>Data Início</p>
                <Form.Control type="date" name="date-begin" className="caixa mr-1" />
              </div>
              <div>
                <p style={{ margin: "0" }}>Data Final</p>
                <Form.Control type="date" name="date-end" className="caixa" />
              </div>
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
              <Select className="caixa" options={productList} />
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
              <Form.Control type="date" name="date-direc" className="caixa mr-1" />
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
              <Select options={ufList} placeholder={<div>Selecione</div>} />
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
              <Button className="button"> Buscar </Button>
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
                <th>Data Início</th>
                <th>Data Final</th>
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
                    <td>{row.beginDate}</td>
                    <td>{row.endDate}</td>
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
