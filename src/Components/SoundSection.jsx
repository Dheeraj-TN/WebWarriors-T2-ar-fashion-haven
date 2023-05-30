import React from "react";
import YouTube from "react-youtube";
import videoBg from "/Users/dheerajtn/react/ar-fashion-haven/src/Components/Water level indicator.mp4";
function SoundSection() {
  const handleLearnMore = () => {
    const ele = document.querySelector(".LaunchPage3-section");
    window.scrollTo({
      top: ele?.getBoundingClientRect().bottom,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="sound-section wrapper">
      <div className="body">
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="Videocontent">
          <h1>Welcome</h1>
          <p>To my site.</p>
        </div>
      </div>
    </div>
  );
}

export default SoundSection;
