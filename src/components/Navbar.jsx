import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import MobileNav from "./MobileNav";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <nav className="main-nav">
      <h5>
        <span className="text-warning">/</span>RAREBLOCKS
      </h5>
      <ul className="desktop-links">
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
      <span className="menu-icon">
        <AiOutlineMenu onClick={() => handleOpen()} />
      </span>
      {open ? <MobileNav open={open} /> : null}
    </nav>
  );
};

export default Navbar;
