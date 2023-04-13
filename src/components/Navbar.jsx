import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <h5>
        <span className="text-warning">/</span>RAREBLOCKS
      </h5>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Gallery</Link>
        </li>
        <li>
          <Link to="/">Projects</Link>
        </li>
      </ul>
      <Link to="/" className="contact-link">
        Contact Us
      </Link>
    </nav>
  );
};

export default Navbar;
