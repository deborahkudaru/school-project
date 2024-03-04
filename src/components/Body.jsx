import React from "react";
import Header from "./Header";

const Body = () => {
  return (
    <div className="bg-slate-200 w-full h-screen bg-man-standing bg-cover bg-blend-overlay bg-opacity-20 bg-no-repeat lg:bg-none">
      <Header />
      <div className="lg:relative lg:left-40 lg:top-32 relative left-20 top-32 ">
        <h1 className="text-4xl w-1/2 lg:w-1/3 font-semibold font-Merriweather lg:text-6xl">
          Find the right job, your way
        </h1>
        <p className="w-1/2 mt-5 font-Montserrat text-xs text-justify items-center font-semibold lg:w-1/3 lg:text-lg lg:font-medium">
          No skill? No problem. We provide jobs from unskilled to skilled
          people. Search for a job suitable for you and apply now.
        </p>
      </div>

      {/* <input type="text" /> */}
    </div>
  );
};

export default Body;
