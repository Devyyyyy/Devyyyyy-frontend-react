import React from 'react';
import logo from './assets/images/logo.svg';
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router";
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <Router>
            <Navbar />
        </Router>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
