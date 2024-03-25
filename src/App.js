
import React,{useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Kuda from './components/Kuda';
import Donate from './Pages/Donate/Donate';
import OurStory from './Pages/OurStory/OurStory';
import InnovationHubs from './Pages/InnovationHubs/InnovationHubs';
import HireUs from './Pages/HireUs/HireUs';
import Blog from './components/Blog';
import Home from './Pages/Home/Home'


function App() {



    
  return (
    <Router>
          <Kuda />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<OurStory />} path="/our-story" />
            <Route element={<InnovationHubs />} path="/innovation-hubs" />
            <Route element={<HireUs />} path="/hire-us" />
            <Route element={<Donate />} path="/donate" />
            <Route element={<Blog />} path="/blog" />

            </Routes>

      </Router>
  );
}

export default App;

