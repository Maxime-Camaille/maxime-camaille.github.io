import "./styles.css";
import Loader from "../Loader";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Accueil from "../Accueil";
import About from "../About";

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
      <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
