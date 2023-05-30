import React from "react";
import "./Lp3Options1.css";
function Lp3Options1({ image, title, desc, shop }) {
  return (
    <div className="lp3__options">
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{desc}</p>
      <a href={shop}>Shop Now</a>
    </div>
  );
}

export default Lp3Options1;
