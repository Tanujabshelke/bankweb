import React from "react";
import { useState } from "react";
import "./Contact.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import HomeIcon from '@material-ui/icons/Home';
import ContactsIcon from '@material-ui/icons/Contacts';
import MessageIcon from '@material-ui/icons/Message';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
        // minWidth: "25ch",
    },
  },
}));
function Contact() {
  const classes = useStyles();
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [companyName,setCompanyName] = useState("");
  const [address,setAddress] = useState("");
  const [message,setMessage] = useState("");

  const fullNameChangeHandler = (e) => {
    setFullName(e.target.value);
  };
  const mobileChangeHandler = (e) => {
    setMobile(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const companyNameChangeHandler = (e) => {
    setCompanyName(e.target.value);
  };
  const addressChangeHandler = (e) => {
    setAddress(e.target.value);
  };
  const messageChangeHandler = (e) => {
    setMessage(e.target.value);
  };
  const submitHandler = (e) => {
      console.log("click");
    e.preventDefault();
    const formData = {
      fullName: fullName,
      mobile: mobile,
      email: email,
      companyName : companyName,
      address : address,
      message:message,  
    };

    console.log("Form Data from Contact page :::", formData);
    setFullName(" ");
    setMobile(" ");
    setEmail(" ");
    setCompanyName(" ");
    setAddress(" ");
    setMessage(" ");
  };

  return (
    <div className="contact-container">
      <div className="contact">
        <h1 className="contact-header">Contact Us</h1>
        <div className="contact-main">
          <div className="contact-main__item">
              <HomeIcon style={{ fontSize: 30 ,color:"gray"}} />
            <h3 className="main-header">Our Address</h3>
            <p className="main-sub-header">Bank of India</p>
            <p>Lorem, ipsum dolor lorem2 ,India</p>
          </div>
          <div className="contact-main__item">
           <MailOutlineIcon style={{ fontSize: 30,color:"gray"}} />
            <h3 className="main-header">Email Us</h3>
            {/* <p className="main-sub-header">Bank of India</p> */}
            <p>bankofindia@india.com</p>
          </div>
          <div className="contact-main__item">
              <ContactsIcon style={{ fontSize: 30 ,color:"gray"}}/>
            <h3 className="main-header">Call Us</h3>
            {/* <p className="main-sub-header">Bank of India</p> */}
            <p>99700066613</p>
          </div>
          <div className="contact-main__item">
              <MessageIcon style={{ fontSize: 30 ,color:"gray"}}/>
            <h3 className="main-header">Message Us</h3>
            <form
              className={classes.root}
              autoComplete="off"
            //   onSubmit={submitHandler}
            >
              <TextField
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                value={fullName}
                onChange={fullNameChangeHandler}
              />
              <TextField
                id="outlined-basic"
                label="Mobile N0."
                variant="outlined"
                value={mobile}
                onChange={mobileChangeHandler}
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={email}
                onChange={emailChangeHandler}
              />
              <TextField
                id="outlined-basic"
                label="Company Name"
                variant="outlined"
                value={companyName}
                onChange={companyNameChangeHandler}
              />
              <TextField
                id="outlined-multiline-static"
                label="Address"
                multiline
                rows={4}
                // defaultValue="Default Value"
                variant="outlined"
                value={address}
                onChange={addressChangeHandler}
              />
              <TextField
                id="outlined-multiline-static"
                label="Your Message"
                multiline
                rows={4}
                //  defaultValue="Default Value"
                variant="outlined"
                value={message}
                onChange={messageChangeHandler}
              />
            </form>
              <Button variant="contained" color="primary" onClick={submitHandler}>
                Submit
              </Button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
