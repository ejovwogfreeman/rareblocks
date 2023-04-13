import React from "react";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div className="mobile-nav">
      <ul>
        <li>
          <Link to="">About</Link>
        </li>
        <li>
          <Link to="">Gallery</Link>
        </li>
        <li>
          <Link to="">Projects</Link>
        </li>
        <li>
          <Link to="">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
