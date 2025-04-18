import React, { useState, useEffect } from 'react';
import { Navbar, Container, Form, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'; // Usa useDispatch per inviare azioni
import { fetchNewReleases } from '../actions/MusicAction'; // Importa l'azione Redux per la ricerca
import {
  FaBackward,
  FaPlay,
  FaForward,
  FaRedo,
  FaVolumeUp,
  FaUser,
} from 'react-icons/fa';

function AppNavbar() {
  const [searchTerm, setSearchTerm] = useState(''); // Stato locale per il termine di ricerca
  const [showAlert, setShowAlert] = useState(false); // Stato per gestire la visibilità dell'alert
  const dispatch = useDispatch(); // Hook per dispatchare le azioni
  const searchSuccess = useSelector((state) => state.music.searchSuccess); // Ottieni lo stato di successo della ricerca

  // Gestisci il submit del form (invio della ricerca)
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Impedisce l'azione predefinita del form (reload della pagina)
    if (searchTerm.trim()) {
      // Se c'è un termine di ricerca valido
      dispatch(fetchNewReleases(searchTerm)); // Dispatcha l'azione con il termine di ricerca
    }
  };

  // Gestisci l'alert quando la ricerca ha successo
  useEffect(() => {
    if (searchSuccess) {
      setShowAlert(true);
      const timer = setTimeout(() => setShowAlert(false), 1500); // Auto-hide
      return () => clearTimeout(timer);
    }
  }, [searchSuccess]);

  return (
    <>
      {/* Navbar superiore con alert */}
      <Navbar
        expand="lg"
        className="py-3 px-4 d-none d-md-flex justify-content-between align-items-center"
        style={{ backgroundColor: '#212529' }}
      >
        <div className="d-flex align-items-center gap-3">
          <FaBackward color="white" size={20} />
          <FaPlay color="white" size={20} />
          <FaForward color="white" size={20} />
          <FaRedo color="white" size={20} />
        </div>

        <div className="d-flex align-items-center gap-4">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              backgroundColor: '#343a40',
              padding: '6px 16px',
              borderRadius: '999px',
            }}
          >
            <img
              src="/logos/music.svg" // cambia se necessario
              alt="Logo Apple"
              height={24}
              style={{ filter: 'invert(1)' }}
            />
          </div>

          <div className="d-flex align-items-center gap-2">
            <FaVolumeUp color="white" size={18} />
            <div
              style={{
                width: '100px',
                height: '5px',
                backgroundColor: 'white',
                borderRadius: '10px',
              }}
            >
              {/* Simulazione barra progressiva */}
              <div
                style={{
                  width: '40%',
                  height: '100%',
                  backgroundColor: '#f65769',
                  borderRadius: '10px',
                }}
              />
            </div>
          </div>
        </div>

        <div
          className="d-flex align-items-center gap-2 px-3 py-2"
          style={{
            backgroundColor: '#dc3545',
            borderRadius: '20px',
            cursor: 'pointer',
          }}
        >
          <FaUser color="white" />
          <span className="text-white fw-bold">Accedi</span>
        </div>
      </Navbar>

      {/* Mostra alert quando la ricerca ha successo */}
      {showAlert && (
        <Alert
          variant="success"
          onClose={() => setShowAlert(false)}
          dismissible
          className="p-2 py-1 mb-3"
        >
          Ricerca effettuata con successo!
        </Alert>
      )}

      {/* Navbar mobile con ricerca */}
      <Navbar expand="lg" bg="dark" variant="dark" className="d-md-none">
        <Container>
          {/* Hamburger a sinistra */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Brand con logo */}
          <Navbar.Brand href="#home" className="text-white">
            <img
              src="/logos/music.svg"
              alt="Logo"
              width="75"
              height="50"
              className="d-inline-block align-top text-white"
              style={{ filter: 'invert(1)' }}
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">Accedi</Navbar.Brand>

          {/* Menu espanso */}
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Barra di ricerca visibile solo su dispositivi < lg */}
            <Form className="d-flex d-lg-none" onSubmit={handleSearchSubmit}>
              <Form.Control
                type="text"
                placeholder="Cerca..."
                name="search"
                value={searchTerm} // Imposta il valore del campo di ricerca
                onChange={(e) => setSearchTerm(e.target.value)} // Aggiorna il termine di ricerca
                className="me-2"
              />
              <Button type="submit" variant="outline-light">
                Cerca
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavbar;
