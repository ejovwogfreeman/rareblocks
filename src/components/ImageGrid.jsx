import React from "react";
import "../css/ImageGrid.css";
import img from "../assets/bank.png";

const ImageGrid = () => {
  return (
    <div className="image-grid">
      <div className="image-grid__item image-grid__item--center">
        <img src={img} alt="" />
      </div>
      <div className="image-grid__item image-grid__item--top-left">
        <img src={img} alt="" />
      </div>
      <div className="image-grid__item image-grid__item--top-right">
        <img src={img} alt="" />
      </div>
      <div className="image-grid__item image-grid__item--bottom-left">
        <img src={img} alt="" />
      </div>
      <div className="image-grid__item image-grid__item--bottom-right">
        <img src={img} alt="" />
      </div>
      <div className="image-grid__item image-grid__item--left">
        <img src={img} alt="" />
      </div>
      <div className="image-grid__item image-grid__item--right">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default ImageGrid;
