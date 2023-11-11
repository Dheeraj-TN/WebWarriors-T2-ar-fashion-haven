import React from "react";
import "./LaunchPage2.css";
import { Fade } from "react-reveal";
import videoBg from "/Users/dheerajtn/react/ar-fashion-haven/src/Components/WhatsApp Video 2023-05-28 at 3.40.41 PM.mp4";
function LaunchPage2() {
  return (
    <div className="LaunchPage2" id="LaunchPage2">
      <div className="linear__gradient" />
      <Fade left>
        <div className="body">
          <div className="overlay"></div>
          <video src={videoBg} autoPlay loop muted />
          <Fade left>
            <div className="Videocontent">
              <h1>
                Welcome to ar fashion room where you can match the clothes by
                trying on urself virtually where a 3d model of you wil be
                created{" "}
              </h1>
            </div>
          </Fade>
        </div>
      </Fade>
    </div>
  );
}

export default LaunchPage2;
