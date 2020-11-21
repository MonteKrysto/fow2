import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './layouts/Header';

import './assets/main.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Header>
      </div>
    </BrowserRouter>
  );
}

export default App;
