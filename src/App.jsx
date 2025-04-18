import { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AppNavbar from './components/NavBar.jsx';
import NovitaSection from './components/Novità.jsx';
import NuoveUscite from './components/NuoveUscite.jsx';
import StaticFooter from './components/StaticFooter';
import FooterX from './components/PlayerFooter.jsx';
import Altro from './components/Altro.jsx';
import Sidebar from './components/Sidebar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LoadingAlert from './components/LoadingAlert.jsx';

function App() {
  const [showAlert, setShowAlert] = useState(true);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 20000);

      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  return (
    <div
      className="d-flex flex-column flex-md-row"
      style={{ minHeight: '100vh' }}
    >
      <Sidebar />
      <div
        className="flex-grow-1"
        style={{
          padding: '20px',
          height: '100vh',
          marginLeft: '0',
          overflowY: 'auto',
        }}
      >
        <AppNavbar />
        <LoadingAlert show={showAlert} onClose={handleCloseAlert} />
        <NovitaSection />
        <NuoveUscite />
        <Altro />
        <StaticFooter />
        <FooterX />
      </div>
    </div>
  );
}

export default App;
