import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { BsArrowLeft } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import CartBtn from './buttons/CartBtn';
import Signup from './buttons/Signup';
import Login from './buttons/Login';
import BackgroundLetterAvatars from './Avator (1)'; // Import the avatar component
import './header.css';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set the initial login status

  // Your login and logout functions (you need to implement these)
  const handleLogin = () => {
    // Perform login and set isLoggedIn to true
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout and set isLoggedIn to false
    setIsLoggedIn(false);
  };
  


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const user = { name: 'User' };
  const wishlist = [];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid py-2">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <button className="sidebar-toggle" onClick={toggleSidebar}>
                <FaBars />
              </button>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  FeedBack
                </NavLink>
              </li>
            </ul>
            <div className="header-title-wrapper">
            <NavLink className="navbar-brand mx-auto fw-bold" to="/">
              UPKART
            </NavLink>
            </div>
            <div style={{ marginRight: '10px' }}>
            <CartBtn />
            </div>
            {isLoggedIn ? ( // Conditionally render profile information if logged in
              <>
                <div className="profile-info">
                  <BackgroundLetterAvatars name={user.name} /> {/* Pass user name to the avatar component */}
                  {/* Add any additional profile information here */}
                  {/* ... */}
                </div>
              </>
            ) : (
              <>
                <Login onLogin={handleLogin} /> {/* Pass handleLogin function to Login component */}
                <Signup />
              </>
            )}
          </div>
        </div>
      </nav>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-sidebar" onClick={toggleSidebar}>
          <BsArrowLeft />
        </button>
        <div className="sidebar-content">
          <h1 style={{ paddingLeft: '30px', color: 'black' }}>UpKaRT</h1>
          {isLoggedIn && <p style={{ paddingBottom: '0px', paddingTop: '20px' }}>Hello {user.name}</p>}
          {isLoggedIn && <Link to="/AccountSettings" >Account Settings</Link>}
          <Link to="/contact">Support</Link>
          <Link to="/sell" >Want to sell your product?</Link>
          {isLoggedIn && (
            <button className="logout-button" onClick={handleLogout}>
              Sign out
              <div className="logging-bar">
                <FiLogOut />
              </div>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
