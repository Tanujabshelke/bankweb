import React from "react";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import CarouselSlide from "react-material-ui-carousel";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import bank1 from "../../Assets/bank1.jpg";
import bank2 from "../../Assets/bank2.jpg";
import bank3 from "../../Assets/bank3.jpg";
import bank4 from "../../Assets/bank4.jpg";
import bank5 from "../../Assets/bank5.jpg";
import gallery1 from "../../Assets/gallery1.jpg";
import gallery2 from "../../Assets/gallery2.jpg";
import gallery3 from "../../Assets/gallery3.jpg";
import gallery4 from "../../Assets/gallery4.jpg";
import gallery5 from "../../Assets/gallery5.jpg";
import gallery6 from "../../Assets/gallery6.jpg";
import showcase from "../../Assets/showcase.jpg";
import card from "../../Assets/card.jpg";
import "./MainPages.css";

const theme = createMuiTheme({
  palette: {
    indicators: false,
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Button: {
    "&:hover": {
      backgroundColor: "#fff !important",
    },
  },
  title: {
    flexGrow: 1,
  },
}));

const images = [
  { image: bank1 },
  { image: bank2 },
  { image: bank3 },
  { image: bank4 },
  { image: bank5 },
];
export default function Home() {
  const classes = useStyles();
  return (
    <div className="main-page-container">
      <ThemeProvider theme={theme}>
        <Carousel
        //   indicators={false}
        changeOnFirstRender={true}
        animation="slide"
        interval="5000"
          orientation="ltr"
          proportion="25"
          infiniteLoop
          useKeyboardArrows
          autoPlay={true}
        >
          {images.map(({ image }) => (
            <CarouselSlide key={image}>
              <Card dots="false">
                <CardMedia
                  image={image}
                  style={{
                    height: 0,
                    paddingTop: "36%",
                  }}
                />
              </Card>
            </CarouselSlide>
          ))}
        </Carousel>
      </ThemeProvider>
      <div className="home-page__imgs">
        <img src={gallery1} alt="gallery" className="home-page__img" />
        <img src={gallery2} alt="gallery" className="home-page__img" />
        <img src={gallery3} alt="gallery" className="home-page__img" />
        <img src={gallery4} alt="gallery" className="home-page__img" />
        <img src={gallery5} alt="gallery" className="home-page__img" />
        <img src={gallery6} alt="gallery" className="home-page__img" />
      </div>
      <div className="home-page__live-data">
        <div className="live-data">
          <div className="data">
            <img src="" alt="img" />
            <h3>398</h3>
            <h4>Some Text</h4>
          </div>
          <div className="data">
            <img src="" alt="img" />
            <h3>398</h3>
            <h4>Some Text</h4>
          </div>
          <div className="data">
            <img src="" alt="img" />
            <h3>398</h3>
            <h4>Some Text</h4>
          </div>
          <div className="data">
            <img src="" alt="img" />
            <h3>398</h3>
            <h4>Some Text</h4>
          </div>
        </div>
      </div>
      <div className="home-page__card">
          <img src={card} alt="card"/>
          <img src={card} alt="card"/>
          <img src={card} alt="card"/>
      </div>
      
    </div>
  );
}
