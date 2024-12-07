import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EmployeeStats from '../components/EmployeeStats';

const Stats = () => (
  <Container>
    <Row className="my-4">
      <Col>
        <h1>Estadísticas</h1>
      </Col>
    </Row>
    <Row>
      <Col>
        <EmployeeStats />
      </Col>
    </Row>
  </Container>
);

export default Stats;
