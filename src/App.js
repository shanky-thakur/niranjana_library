import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Headers from './components/Headers';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

const App = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<Headers/>} />
        <Route exact path="/Home" element={<Home/>}/>
        <Route exact path="/About" element={<About/>}/>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/Signup" element={<Signup/>}/>
        <Route exact path="/Contact" element={<Contact/>}/>
        </Routes>
    </Router>
  )
}

export default App