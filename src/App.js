import React from 'react';
import './App.css';
import Navbar from './components/navbar/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Politics from './pages/politics';
import Education from './pages/health';
import Health from './pages/health';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Main} />
        <Route path='/about' component={Politics} />
        <Route path='/events' component={Education} />
        <Route path='/annual' component={Health} />
        <Route path='/team' component={Contact} />
      </Routes>
    </Router>
  );
}

export default App;
