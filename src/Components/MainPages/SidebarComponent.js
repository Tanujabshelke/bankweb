import React, { Component, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Select from "react-select";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./SidebarComponent.css";

// import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
// import Button from "@material-ui/core/Button";
const myarr = [
  { label: "Shlok", value: "Shlok" },
  { label: "Ta", value: "T" },
  { label: "R", value: "R" },
  { label: "y", value: "y" },
];
// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//     },
//   },
//   button: {
//     display: "block",
//     marginTop: theme.spacing(2),
//   },
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 300,
//     // flex:1,
//   },
// }));
function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}

function SidebarComponent({ data, Screen }) {
  const history = useHistory();
  // const classes = useStyles();
  // const [selectVal, setSelectVal] = useState("");
  const [selectVal, setSelectVal] = useState({ title: null, path: null });
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const handleSelectChange = (e) => {
    // navigate to value
    console.log("Select title :: ", e.title, "path :;", e.path);
    setSelectVal({ title: e.title });
    history.push(e.path);
  };
  const pathChangeHandler = (value) => {
    console.log("path from sidebarComponent ::", value);
    history.push(value.value);
  };
  const pathChangeHandlerWeb = (value) => {
    console.log("path from sidebarComponent ::", value);
    history.push(value);
  };
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log("Data arr from sidebarComponent ::", data);
  return (
    <div className="sidebar">
      {windowDimensions.width >= 480 ? (
        <div className="sidebar-web">
          <div className="sidebar-list-web">
            {data.map((i) => {
              return (
                <div className="sidebar-list-item-web">
                  <Button
                    variant="contained"
                    style={{
                      borderRadius: 7,
                      backgroundColor: "rgb(7, 33, 70)",
                      color: "#ddd",
                      padding: ".5rem",
                      fontSize: "1rem",
                      width: "100%",
                    }}
                    onClick={() => pathChangeHandlerWeb(i.value)}
                  >
                    {i.label}
                  </Button>
                </div>
              );
            })}
          </div>
          <div className="sidebar-screen">
            <Screen />
          </div>
        </div>
      ) : (
        <div className="sidebar-mobile">
          <div className="sidebar-list-mobile" style={{ flex: 1 }}>
            <Select
              defaultValue={data[0]}
              isDisabled={false}
              isLoading={false}
              isClearable={false}
              isRtl={false}
              isSearchable={true}
              // name="color"
              options={data}
              // options={data}
              onChange={pathChangeHandler}
              // onClick={pathChangeHandler}
            />
          </div>
          <div className="sidebar-screen-mobile">
            <Screen />
          </div>
        </div>
      )}
    </div>
  );
}

export default SidebarComponent;
