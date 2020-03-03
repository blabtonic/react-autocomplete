import React from 'react';
import './App.css';
import Autocomplete from './components/Autocomplete';
import AutoSuggestion from './components/AutoSuggestion';

function App() {
  return (
    <div className="App">
      <h1>Autocomplete Search</h1>
      <h3>Type Product here</h3>
      <Autocomplete suggestions={["DL4MED", "T4M/DEEB","MINNE9593","53/39NDJU5G","54/39NDJU5G","LMED9434","LMED9434A","LMED9434B","LMED9434C","LMED9434D",]}></Autocomplete>
      <br/>
      <AutoSuggestion></AutoSuggestion>
    </div>
  );
}

export default App;
