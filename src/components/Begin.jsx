import React from "react";
import picture from "../images/lastpic.jpg";
import { Link } from "react-router-dom";

const Begin = () => {
  return (
    <div className="px-48 pt-10 bg-gray-50 pb-10">
      <div className="flex gap-10">
        <img src={picture} alt="normal-stuff" className="w-1/2" />
        <div>
          <h2 className="text-4xl font-bold mb-5">
            Begin Your New Journey With Us
          </h2>
          <p className="font-semibold text-slate-500 pb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis,
            quae! Expedita cupiditate quo, excepturi quaerat similique ad
            dignissimos, id ipsa repellat saepe nostrum ex omnis nulla
            voluptates dolor eligendi a?
          </p>
          
          <div className="flex gap-3">
            <Link
              to="/finder"
              className="text-sky-100 bg-violet-400 px-10 py-3  font-semibold text-sm rounded-md"
            >
              Find A Job{" "}
            </Link>

            <Link
              to="/employ"
              className="text-slate-600 border-slate-600 font-semibold border-2 px-8 py-3 text-sm rounded-md"
            >
              Find A Talent
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Begin;
