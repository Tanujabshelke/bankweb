import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import "./HeaderSidebar.css";
import HeaderDropdown from "./HeaderDropdown";
import Collapse from "@material-ui/core/Collapse";
import { useHistory, useParams } from "react-router-dom";
// import GoldLoan from "../MainPages/Loans/LoanScreen/GoldLoan";
// import GeneralLoan from "../MainPages/Loans/LoanScreen/GeneralLoan";

const drawerWidth = 320;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginTop: "10rem",
    backgroundColor: "rgb(0, 68, 129)",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgb(7, 33, 70)",
    color: "#eee",
    padding: "0 1.5rem",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  // heading: {
  //   fontSize: theme.typography.pxToRem(15),
  //   flexBasis: "33.33%",
  //   flexShrink: 0,
  // },
  // secondaryHeading: {
  //   fontSize: theme.typography.pxToRem(15),
  //   color: theme.palette.text.secondary,
  // },
}));

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}
//Dropdown Arrays
const aboutUs = [
  { label: "Know Your Bank", value: "/about/" },
  { label: "Chairman's Message", value: "/about/" },
  { label: "Board of Directot", value: "/about/" },
  { label: "Management Team", value: "/about/" },
  { label: "Media Center", value: "/about/" },
];
const deposite = [
  { label: "Savings Bank Account", value: "/deposite/" },
  { label: "Current Deposit Account", value: "/deposite/" },
  { label: "Fixed Deposit Account", value: "/deposite/" },
  { label: "Recurring Deposit Account", value: "/deposite/" },
  // { title:"", path: "/deposit/" },
];
const loans = [
  { label: "General Loan", value: "/loan/" },
  { label: "Gold Loan", value: "/loan/goldLoan" },
  { label: "Housing Loan", value: "/loan/housingLoan" },
  { label: "Term Loan", value: "/loan/termLoan" },
  { label: "Cash Loan", value: "/loan/cashLoan" },
  {
    label: "Two Wheeler Loan",
    value: "/loan/twoWheelerLoan",
  },
  {
    label: "Commercial Loan",
    value: "/loan/commercialLoan",
  },
  { label: "Car Loan", value: "/loan/carLoan" },
  {
    label: "Old Vehical Loan",
    value: "/loan/oldVehicalLoan",
  },
  { label: "Education Loan", value: "/loan/" },
  { label: "Hypothication Loan", value: "/loan/" },
  { label: "Arthchakra Loan", value: "/loan/" },
  { label: "Parytan Loan", value: "/loan/" },
  { label: "Project Loan", value: "/loan/" },
  { label: "Consumer Durable Loan", value: "/loan/" },
  { label: "NSC Loan", value: "/loan/" },
];
const services = [
  { label: "Franking", value: "/services/" },
  { label: "Cheque Clearing", value: "/services/" },
  { label: "Demand Drafts", value: "/services/" },
  { label: "Adhar Based LPG Subsidy", value: "/services/" },
  { label: "Insurance", value: "/services/" },
  { label: "SMS Alert Facility", value: "/services/" },
  { label: "RUPAY Debit Card", value: "/services/" },
  { label: "POS", value: "/services/" },
  { label: "RTGS And NEFT", value: "/services/" },
  { label: "E-Tax Payment", value: "/services/" },
  { label: "Service Charges", value: "/services/" },
];
const otherLinks = [
  { label: "Gallery", value: "/otherLinks" },
  { label: "Know your customer(KYC)", value: "/otherLinks/" },
  { label: "Unclaimed Deposite Transfered to DEAF", value: "/otherLinks/" },
  { label: "Annual Report", value: "/otherLinks/" },
];
const contactUs = [
  { label: "Branches", value: "/contactUs/" },
  { label: "Customer Care", value: "/contactUs/" },
  { label: "Customer Guidence", value: "/contactUs/" },
  { label: "Customer Awareness", value: "/contactUs/" },
  { label: "Complaint & Grivance", value: "/contactUs/" },
];

