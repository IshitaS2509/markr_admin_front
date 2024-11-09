import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminAboutPage from './components/AdminAboutPage/AdminAboutPage';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <br/>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/about" element= {<AdminAboutPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
