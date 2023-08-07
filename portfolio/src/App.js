import React from "react";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import PortfolioData from "./components/PortfolioData"
import { useState } from "react";

const App = () => {
  const [currentPage, setCurrentPage] = useState("About");
  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <PortfolioData
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Footer />
    </div>
  );
};

export default App;
