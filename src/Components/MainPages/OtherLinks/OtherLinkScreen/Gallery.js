import React from 'react'
import "./OtherLink.css";
import m1 from "../../../../Assets/gallery/m1.jpg"
import m2 from "../../../../Assets/gallery/m2.jpg"
import m3 from "../../../../Assets/gallery/m3.jpg"
import m4 from "../../../../Assets/gallery/m4.jpg"
import m5 from "../../../../Assets/gallery/m5.jpg"
import m6 from "../../../../Assets/gallery/m6.jpg"
import m7 from "../../../../Assets/gallery/m7.jpg"

function Gallery() {
    return (
        <div className="other-link-container">
      <h1 className="other-link-header">Some Happy Moments</h1>
      <div className="other-link-img">
          <img src={m1} alt="gallery  Imgs" />
          <img src={m2} alt="gallery  Imgs" />
          <img src={m3} alt="gallery  Imgs" />
          <img src={m4} alt="gallery  Imgs" />
          <img src={m5} alt="gallery  Imgs" />
          <img src={m6} alt="gallery  Imgs" />
          <img src={m7} alt="gallery  Imgs" />
      </div>
      </div>
    )
}

export default Gallery
