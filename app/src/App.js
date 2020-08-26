import React from 'react';
import './App.css';

import CardList from './components/CardList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Magic Card Collection</h1>
      </header>
      <div>
        <CardList/>
      </div>
    </div>
  );
}

export default App;
