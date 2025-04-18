import React, { useState } from 'react';
import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Form,
  Button,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux'; // Usa useDispatch per inviare azioni
import { fetchNewReleases } from '../actions/MusicAction'; // Importa l'azione Redux per la ricerca

function AppNavbar() {
  const [searchTerm, setSearchTerm] = useState(''); // Stato locale per il termine di ricerca
  const dispatch = useDispatch(); // Hook per dispatchare le azioni

  // Gestisci il submit del form (invio della ricerca)
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Impedisce l'azione predefinita del form (reload della pagina)
    if (searchTerm.trim()) {
      // Se c'è un termine di ricerca valido
      dispatch(fetchNewReleases(searchTerm)); // Dispatcha l'azione con il termine di ricerca
    }
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
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
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Barra di ricerca */}
          <Form className="d-flex" onSubmit={handleSearchSubmit}>
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
  );
}

export default AppNavbar;
