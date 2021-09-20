import React, { useState } from "react";
import AmFunnelChart from "./amFunnelChart";
import { Row, Button, Form, Col, Card } from "react-bootstrap";
import Layout from "../../components/Layout";

export const Funil = () => {
  const [filterDate, setFilterDate] = useState();

  const funnelData = [
    {
      name: "Acionamentos",
      value: 60000,
    },
    {
      name: "Alô",
      value: 45362,
    },
    {
      name: "CPC",
      value: 21453,
    },
    {
      name: "CPC-A",
      value: 12239,
    },
  ];

  return (
    <Layout>
      <Row>
        <h3>Funil de Acionamento</h3>
      </Row>

      <Form>
        <Row>
          <Col
            style={{
              marginRight: "10px",
              maxWidth: "200px",
            }}
          >
            <span style={{ margin: "0", fontWeight: "bold" }}>Data</span>

            <div>
              <Form.Control
                type="date"
                name="date-funnel"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
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
                Filtar
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="p-3 mt-3" style={{ height: "25em" }}>
              <AmFunnelChart
                id="funnelchart"
                chartDiv="funnelchart"
                data={funnelData}
              />
            </Card>
          </Col>
        </Row>
      </Form>
    </Layout>
  );
};
