import React from "react";
import services from "../../../Assets/services.jpg"
import "./services.css";

function ServiceScreen() {
  return (
    <div className="service-container">
      <div className="service">
        <h1 className="service-header">Services Header</h1>
        <img src={services} alt="service-img" className="service-img"/>
        <p className="service-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quia
          quis rerum. Ab minima, eveniet debitis iusto nobis porro quas.
          Temporibus porro laudantium earum exercitationem consequuntur
          voluptate vel repellendus eveniet.
        </p>

        
      </div>
    </div>
  );
}

export default ServiceScreen;
