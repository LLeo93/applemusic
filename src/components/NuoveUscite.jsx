import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Badge, Spinner } from 'react-bootstrap';
import { MusicNote } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewReleases } from '../actions/MusicAction';

function NuoveUscite() {
  const dispatch = useDispatch();

  // Accedi ai dati di Redux
  const musicState = useSelector((state) => state.music);
  const { loading, newReleases, error } = musicState;

  // Recupera i dati dalla barra di ricerca (termine di ricerca globale)
  const searchTerm = useSelector((state) => state.searchTerm); // Qui devi aggiungere lo stato searchTerm nel tuo store

  useEffect(() => {
    if (searchTerm) {
      dispatch(fetchNewReleases(searchTerm)); // Esegui la ricerca quando il termine cambia
    }
  }, [dispatch, searchTerm]); // Rilancia quando il termine di ricerca cambia

  return (
    <Container className="text-light mt-4">
      {/* Titolo con freccia */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">Nuove uscite</h5>
        <span className="text-secondary">{'>'}</span>
      </div>

      {/* Sezione per gestire l'errore o il caricamento */}
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
              <Card className="bg-dark text-light border-0 p-2 h-100">
                <div className="d-flex flex-column align-items-start justify-content-between h-100">
                  {/* Immagine del brano o album */}
                  <div
                    className="w-100 bg-secondary rounded d-flex align-items-center justify-content-center"
                    style={{ height: '100px' }}
                  >
                    {/* Usa l'immagine dell'album */}
                    <img
                      src={track.album.cover}
                      alt={track.title}
                      style={{
                        maxWidth: '80px',
                        maxHeight: '80px',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                  <div className="mt-2">
                    <div className="fw-semibold small">{track.title}</div>
                    <div className="text-muted very-small-text">
                      {track.artist.name}
                    </div>
                  </div>
                </div>
                <Badge
                  bg="secondary"
                  className="position-absolute top-0 end-0 m-2"
                >
                  E
                </Badge>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default NuoveUscite;
