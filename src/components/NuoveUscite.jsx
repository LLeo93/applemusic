import { useEffect } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewReleases } from '../actions/MusicAction';

function NuoveUscite() {
  const dispatch = useDispatch();

  const musicState = useSelector((state) => state.music);
  const { loading, newReleases, error } = musicState;

  const searchTerm = useSelector((state) => state.searchTerm);

  useEffect(() => {
    if (searchTerm) {
      dispatch(fetchNewReleases(searchTerm));
    }
  }, [dispatch, searchTerm]);

  return (
    <Container className="text-light mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">Nuove uscite</h5>
        <span className="text-secondary">{'>'}</span>
      </div>

      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="light" />
        </div>
      ) : error ? (
        <div className="text-danger text-center">{error}</div>
      ) : (
        <Row className="g-3">
          {newReleases.map((track, index) => (
            <Col xs={6} md={4} key={index}>
              <Card className="bg-black text-light border-0 p-2 h-100 position-relative">
                <div className="d-flex flex-column align-items-start justify-content-between h-100">
                  <div
                    className="w-100 rounded d-flex align-items-center justify-content-center position-relative"
                    style={{ height: '200px' }}
                  >
                    <div className="position-absolute top-0 start-0 end-0 bottom-0 overflow-hidden">
                      <img
                        src={track.album.cover}
                        alt={track.title}
                        className="w-100 h-100 object-cover"
                      />
                    </div>
                  </div>

                  <div className="mt-2">
                    <div className="fw-semibold small">{track.title}</div>

                    <div className="text-muted very-small-text">
                      {track.artist.name}
                    </div>
                  </div>
                </div>

                <div
                  className="position-absolute top-0 end-0 bg-secondary p-2 d-flex justify-content-center align-items-center"
                  style={{
                    zIndex: 999,
                    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
                    marginTop: '10px',
                    marginRight: '10px',
                    padding: '3px 15px',
                  }}
                >
                  <span
                    className="text-white fw-bold"
                    style={{ fontSize: '16px' }}
                  >
                    E
                  </span>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default NuoveUscite;
