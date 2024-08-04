import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { CgMenuRight } from "react-icons/cg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <a href="/" className="logo">
        <img src="/thayblacklogo-new.png" alt="Company Logo" className="img-fluid logo" />
      </a>

      <nav className={`navbar ${isOpen ? "active" : ""}`}>
        <div className={`nav-links ${isOpen ? "show" : ""}`}>
          <div className="dropdown">
            <a href="/" className="dropdown-toggle">Services</a>
            <div className="dropdown-menu">
              <a href="/">Cloud Support</a>
              <a href="/">Development</a>
              <a href="/">IT Support</a>
              <a href="/">UI/UX Design</a>
            </div>
          </div>
          <a href="/" className="nav-link">Industry</a>
          <a href="/" className="nav-link">Technology</a>
          <a href="/" className="nav-link">Clients</a>
          <a href="/" className="nav-link">About Us</a>
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
