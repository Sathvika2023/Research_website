import React from "react";
import "./HeroVideo.css"; // Import the CSS file

const HeroVideo = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/videos/my-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay">
        <h1>Welcome to Research Hub</h1>
        <p>Explore the latest publications and innovations</p>
      </div>
    </div>
  );
};

export default HeroVideo;
