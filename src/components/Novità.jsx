import { Container, Row, Col, Card } from 'react-bootstrap';
import { ChevronRight } from 'react-bootstrap-icons';

function NovitaSection() {
  return (
    <Container className="mt-4 bg-dark text-light">
      {/* Titolo con bordo */}
      <h4 className="mb-2">Novità</h4>
      <hr className="border border-secondary-subtle opacity-50" />

      {/* Carosello di card */}
      <div className="overflow-hidden">
        <div className="d-flex gap-3 overflow-auto pb-3">
          {/* Card 1 */}
          <Card
            className="bg-dark text-light border-0"
            style={{ width: '50%', flex: '0 0 auto' }}
          >
            <Card.Body className="small">
              <Card.Text className="text-secondary">
                nuova stazione radio
              </Card.Text>
              <Card.Title className="text-light small">
                Rilassati, al resto ci pensiamo noi. Ascolta Apple Music Chill
              </Card.Title>
            </Card.Body>
            <Card.Img
              variant="bottom"
              src="/images/1a.png"
              style={{ width: '100%', height: '200px' }}
              alt="Novità 1"
            />
          </Card>

          {/* Card 2 */}
          <Card
            className="bg-dark text-light border-0"
            style={{ width: '50%', flex: '0 0 auto' }}
          >
            <Card.Body className="small">
              <Card.Text className="text-secondary">
                nuova stazione radio
              </Card.Text>
              <Card.Title className="text-light small">
                Ecco la nuova casa latina, ascoltatela pure voi sta roba, grazie
              </Card.Title>
            </Card.Body>
            <Card.Img
              variant="bottom"
              src="/images/1b.png"
              style={{ width: '100%', height: '200px' }}
              alt="Novità 2"
            />
          </Card>

          {/* Card 3 */}
          <Card
            className="bg-dark text-light border-0"
            style={{ width: '50%', flex: '0 0 auto' }}
          >
            <Card.Body className="small">
              <Card.Text className="text-secondary small">
                scopri le sonorità elettroniche
              </Card.Text>
              <Card.Title className="text-light small">
                Vibrazioni digitali per la tua mente
              </Card.Title>
            </Card.Body>
            <Card.Img
              variant="bottom"
              src="/images/1c.png"
              style={{ width: '100%', height: '200px' }}
              alt="Novità 3"
            />
          </Card>

          {/* Card 4 */}
          <Card
            className="bg-dark text-light border-0"
            style={{ width: '50%', flex: '0 0 auto' }}
          >
            <Card.Body className="small">
              <Card.Text className="text-secondary small">
                nuova playlist esclusiva
              </Card.Text>
              <Card.Title className="text-light small">
                Beat lenti e melodie sognanti
              </Card.Title>
            </Card.Body>
            <Card.Img
              variant="bottom"
              src="/images/2d.png"
              style={{ width: '100%', height: '200px' }}
              alt="Novità 4"
            />
          </Card>
        </div>
      </div>

      {/* Titolo con freccia */}
      <div className="d-flex justify-content-between align-items-center mt-4 mb-2">
        <h5 className="mb-0">Consigliati</h5>
        <ChevronRight size={20} />
      </div>

      {/* Tre card non-carousel */}
      <Row className="g-3">
        <Col xs={4}>
          <Card className="bg-dark text-light border-0">
            <Card.Img
              variant="top"
              src="/images/2a.png"
              style={{ width: '100%', height: 'auto' }}
              alt="Card 1"
            />
            <Card.Body className="p-2">
              <Card.Text className="text-secondary very-small-text m-0">
                pròlogo con abuello
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={4}>
          <Card className="bg-dark text-light border-0">
            <Card.Img
              variant="top"
              src="/images/2b.png"
              style={{ width: '100%', height: 'auto' }}
              alt="Card 2"
            />
            <Card.Body className="p-2">
              <Card.Text className="text-secondary very-small-text m-0">
                The Wanderer
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={4}>
          <Card className="bg-dark text-light border-0">
            <Card.Img
              variant="top"
              src="/images/2c.png"
              style={{ width: '100%', height: 'auto' }}
              alt="Card 3"
            />
            <Card.Body className="p-2">
              <Card.Text className="text-secondary very-small-text m-0">
                Micheal Bublè e Charlie qualcosa
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default NovitaSection;
