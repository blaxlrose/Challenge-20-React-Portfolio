import React from "react";
import Navigation from "./Navigation";
import "./Header.css";

export default function Header({ currentPage, setCurrentPage }) {
    return (
      <div className="headerParent" style={{ padding: "0px 0px 10px 43px" }}>
        <p id="header-text">Christopher Brown</p>
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    );
  }
  
