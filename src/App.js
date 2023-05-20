import React from 'react'
import './App.css';
import Contact from './components/contactPage/Contact';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import {
  BrowserRouter as Router, Routes, Route, Navigate
} from 'react-router-dom'
import { ThemeProvider } from '@emotion/react';
import { theme } from "./styles"


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>

        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/BookStore" element={<Navigate to="/" />}></Route>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </Router>
      </ThemeProvider>

    </>
  );
}

export default App;
