import React from "react";
import "./About.css";
function About() {
  return (
    <div className="aa">
      <div class="about-cont">
        <div className="about-subcont-spec">
          <div className="about-tite-spec">About The Project</div>
          <div className="about-desc-spec">Project Description</div>
        </div>
        <div className="about-subcont">
          <div className="about-tite">About The Company</div>
          <div className="about-desc"> Learn About The Raiser</div>
        </div>
        <div className="about-subcont">
          <div className="about-tite">Investment Risk</div>
          <div className="about-desc">See Risk Levels</div>
        </div>
        <div className="about-subcont">
          <div className="about-tite">Project Disclaimer</div>
          <div className="about-desc">Be Aware</div>
        </div>
        <div className="about-subcont">
          <div className="about-tite">Reviews</div>
          <div className="about-desc">See What</div>
        </div>
      </div>
    </div>
  );
}

export default About;
