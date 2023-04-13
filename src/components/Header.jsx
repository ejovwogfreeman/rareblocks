import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

const Header = () => {
  return (
    <header className="main-header">
      <div>
        <span className="border rounded-pill p-1 px-3">
          Welcome to our platform
        </span>
        <h1 className="my-3">
          StBusiness Cluter- <br /> Intranet Portal Content
        </h1>
        <p>
          Become the leading digital enabler and partner of choice for <br />{" "}
          business customers in the region
        </p>
        <Link>Get Started</Link>
        <div className="d-flex align-items-center justify-content-center">
          <span className="d-flex align-items-center">
            <h3>
              <CountUp delay={2} end={2934} />
            </h3>
            <small className="text-start">
              cards <br />
              delivered
            </small>
          </span>
          <div className="m-3"></div>
          <span className="d-flex align-items-center">
            <h3>$1M+</h3>
            <small className="text-start">
              transactions <br />
              completed
            </small>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
