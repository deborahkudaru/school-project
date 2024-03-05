import React from "react";
import Header from "./Header";

const Body = () => {
  return (
    <div className="lg:bg-slate-200 w-full h-screen bg-man-standing bg-cover bg-slate-200 bg-blend-overlay bg-opacity-20 bg-no-repeat lg:bg-none">
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
      <div className="lg:relative lg:left-1/2 lg:bottom-24 lg:visible lg:block hidden">
        <img
          src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbGRpbmclMjBhJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D"
          alt="a man holding a phone"
        />
      </div>
      <div className="bg-white lg:w-1/2 lg:py-5 lg:relative lg:bottom-20 lg:left-12 w-1/2 relative top-40 left-20 py-3">
        <input type="text" />
      </div>
    </div>
  );
};

export default Body;
