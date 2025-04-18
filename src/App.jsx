import { useState } from 'react';
import AppNavbar from './components/NavBar.jsx';
import NovitaSection from './components/Novità.jsx';
import NuoveUscite from './components/NuoveUscite.jsx';
import StaticFooter from './components/StaticFooter';
import FooterX from './components/PlayerFooter.jsx';
import Altro from './components/Altro.jsx';
import Sidebar from './components/Sidebar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap CSS
import './App.css';

function App() {
  return (
    <div
      className="d-flex flex-column flex-md-row"
      style={{ minHeight: '100vh' }}
    >
      {/* Sidebar a sinistra (visibile solo su dispositivi >= md) */}
      <Sidebar />

      {/* Contenuto principale a destra */}
      <div
        className="flex-grow-1" // Usa flex-grow-1 per far occupare tutto lo spazio disponibile
        style={{
          padding: '20px',
          height: '100vh', // Imposta l'altezza del contenuto principale a 100vh
          marginLeft: '0', // Rimuoviamo il margine a sinistra quando la sidebar non è visibile
          overflowY: 'auto', // Assicurati che il contenuto abbia uno scroll verticale se necessario
        }}
      >
        <AppNavbar />
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
