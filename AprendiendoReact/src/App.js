import React from 'react';
import './assets/css/App.css';

// Importar componentes
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
/* import Peliculas from './components/Peliculas';
import SeccionPruebas from './components/SeccionPruebas'; */
import Router from './Router';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Slider title="Bienvenido al Curso de React" btn="Ir al blog"></Slider>
      <div className="center">
        <Router></Router>
        {/*
          <Peliculas></Peliculas>
        */}

        <Sidebar></Sidebar>
        <div className="clearfix"></div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
