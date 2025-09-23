import { useState, useEffect } from 'react';
import { Alert, Button } from 'react-bootstrap';

const LoadingAlert = ({ show, onClose }) => {
  const [timerExpired, setTimerExpired] = useState(false);

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setTimerExpired(true);
        onClose();
      }, 20000);

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show && timerExpired) return null;

  return (
    <Alert
      variant="info"
      show={show}
      onClose={onClose}
      dismissible
      className="loading-alert position-fixed top-50 start-50 translate-middle mt-4"
      style={{
        zIndex: 1050,
        width: '300px',
        textAlign: 'center',
      }}
    >
      <Alert.Heading>Ciao</Alert.Heading>
      <p>
        REsponsive, searchbar funzionante sia nella nav dentro l'hamburger sia
        nell aside con alert e caricamento funzionante
      </p>
      <Button variant="link" onClick={onClose} className="text-decoration-none">
        Chiudi
      </Button>
    </Alert>
  );
};

export default LoadingAlert;
