import React, { useState } from "react";
import "./Navbar.css";
import { CgMenuRight } from "react-icons/cg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <a href="/" className="logo">
        <img src="/thayblacklogo-new.png" alt="Company Logo" className="img-fluid logo" />
      </a>

      <nav className={`navbar ${isOpen ? "active" : ""}`}>
        <div className={`nav-link ${isOpen ? "show" : ""}`}>
          <a href="/">Services</a>
          <a href="/">Industry</a>
          <a href="/">Technology</a>
          <a href="/">Clients</a>
          <a href="/">About Us</a>
          <button className="login-button" onClick={() => window.location.href='/'}>
          Contact Us
          </button>
        </div>
      </nav>
      <div className="icon-menu" onClick={toggleMenu}>
        <CgMenuRight />
      </div>
    </header>
  );
};

export default Navbar;
