import React from "react";
import Navbar from "./Navbar";
import "../styles/styles.css";
import images from "../images/pic1.jpg";

const Body = () => {
  return (
    <div id="body">
      <Navbar />
      <div className="body-flex">
        
          <h1>Find the right job, your way </h1>
          <p>
            {" "}
            No experience? No problem. Explore endless career possibilities at
            Work Buddy...
          </p>
        </div>
        <div>
          <img src={images} alt="" />
        </div>

        <input type="text" className="body-input"/>
    </div>
  );
};

export default Body;
