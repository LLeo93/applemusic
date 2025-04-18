import { useState } from 'react';
import { Form, InputGroup, FormControl } from 'react-bootstrap';
import { FaHome, FaBroadcastTower, FaThLarge } from 'react-icons/fa';

function Sidebar() {
  const [searchTerm, setSearchTerm] = useState('');

  // Funzione per gestire la ricerca (premendo invio)
  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter' && searchTerm.trim()) {
      console.log('Cerca:', searchTerm);
      // Puoi aggiungere la logica per dispatchare l'azione qui
    }
  };

  return (
    <aside
      className="d-none d-lg-block" // Nasconde la sidebar su schermi piccoli
      style={{
        width: '270px',
        backgroundColor: '#343a40',
        height: '100vh', // Imposta l'altezza della sidebar su 100vh per farla estendere lungo tutta la pagina
        paddingTop: '20px',
        color: 'white',
        paddingLeft: '20px',
      }}
    >
      {/* Logo Apple in alto */}
      <div className="text-center mb-4">
        <img
          src="/logos/music.svg" // Cambia con il tuo logo Apple
          alt="Logo Apple"
          width="75"
          height="50"
          style={{ filter: 'invert(1)' }}
        />
      </div>

      {/* Barra di ricerca */}
      <InputGroup className="mb-3" style={{ maxWidth: '180px' }}>
        <FormControl
          placeholder="Cerca..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearchSubmit} // Attiviamo la ricerca con Enter
          style={{ backgroundColor: '#2c2f36', color: 'white' }}
        />
      </InputGroup>

      {/* Voci di navigazione */}
      <div className="d-flex flex-column">
        {/* Home */}
        <div
          className="d-flex align-items-center mb-3"
          style={{ color: '#f65769' }}
        >
          <FaHome size={24} className="me-2" />
          <span>Home</span>
        </div>

        {/* Novità */}
        <div
          className="d-flex align-items-center mb-3"
          style={{ color: '#f65769' }}
        >
          <FaThLarge size={24} className="me-2" />
          <span>Novità</span>
        </div>

        {/* Icona Radio */}
        <div
          className="d-flex align-items-center mb-3"
          style={{ color: '#f65769' }}
        >
          <FaBroadcastTower size={24} className="me-2" />
          <span>Icona Radio</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
