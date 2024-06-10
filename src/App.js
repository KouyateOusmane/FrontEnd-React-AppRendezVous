// src/App.js
import React from 'react';
import './App.css';
import ClientList from './components/ClientList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Microservice Application</h1>
        <ClientList />
      </header>
    </div>
  );
}

export default App;
