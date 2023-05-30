import React from "react";
import "./Design2.css";
function Design2({ title, desc, shop }) {
  return (
    <div className="design2">
      <h2>{title}</h2>
      <p>{desc}</p>
      {shop && <button>{shop}</button>}
    </div>
  );
}

export default Design2;
