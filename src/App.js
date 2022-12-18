import React from 'react';
import './App.css';
import Navbar from './components/navbar/index';
import Footer from './components/footer/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/index';
import Politics from './pages/politics';
import Education from './pages/health';
import Health from './pages/health';
import Contact from './pages/contact';
import Search from './pages/search';


function App() {
  return (
    <><>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/politics' element={<Politics />} />
          <Route path='/education' element={<Education />} />
          <Route path='/health' element={<Health />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </Router>
    </><Footer /></>

  );
}

export default App;
