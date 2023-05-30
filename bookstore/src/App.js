import React from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import {
  BrowserRouter as Router, Routes, Route, Navigate
} from 'react-router-dom'
import { ThemeProvider } from '@emotion/react';
import { theme } from "./styles"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './loginPage/Login';
import Footer from './components/Footer';
import Signup from './components/signup/Signup';
import LoginState from './context/LoginState';

function App() {
  return (
    <>
      <LoginState>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/BookStore" element={<Navigate to="/" />}></Route>
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/*" element={<h1>Page Not Found</h1>} />
            </Routes>
          </Router>
        </ThemeProvider>
        <Footer />
      </LoginState>
    </>
  );
}

export default App;