import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import EmployeeStats from '../components/EmployeeStats';

const Dashboard = () => (
  <Container>
    <Row className="my-4">
      <Col>
        <h1>Panel de Control</h1>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Resumen General</Card.Title>
            <Card.Text>
              Bienvenido al sistema de control de acceso a porterías.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <EmployeeStats />
      </Col>
    </Row>
  </Container>
);

export default Dashboard;
