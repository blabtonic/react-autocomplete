import React from 'react';
import './App.css';
import Autocomplete from './components/Autocomplete';

function App() {
  return (
    <div className="App">
      <h1>Autocomplete Search</h1>
      <h3>Type Product here</h3>
      <Autocomplete></Autocomplete>
    </div>
  );
}

export default App;
