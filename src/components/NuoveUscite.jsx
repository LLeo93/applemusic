import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewReleases } from '../actions/MusicAction';

function NuoveUscite() {
  const dispatch = useDispatch();

  // Accedi ai dati di Redux
  const musicState = useSelector((state) => state.music);
  const { loading, newReleases, error } = musicState;

  // Recupera i dati dalla barra di ricerca (termine di ricerca globale)
  const searchTerm = useSelector((state) => state.searchTerm);

  useEffect(() => {
    if (searchTerm) {
      dispatch(fetchNewReleases(searchTerm));
    }
  }, [dispatch, searchTerm]);

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
              <Card className="bg-black text-light border-0 p-2 h-100 position-relative">
                <div className="d-flex flex-column align-items-start justify-content-between h-100">
                  {/* Immagine del brano o album */}
                  <div
                    className="w-100 rounded d-flex align-items-center justify-content-center position-relative"
                    style={{ height: '200px' }}
                  >
                    {/* Contenitore per l'immagine senza bordo o sfondo */}
                    <div className="position-absolute top-0 start-0 end-0 bottom-0 overflow-hidden">
                      <img
                        src={track.album.cover}
                        alt={track.title}
                        className="w-100 h-100 object-cover"
                      />
                    </div>
                  </div>

                  <div className="mt-2">
                    {/* Titolo del brano */}
                    <div className="fw-semibold small">{track.title}</div>
                    {/* Nome dell'artista */}
                    <div className="text-muted very-small-text">
                      {track.artist.name}
                    </div>
                  </div>
                </div>

                {/* Wrapper per il badge con "E" - sempre visibile */}
                <div
                  className="position-absolute top-0 end-0 bg-secondary p-2 d-flex justify-content-center align-items-center"
                  style={{
                    zIndex: 999, // Assicurarsi che la "E" sia sopra tutto
                    boxShadow: '0 0 10px rgba(0,0,0,0.3)', // Aggiungi ombra per maggiore visibilità
                    marginTop: '10px', // Distanziare dalla parte superiore
                    marginRight: '10px', // Distanziare dalla parte destra
                    padding: '3px 15px', // Aumentare la larghezza, ridurre l'altezza
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
