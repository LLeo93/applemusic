import React, { useState, useEffect } from 'react';
import { Alert, Button } from 'react-bootstrap';
import './LoadingAlert.css';

const LoadingAlert = ({ show, onClose }) => {
  const [timerExpired, setTimerExpired] = useState(false);

  // Impostiamo il timer per far sparire l'alert dopo 20 secondi
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setTimerExpired(true); // Impostiamo il timer per nascondere l'alert
        onClose(); // Chiude l'alert automaticamente
      }, 20000);

      // Cleanup del timer
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show && timerExpired) return null; // Non mostrare l'alert dopo che è scomparso

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
      <Alert.Heading>Ciao Stefano</Alert.Heading>
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
