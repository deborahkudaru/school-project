import React from "react";
import Header from "./Header";

const Body = () => {
  return (
    <div className="bg-slate-200 w-full h-screen">
      <Header />
      <div className="lg:relative lg:left-40 lg:top-20">
        <h1 className="text-4xl w-1/2 relative left-20 top-32 lg:w-1/3 font-semibold font-Merriweather lg:text-6xl">
          Find the right job, your way
        </h1>
        <p>
          No skill? No problem. We provide jobs from unskilled to skilled
          people. Search for a job suitable for you and apply now.
        </p>
      </div>
    </div>
  );
};

export default Body;
