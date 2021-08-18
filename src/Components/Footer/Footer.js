import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import logo from "../../Assets/logo.jpg";
import "./Footer.css";
import { useHistory, useParams } from "react-router-dom";

export default function Footer() {
  const history = useHistory();
  console.log("History from footer ::",history);
  
  return (
    <div className="footer-container">
      <div className="footer-primary">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
          <div className="footer-logo-text">
            <h3>महाबळेश्वर अर्बन कॉ. ऑप बँक लि</h3>
            <p className="footer-logo-text">विविधतेकडून एकता ,एकतेतून आर्थिक</p>
          </div>
        </div>

        <div className="footer-top">
          <nav className="item"
          button
         >Home</nav>
          {/* <nav className="item">About Us</nav>
          <nav className="item">Services</nav>
          <nav className="item">Media Center</nav> */}
          <nav className="item">Careers</nav>
        </div>
        {/* <div className="footer-middle">
          <nav className="item">Resource</nav>
          <nav className="item">Other Links</nav>
          <nav className="item">DownLoads</nav>
          <nav className="item">Contact Us</nav>
          <nav className="item">Sitemap</nav>
        </div> */}
        <div className="footer-bottom">
          <nav className="item">
            <li>
              <b>Contact Info</b>
            </li>
            <li style={{ width: 200, wordWrap: "break-word" }}>
              Lorem ipsum dolor sit amet.
            </li>
          </nav>

          <nav className="item">
            <li className="list-item">
              <CallIcon style={{ fill: "#eee" }} /> 9970066655
            </li>
            <li className="list-item">
              <EmailIcon style={{ fill: "#eee" }} /> bank@gmail.com
            </li>
          </nav>
        </div>
      </div>
      <div className="footer-secondary">
        Copyright {new Date().getFullYear()} @
      </div>
    </div>
  );
}
