import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { motion } from "framer-motion";


const Header = () => {
  return (
    <header className="main-header">
      <div>
        <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
        
        initial={{ x: "-100vw" }} animate={{ x: 0 }} className="border rounded-pill p-1 px-3">
        
          Welcome to our platform omj
        </motion.span>
        <h1 className="my-3">
          StBusiness Cluter- <br /> Intranet Portal Content
        </h1>
        <p>
          Become the leading digital enabler and partner of choice for <br />{" "}
          business customers in the region
        </p>
        <Link class="gradient-btn">Get Started</Link>
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



