import React from "react";
import "./Design5.css";
function Design5({ image, text }) {
  return (
    <div className="design5">
      <img src={image} alt="" />
      <h2>{text}</h2>
    </div>
  );
}

export default Design5;
