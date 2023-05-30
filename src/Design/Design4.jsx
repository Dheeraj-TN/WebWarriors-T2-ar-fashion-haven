import React from "react";
import "./Design4.css";
import { Fade } from "react-reveal";
function Design4({ image, title, desc }) {
  return (
    <Fade right>
      <div className="design4">
        <div className="aboutImg">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        <img src={image} alt="" />
      </div>
    </Fade>
  );
}

export default Design4;
