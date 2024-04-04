import "./styles.css";
import React from "react";
import Header from "../Header";
import HomeSection from "../HomeSection";
import About from "../About";
import Carousel from "../Carousel";

function Accueil() {
  return (
    <>
      <Header />
      <HomeSection />
      <About />
      <Carousel />
      </>
  );
}

export default Accueil;
