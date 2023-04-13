import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="main-footer">
        <div>
          <h4 className="mb-4">
            Stc Business Cluster <br /> Intranet Portal
          </h4>
          <p className="text-muted">
            Becoming the leading digital enabler and partner of choice for
            business customers in the region.
          </p>
        </div>
        <ul>
          <h6 className="mb-4 text-muted">COMPANY</h6>
          <li>
            <Link to="">stc business overview</Link>
          </li>
          <li>
            <Link to="">Mission and Vision</Link>
          </li>
          <li>
            <Link to="">Stc Business Culture Organization</Link>
          </li>
          <li>
            <Link to="">Stc Business Culture Value Proposition</Link>
          </li>
        </ul>
        <ul>
          <h6 className="mb-4 text-muted">COMPANY</h6>
          <li>
            <Link to="">Recent Performances</Link>
          </li>
          <li>
            <Link to="">Market Results</Link>
          </li>
          <li>
            <Link to="">Selected Achievements</Link>
          </li>
          <li>
            <Link to="">KSA 2B2 ICT Market</Link>
          </li>
        </ul>
        <form>
          <h6 className="mb-4 text-muted">NEWSLETTER</h6>
          <input type="text" placeholder="enter your email address" />
          <button className="btn btn-primary">Subscribe Now</button>
        </form>
      </div>
      <p className="text-center mt-5 mb-3">
        &copy; copyright {new Date().getFullYear()}, All Rights Reserved by Stc
        Business Cluster Intranet Portal
      </p>
    </footer>
  );
};

export default Footer;
