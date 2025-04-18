import { Container, Row, Col, Card } from 'react-bootstrap';
import { ChevronRight } from 'react-bootstrap-icons';

const Altro = () => {
  return (
    <Container className="bg-black text-white py-4">
      <h4 className="mb-4">Altro da Esplorare</h4>

      <Row className="g-3">
        {/* Card 1 */}
        <Col xs={12} md={4}>
          <Card className="bg-dark text-white border-0 d-flex align-items-center">
            <Card.Body className="d-flex justify-content-between align-items-center w-100">
              <div className="flex-grow-1" style={{ color: '#f65769' }}>
                Esplora per Genere
              </div>
              <ChevronRight size={20} color="#f65769" />
            </Card.Body>
          </Card>
        </Col>

        {/* Card 2 */}
        <Col xs={12} md={4}>
          <Card className="bg-dark text-white border-0 d-flex align-items-center">
            <Card.Body className="d-flex justify-content-between align-items-center w-100">
              <div className="flex-grow-1" style={{ color: '#f65769' }}>
                Decenni
              </div>
              <ChevronRight size={20} color="#f65769" />
            </Card.Body>
          </Card>
        </Col>

        {/* Card 3 */}
        <Col xs={12} md={4}>
          <Card className="bg-dark text-white border-0 d-flex align-items-center">
            <Card.Body className="d-flex justify-content-between align-items-center w-100">
              <div className="flex-grow-1" style={{ color: '#f65769' }}>
                Attività e stati d'animo
              </div>
              <ChevronRight size={20} color="#f65769" />
            </Card.Body>
          </Card>
        </Col>

        {/* Card 4 */}
        <Col xs={12} md={4}>
          <Card className="bg-dark text-white border-0 d-flex align-items-center">
            <Card.Body className="d-flex justify-content-between align-items-center w-100">
              <div className="flex-grow-1" style={{ color: '#f65769' }}>
                Worldwide
              </div>
              <ChevronRight size={20} color="#f65769" />
            </Card.Body>
          </Card>
        </Col>

        {/* Card 5 */}
        <Col xs={12} md={4}>
          <Card className="bg-dark text-white border-0 d-flex align-items-center">
            <Card.Body className="d-flex justify-content-between align-items-center w-100">
              <div className="flex-grow-1" style={{ color: '#f65769' }}>
                Classifiche
              </div>
              <ChevronRight size={20} color="#f65769" />
            </Card.Body>
          </Card>
        </Col>

        {/* Card 6 */}
        <Col xs={12} md={4}>
          <Card className="bg-dark text-white border-0 d-flex align-items-center">
            <Card.Body className="d-flex justify-content-between align-items-center w-100">
              <div className="flex-grow-1" style={{ color: '#f65769' }}>
                Audio spaziale
              </div>
              <ChevronRight size={20} color="#f65769" />
            </Card.Body>
          </Card>
        </Col>

        {/* Card 7 */}
        <Col xs={12} md={4}>
          <Card className="bg-dark text-white border-0 d-flex align-items-center">
            <Card.Body className="d-flex justify-content-between align-items-center w-100">
              <div className="flex-grow-1" style={{ color: '#f65769' }}>
                Video musicali
              </div>
              <ChevronRight size={20} color="#f65769" />
            </Card.Body>
          </Card>
        </Col>

        {/* Card 8 */}
        <Col xs={12} md={4}>
          <Card className="bg-dark text-white border-0 d-flex align-items-center">
            <Card.Body className="d-flex justify-content-between align-items-center w-100">
              <div className="flex-grow-1" style={{ color: '#f65769' }}>
                Nuovi artisti
              </div>
              <ChevronRight size={20} color="#f65769" />
            </Card.Body>
          </Card>
        </Col>

        {/* Card 9 */}
        <Col xs={12} md={4}>
          <Card className="bg-dark text-white border-0 d-flex align-items-center">
            <Card.Body className="d-flex justify-content-between align-items-center w-100">
              <div className="flex-grow-1" style={{ color: '#f65769' }}>
                Hit del passato
              </div>
              <ChevronRight size={20} color="#f65769" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Altro;
