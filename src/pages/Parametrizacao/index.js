import React from "react";
import { Button, Col, Form, Table, InputGroup, Row } from "react-bootstrap";
import Select from "react-select";
import Layout from "../../components/Layout";
import "./styles.scss";

export const Parametrizacao = () => {
  const productList = [
    { value: "prod1", label: "Produto 1" },
    { value: "prod2", label: "Produto 2" },
    { value: "prod3", label: "Produto 3" },
  ];
  const ufList = [
    { value: "prod1", label: "Produto 1" },
    { value: "prod2", label: "Produto 2" },
    { value: "prod3", label: "Produto 3" },
  ];

  return (
    <Layout>
      <Row>
        <h1>Parametrização de régua de cobrança</h1>
      </Row>

      <Row className="mb-4 mt-2">
        <Col md={1} className="param-input-group">
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
          <Col style={{ marginRight: "10px" }}>
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
            }}
          >
            <p style={{ margin: "0", fontWeight: "bold" }}>UF</p>
            <div
              style={{
                alignSelf: "self-end",
              }}
            >
              <Select className="caixa" options={ufList} />
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

      <Table striped borderless hover size="sm">
        <thead className="thead">
          <tr>
            <th>Data Início</th>
            <th>Data Final</th>
            <th>Produto</th>
            <th>Data de Direcionamento</th>
            <th>UF</th>
          </tr>
        </thead>

        <tbody className="tbody">
          <tr>
            <td>10/10/2020</td>
            <td>11/11/2021</td>
            <td>AB608270</td>
            <td>11/11/2021</td>
            <td>SP</td>
          </tr>
          <tr>
            <td>10/10/2020</td>
            <td>11/11/2021</td>
            <td>XXXXXXXX</td>
            <td>11/11/2021</td>
            <td>RJ</td>
          </tr>

        </tbody>
      </Table>

      </Row>

    </Layout>
  );
};
