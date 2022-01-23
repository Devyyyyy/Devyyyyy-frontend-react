import React from 'react';
import Navbar from '../components/navbar/navbar';
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router";
import './App.css';
import Channel from "../components/contents/channel/channel";
import HomeContent from "../components/contents/home/homeContent";
import DevFinderContent from "../components/contents/devFinder/devFinderContent";
import CustomRoutes from "../components/customRoutes/customRoutes";
import Footer from "../components/footer/footer";

function App() {
    return (
    <div className="App">
        <Router>
            <Navbar />
            <CustomRoutes>
                <Route path="/"  element={<HomeContent />} />
                <Route path="/channel"  element={<Channel />}/>
                <Route path="/devFinder" element={<DevFinderContent />}/>
            </CustomRoutes>
        </Router>
        <Footer />
    </div>
  );
}

export default App;
