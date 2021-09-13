import React from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import Select from "react-select";
import Layout from "../../components/Layout";
import "./styles.scss";

export const Envio = () => {
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
        <Col md={11} className="d-flex justify-content-between">
          <Col style={{ marginRight: "10px" }}>
            <p style={{ margin: "0", fontWeight: "bold" }}>Faixa de atraso</p>
            <div className="d-flex justify-content-between">
              <div style={{ marginRight: "10px" }}>
                <p style={{ margin: "0" }}>Data Início</p>
                <Form.Control type="date" name="date-begin" className="mr-1" />
              </div>
              <div>
                <p style={{ margin: "0" }}>Data Final</p>
                <Form.Control type="date" name="date-end" />
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
              <Select options={productList} />
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
              <Form.Control type="date" name="date-direc" className="mr-1" />
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
              <Select options={ufList} />
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
              <Button> Buscar </Button>
            </div>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col md={12}>1</Col>
      </Row>
    </Layout>
  );
};
