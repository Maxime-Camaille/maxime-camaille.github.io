import Header from "../Header";
import HomePage from "../HomePage";
import About from "../About";
import "./App.css";
import Loader from "../Loader";
import React, { useState, useEffect } from "react";
import Carousel from "../Carousel";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <div className="App">
      <Header />
      <HomePage />
      <About />
      <Carousel />
    </div>
  );
}

export default App;
