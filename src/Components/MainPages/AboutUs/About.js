import React from "react";
import about11 from "../../../Assets/about11.jpg"
import about12 from "../../../Assets/about12.jpg"
import about13 from "../../../Assets/about13.jpg"
import about14 from "../../../Assets/about14.jpg"
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about">
        <h1 className="about-header">About Bank of India</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
          quasi doloremque harum earum amet facere animi quibusdam sed
          blanditiis quis enim illo, repellendus vero, voluptate sunt, quaerat
          omnis magnam repellat!
        </p>
        <h2 className="about-sub-header">Lorem ipsum dolor sit </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          inventore eius ipsa id exercitationem aut excepturi? Saepe deserunt
          aliquam nesciunt.
        </p>
        <div className="about-img">
          <img src={about11} alt="about Us images" />
          <img src={about12} alt="about Us images" />
          <img src={about13} alt="about Us images" />
          <img src={about14} alt="about Us images" />
        </div>
      </div>
    </div>
  );
}

export default About;
