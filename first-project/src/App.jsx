import React from 'react';
import './App.css';
import './reset.css';
import data from './fma-data';

import { CharacterCards } from './components/CharacterCards';
import { CharacterRatings } from './components/CharacterRatings';
import { Header } from './components/Header';




function App() {
  return (
    <>
      <Header/>
      <CharacterRatings/>
      <CharacterCards characters={data}/>
    </>
    
 
  );
}

export default App;
