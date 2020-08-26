import React from 'react';
import './App.css';

import CardList from './components/CardList'

import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Magic the Gathering</h1>
      </header>
      <div>
        <h2>Card of the Day</h2>
        <Name>Lurrus of the Dream-Den</Name>
          <Image src='https://img.scryfall.com/cards/normal/front/5/a/5ad36fb2-c44e-4085-ba0d-54277841ad3a.jpg?1588373355'/>
        <h1>Magic Card Collection</h1>
        <CardList/>
      </div>
    </div>
  );
}

export default App;

const Name = styled.h2 `
  font-size: 1.5rem;
  border: .2rem solid black;
  border-radius: .5rem;
  background-color: lightgray;
`

const Image = styled.img`
  height: 20rem;
  border: .3rem solid slategray;
  border-radius: 1.5rem;
`