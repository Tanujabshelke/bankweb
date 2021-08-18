import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import "./HeaderDropdown.css";
import { useHistory } from "react-router-dom";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    backgroundColor: "rgb(7, 33, 70)",
    color: "#eee",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:hover": {
      backgroundColor: "rgb(0, 68, 129)",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: "#eee",
      },
    },
  },
}))(MenuItem);

export default function HeaderDropdown(props) {
  let history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    // let [event,path] = props;
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = (value) => {
    history.push(value);
    // console.log("path :: ",path);
    
    setAnchorEl(null);
  };
  // console.log("Data from props::", props);
  return (
    <div className="header-dropdown">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{
          color: "#eee", 
          fontWeight: 510,
          fontSize: "1rem",
          padding:"0px",
          textTransform: "capitalize",
          fontFamily:
            "BentonSansBBVA Medium ,Helvetica Neue,Arial, Helvetica,sans-serif",
        }}
      >
        {props.title} 
        <br></br>
        <ArrowDropDownIcon />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {props.data.map((i) => {
            // console.log("From map function::" ,i);
          return <StyledMenuItem onClick={() => handleClose(i.value)}>{i.label}</StyledMenuItem>;
        })}
      </StyledMenu>
    </div>
  );
}
