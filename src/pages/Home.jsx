import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SquareGroup from "../components/SquareGroup";
// import ImageGrid from "../components/ImageGrid";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <SquareGroup />
      <Footer />
      {/* <ImageGrid /> */}
    </div>
  );
};

export default Home;
