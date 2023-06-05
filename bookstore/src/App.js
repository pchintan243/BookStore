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
import Login from './components/loginPage/Login';
import Footer from './components/Footer';
import Signup from './components/signup/Signup';
import LoginState from './context/LoginState';
import UpdateProfile from './components/UpdateProfile';
import BookList from './components/bookList/BookList';
import BookPage from './components/bookPage/BookPage';
import UpdateBook from './components/updateBook/UpdateBook';
import AddBook from './components/addBook/AddBook';
import Category from './components/category/Category';
import AddCategory from './components/category/AddCategory';

function App() {
  const pageSize = 8;

  // const [progress, setProgress] = useState(0)
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
              <Route exact path="/update" element={<UpdateProfile />} />
              <Route exact path="/bookpage" element={<BookPage />} />
              <Route exact path="/edit-book/:id/" element={<UpdateBook />} />
              <Route exact path="/add-book" element={<AddBook />} />
              <Route exact path="/booklist" element={<BookList />} />
              <Route exact path="/category" element={<Category />} />
              <Route exact path="/addcategory" element={<AddCategory />} />
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