import React from 'react';
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router";
import './App.css';
import Home from "./components/contents/home";

function App() {
  return (
    <div>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/"  element={<Home />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
