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
          <Route path='/about' component={Politics} />
          <Route path='/events' component={Education} />
          <Route path='/annual' component={Health} />
          <Route path='/team' component={Contact} />
        </Routes>
      </Router>
    </><Footer /></>

  );
}

export default App;
