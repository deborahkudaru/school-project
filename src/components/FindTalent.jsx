import React from "react";
import pro from "../pro.jpg";
import { FaStar } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const FindTalent = (props) => {
  return (
    <div className="px-48 bg-teal-50">
      <div className="flex justify-between pb-10">
        <h2 className="text-4xl font-bold mt-28">Find The Best Talent</h2>
        <Router>
          <Link className="text-black px-10 py-3  font-semibold text-sm rounded-md">
            Find More
          </Link>
          <Routes>
            <Route path="/find-more" render={() => <div>Fine more</div>} />
          </Routes>
        </Router>
      </div>
0-
      <div className="px-5 pt-5 border-2 border-slate-200 bg-white">
        <img src={pro} alt="" className="w-64" />
        <p className="text-xs font-bold text-slate-600 bg-white relative bottom-72 left-52 w-7 px-5 rounded">
          <FaStar className="relative right-4 top-3 text-yellow-400" />{" "}
          {props.rate}
        </p>
        <p className="text-sm text-slate-500 font-semibold">{props.job}</p>
        <p className="text-xl font-bold">{props.name}</p>
        <p className="text-sm text-slate-500 font-semibold relative left-44 bottom-10">
          {props.age}
        </p>
      </div>
    </div>
  );
};

export default FindTalent;
