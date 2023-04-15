import './App.css';
import Weather from './Weather';
import React, { useLayoutEffect, useState } from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
      </header>
    </div>
  );
}

export default App;
