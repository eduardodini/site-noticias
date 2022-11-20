import React from 'react';
import './App.css';
import Navbar from './components/navbar/index';
import Footer from './components/footer/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages';
import Politics from './pages/politics';
import Education from './pages/health';
import Health from './pages/health';
import Contact from './pages/contact';


function App() {
  return (
    <><>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Main} />
          <Route path='/politics' component={Politics} />
          <Route path='/education' component={Education} />
          <Route path='/health' component={Health} />
          <Route path='/contact' component={Contact} />
        </Routes>
      </Router>
    </><Footer /></>

  );
}

export default App;
