import React from 'react'; // Importa React, necessario per definire il componente
import { Container, Row, Col } from 'react-bootstrap'; // Importa i componenti da React Bootstrap

const StaticFooter = () => {
  return (
    <footer className="bg-black text-white py-3">
      <Container fluid className="mt-2 bg-black">
        <Row>
          <Col xs={12} className="text-center">
            <p className="mb-2">Italia English (UK)</p>
            <p className="mb-2">
              Copyright &copy; {new Date().getFullYear()} Apple Inc. Tutti i
              diritti riservati.
            </p>
            <p className="mb-2">
              Condizioni dei servizi Internet Apple Music e privacy Avviso sui
              cookie
            </p>
            <p className="mb-0">Supporto Feedback</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default StaticFooter;
