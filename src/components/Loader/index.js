import "./styles.css";
import React from "react";

function Loader() {
  return (
    <section className="loader-wrapper">
      <div className="loader">
        <p className="welcome-text">
          Bienvenue sur le <span>Portfolio</span> de
        </p>
        <span className="firstname-loader">Maxime Camaille</span>
        <span className="contour">
          <i></i>
        </span>
      </div>
    </section>
  );
}

export default Loader;
