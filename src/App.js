import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export class App extends Component {
  render() {
    return (
      <>
      
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<News/>}/>
        <Route path="/About" element={<About/>}/> 
        </Routes>
        </Router>
      </>
    )
  }
}

export default App