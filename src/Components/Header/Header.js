import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import HeaderSidebar from "./HeaderSidebar";
import "./Header.css";
import HeaderDropdown from "./HeaderDropdown";
import Routes from "../../Navigation/Routes";
import logo from "../../Assets/logo.jpg";

export default function Header() {
  return (
    <div className="header-container">
      {/* <div className="header-top">
        <nav className="navbar">
          <li className="navbar--item">
            <CallIcon style={{ fill: "#eee" }} /> 9970066655
          </li>
          <li className="navbar--item">
            <EmailIcon style={{ fill: "#eee" }} /> bank@gmail.com
          </li>
          <li className="navbar--item">Lorem ipsum</li>
          <li className="navbar--item">Facebook</li>
        </nav>
        <nav className="navbar">
          <li className="navbar--item">Financial Position</li>
          <li className="navbar--item">Annual Report</li>
          <li className="navbar--item">Some text</li>
        </nav>
      </div> */}
      <div className="header-logo">
        <img src={logo} alt="logo" />
        <div className="header-logo-text">
          <h3>महाबळेश्वर अर्बन कॉ. ऑप बँक लि</h3>
          <p> विविधतेकडून एकता ,एकतेतून आर्थिक </p>
        </div>
      </div>
      {/* <HeaderSidebar /> */}
      {/* <Routes /> */}
    </div>
  );
}
