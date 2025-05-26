import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/FeedBack';
import AccountSettings from './components/AccountSettings';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/buttons/Login';
import Sell from './components/sell';
import FeedbackForm from './components/FeedBack';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

  const handleLogin = () => {
    // Set isLoggedIn to true after successful login
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Set isLoggedIn to false after logout
    setIsLoggedIn(false);
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<FeedbackForm />} />
          <Route path="/AccountSettings" element={<AccountSettings />} />
          <Route path="/sell" element={<Sell />} />
        </>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
