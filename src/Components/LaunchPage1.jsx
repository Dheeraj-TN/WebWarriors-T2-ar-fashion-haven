import React from "react";
import "./LaunchPage1.css";
import { Fade } from "react-reveal";
function LaunchPage1() {
  const handleMore = () => {
    const ele = document.querySelector(".LaunchPage2");
    window.scrollTo({
      top: ele?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <Fade bottom>
      <div className="LaunchPage1">
        <div className="bgImage">
          <div className="bgGradient" />
          <Fade left>
            <div className="LaunchPage1__body">
              <strong>
                <h2>An augmented reality shopping boutique is here</h2>
              </strong>
              <strong>
                <p id="pTag">
                  Cult fashion boutique Machine-A and the Institute of Digital
                  Fashion are launching an augmented store environment
                </p>
              </strong>
              <a href="/about">Learn more</a>
            </div>
          </Fade>
        </div>
      </div>
    </Fade>
  );
}

export default LaunchPage1;
