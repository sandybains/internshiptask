
import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const [isDarkMode, setISDarkMode]=useState(false);
  const inputRef =useRef(null);
  const handleToggleTheme = ()=>{
    setISDarkMode(prevMode => !prevMode);
  };
  useEffect (()=>{
    const body =document.body;
    const navbar=document.querySelector(".navbar");


    if(isDarkMode){
      body.style.backgroundColor ="grey";
      body.style.color = "white";
      if(navbar){
        navbar.classList.add("navbar-dark");
        navbar.classList.remove("navbar-light");
      }
    } else {
      body.style.backgroundColor="white";
      body.style.color ="grey";
      if(navbar){
        navbar.classList.add("navbar-light");
        navbar.classList.remove("navbar-dark");
      }
    }
  })

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="menu-button" onClick={toggleMenu}>
          Menu
        </button>
        <button onClick={handleToggleTheme} ref={inputRef}>
          <img className="dark" src="https://cdn-icons-png.flaticon.com/128/4489/4489231.png"  alt="Toggle Dark Mode"></img>
        </button>
        {menuOpen && (
          <div className="menu-dropdown">
            <a href="/">Home</a>
            <a href="/our-service">Our Service</a>
            <a href="/products">Products</a>
            <a href="/contact">Contact</a>
            <a href="/login">Login</a>
           

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
