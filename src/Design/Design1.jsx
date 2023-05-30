import React from "react";
import "./Design1.css";
function Design1({ title, desc, shop }) {
  return (
    <div className="design1">
      <h2>{title}</h2>
      <p>{desc}</p>
      <button>{shop}</button>
    </div>
  );
}

export default Design1;
