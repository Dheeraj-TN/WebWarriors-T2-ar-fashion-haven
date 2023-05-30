import React from "react";
import "./Design3.css";
import { Fade } from "react-reveal";
function Design3({ image, title, desc }) {
  return (
    <Fade right>
      <div className="design3">
        <img src={image} alt="" />
        <div className="aboutImg">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </Fade>
  );
}

export default Design3;
