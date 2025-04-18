import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewReleases } from '../actions/MusicAction'; // 👈 Adatta il path
import { FormControl, InputGroup } from 'react-bootstrap';
import { FaHome, FaBroadcastTower, FaThLarge } from 'react-icons/fa';
import { Alert } from 'react-bootstrap';

function Sidebar() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const searchSuccess = useSelector((state) => state.music.searchSuccess);

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (searchSuccess) {
      setShowAlert(true);
      const timer = setTimeout(() => setShowAlert(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [searchSuccess]);

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter' && searchTerm.trim()) {
      dispatch(fetchNewReleases(searchTerm));
      console.log('Sidebar ricerca:', searchTerm);
    }
  };

  return (
    <aside
      className="d-none d-lg-block"
      style={{
        width: '270px',
        backgroundColor: '#343a40',
        height: '100vh',
        paddingTop: '20px',
        color: 'white',
        paddingLeft: '20px',
      }}
    >
      <div className="text-center mb-4">
        <img
          src="/logos/music.svg"
          alt="Logo Apple"
          width="75"
          height="50"
          style={{ filter: 'invert(1)' }}
        />
      </div>

      {/* ✅ ALERT */}
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

      {/* Barra di ricerca */}
      <InputGroup className="mb-3" style={{ maxWidth: '180px' }}>
        <FormControl
          placeholder="Cerca..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearchSubmit}
          style={{ backgroundColor: '#2c2f36', color: 'white' }}
        />
      </InputGroup>

      <div className="d-flex flex-column">
        <div
          className="d-flex align-items-center mb-3"
          style={{ color: '#f65769' }}
        >
          <FaHome size={24} className="me-2" />
          <span>Home</span>
        </div>
        <div
          className="d-flex align-items-center mb-3"
          style={{ color: '#f65769' }}
        >
          <FaThLarge size={24} className="me-2" />
          <span>Novità</span>
        </div>
        <div
          className="d-flex align-items-center mb-3"
          style={{ color: '#f65769' }}
        >
          <FaBroadcastTower size={24} className="me-2" />
          <span>Radio</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
