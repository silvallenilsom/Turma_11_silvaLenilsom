import React from 'react';
import './App.css';
import Pokedex from './Pokedex';
import pokemons from './data';
// import Image from './Image';

function App() {
  return (
    <div className="App">
      <Pokedex pokemons={ pokemons } />
    </div>
  );
}

export default App;
