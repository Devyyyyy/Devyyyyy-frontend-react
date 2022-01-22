import React from 'react';
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router";
import './App.css';
import Community from "./components/contents/community";
import Home from "./components/contents/home";
import DevFinder from "./components/contents/devFinder";
import CustomRoutes from "./components/progressBar/customRoutes";

function App() {
    return (
    <div className="App">
        <Router>
            <Navbar />
            <CustomRoutes>
                <Route path="/"  element={<Home />} />
                <Route path="/community"  element={<Community />}/>
                <Route path="/devFinder" element={<DevFinder />}/>
            </CustomRoutes>
        </Router>
    </div>
  );
}

export default App;
