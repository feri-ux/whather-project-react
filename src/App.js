import './App.css';
import Weather from './Weather';
import React, { useLayoutEffect, useState } from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="tehran"/>
      </header>
    </div>
  );
}

export default App;
