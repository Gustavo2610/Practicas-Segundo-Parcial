import React, { useState } from 'react';
import ComponenteMsj from './componentes/ComponenteMsg';
import AgeCalculator from './componentes/AgeCalculator';
import RickAndMortyComponent from './componentes/RickAndMortyComponent';
import PokeApi from './componentes/componentesPoke';

import './App.css';

function App() {
  const[isMsjModueleEnabled, setShowComponentMsg] = useState(false);
  const[isAgeModueleEnabled, setgeModueleEnabled] = useState(false);
  const[isRickAndMortyEnabled, setRickAndMortyEnabled] = useState(false);
  const[isPokeApiEnabled, setPokeApiEnabled] = useState(false);

  const toggleMsjModule = () => {
    setShowComponentMsg(!isMsjModueleEnabled);
  }
  const toggleAgeModule = () => {
    setgeModueleEnabled(!isAgeModueleEnabled);
  }
  const toggleRickAndMorty = () => {
    setRickAndMortyEnabled(!isRickAndMortyEnabled);
  }

  const togglePokeApi = () => {
    setPokeApiEnabled(!isPokeApiEnabled);
  }

  return (
    <div className="Container">
      <div className="card">
        <h1 className='title'>Hola mundo, bienvenidos a react</h1>
        <center>
          <button className='button' onClick={toggleMsjModule}>
            {isMsjModueleEnabled
             ? 'Deshabilitar modulo mensaje' 
             : 'Habilitar modulo mensaje'}
          </button>
          <button className='button' onClick={toggleAgeModule}>
            {isAgeModueleEnabled
             ? 'Deshabilitar modulo edad canina' 
             : 'Habilitar modulo edad canina'}
          </button>
          <button className='button' onClick={toggleRickAndMorty}>
            {isRickAndMortyEnabled
              ? 'Deshabilitar modulo Rick and Morty' 
              : 'Habilitar modulo Rick and Morty'}
          </button>
          <br /><br />
          <button className='button' onClick={togglePokeApi}>
            {isPokeApiEnabled
              ? 'Deshabilitar modulo Pokemon' 
              : 'Habilitar modulo Pokemon'}
          </button>
          {isPokeApiEnabled && <PokeApi />}
          {isRickAndMortyEnabled && <RickAndMortyComponent />}
          {isAgeModueleEnabled && <AgeCalculator />}
          {isMsjModueleEnabled && <ComponenteMsj />}
        </center>
        </div>
    </div>
  );
}

export default App;

