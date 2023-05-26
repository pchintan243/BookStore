import React from 'react'
import './App.css';
import Contact from './components/contactPage/Contact';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import {
  BrowserRouter as Router, Routes, Route, Navigate
} from 'react-router-dom'
import { ThemeProvider } from '@emotion/react';
import { theme } from "./styles"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './loginPage/Login';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/BookStore" element={<Navigate to="/" />}></Route>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </Router>
      </ThemeProvider>
      <Footer />
    </>
  );
}

export default App;