function HeaderSidebar(props) {
  const history = useHistory();
  const { MainScreen, mainScreenProps } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const handleDrawerToggle = () => {
    // ondblclick(setMobileOpen(!mobileOpen))
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        <ListItem
          button
          onClick={() => {
            setMobileOpen(false);
            history.push("/");
          }}
        >
          <h3 className="list-item-text">Home</h3>
          {/* <ListItemText primary="Home"  className="" /> */}
        </ListItem>

        <ListItem
          button
          onClick={(e) => {
            setMobileOpen(false);
            console.log("Click", e.target.value);
            history.push("/about");
          }}
        >
          <h3 className="list-item-text">About us</h3>
          {/* <HeaderDropdown title="About Us" data={aboutUs} /> */}
          {/* <ListItemText primary="About Us" /> */}
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setMobileOpen(false);
            //  history.push("/loan")
            // history.push("/LoanRoutes");
          }}
        >
          <HeaderDropdown title="Loans" data={loans} />
          {/* <ListItemText primary="Loans" /> */}
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setMobileOpen(false);
            // history.push("/deposite");
          }}
        >
          <HeaderDropdown title="Deposite" data={deposite} />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setMobileOpen(false);
            // history.push("/home");
          }}
        >
          <HeaderDropdown title="Services" data={services} />
          {/* <ListItemText primary="Services" /> */}
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setMobileOpen(false);
            // history.push("/home");
          }}
        >
          <HeaderDropdown title="Other Links" data={otherLinks} />
          {/* <ListItemText primary="Other Links" /> */}
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setMobileOpen(false);
            // history.push("/home");
          }}
        >
          <h3 className="list-item-text">Downloads</h3>
          {/* <ListItemText primary="Downloads" /> */}
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setMobileOpen(false);
            history.push("/contactUs");
          }}
        >
          <h3 className="list-item-text">Contact Us</h3>
          {/* <ListItemText primary="Contact Us" /> */}
        </ListItem>
       
      </List>
    </div>
  );

 
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  console.log("Props from Header Side bar::", props);
  return (
    <div className="header-drawer-container">
      {windowDimensions.width <= 480 ? (
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              {/* <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography> */}
            </Toolbar>
          </AppBar>
          <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              <Drawer
                // container={container}
                variant="temporary"
                anchor={theme.direction === "rtl" ? "top" : "left"}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>
        </div>
      ) : (
        <div className="web-drawer">
          <div
            className="web-drawer--item"
            button
            onClick={() => {
              setMobileOpen(false);
              history.push("/");
            }}
          >
            <h3 className="list-item-text">Home</h3>
          </div>
          <div
            className="web-drawer--item"
            button
            onClick={() => {
              setMobileOpen(false);
              history.push("/about");
            }}
          >
            <h3 className="list-item-text">About Us</h3>
          </div>
          <div className="web-drawer--item">
            <HeaderDropdown title="Loans" data={loans} />
          </div>
          <div className="web-drawer--item">
            <HeaderDropdown title="Deposite" data={deposite} />
          </div>
          <div className="web-drawer--item">
            <HeaderDropdown title="Services" data={services} />
          </div>
          <div className="web-drawer--item">
            <HeaderDropdown title="Other Links" data={otherLinks} />
          </div>
          <div className="web-drawer--item">
            <h3 className="list-item-text">Download</h3>
          </div>
          <div className="web-drawer--item"
            button
            onClick={() => {
              setMobileOpen(false);
              history.push("/contactUs");
            }}
          >
          <h3 className="list-item-text">Contact Us</h3>
          </div>
        </div>
      )}
      <main className={classes.content}>
        {/* <div className={classes.toolbar} /> */}
        <div style={{ display: "flex", margin: "2.5rem .5rem" }}>
          <MainScreen mainScreenProps={mainScreenProps} />
        </div>
      </main>
    </div>
  );
}

HeaderSidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default HeaderSidebar;
