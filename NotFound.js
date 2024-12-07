import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const NotFound = () => (
  <Container className="text-center mt-5">
    <Row>
      <Col>
        <h1>404</h1>
        <p>Página no encontrada.</p>
      </Col>
    </Row>
  </Container>
);

export default NotFound;
