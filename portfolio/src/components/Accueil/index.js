import "./styles.css";
import React from "react";
import Header from "../Header";
import HomeSection from "../HomeSection";
import About from "../About";
import Carousel from "../Carousel";
import CV from "../CV";

function Accueil() {
  return (
    <>
      <Header />
      <HomeSection />
      <About />
      <Carousel />
      <CV />
      </>
  );
}

export default Accueil;
