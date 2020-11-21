import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './layouts/Header'

import './assets/main.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
      </div>
    </BrowserRouter>
  );
}

export default App;
