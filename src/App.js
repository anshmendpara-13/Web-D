import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './contact/Contact';
import Profile from './profile/Profile';
import Home from './home/Home';
import PageNotFound from './page_not_found/Page_not_found';
import About from './about/About';
import Navbar from './component/Navbar';
import ClassComponent from './component/ClassComponent';

function App() {
  return (
    // this 
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/class" element={<ClassComponent message="Welcome User" />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
