import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import AppNavbar from './components/NavBar.jsx';
import NovitaSection from './components/Novità.jsx';
import NuoveUscite from './components/NuoveUscite.jsx';
import StaticFooter from './components/StaticFooter';
import FooterX from './components/PlayerFooter.jsx';
import Altro from './components/Altro.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap CSS
import './App.css';
function App() {
  return (
    <>
      <AppNavbar />
      <NovitaSection />
      <NuoveUscite />
      <Altro />
      <StaticFooter></StaticFooter>
      <FooterX />
    </>
  );
}

export default App;
