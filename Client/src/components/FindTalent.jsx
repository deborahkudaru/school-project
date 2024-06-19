import React from "react";
// import pro from "../pro.jpg";
import { FaStar } from "react-icons/fa";

const FindTalent = (props) => {
  return (
    <div className="bg-gray-50">
      <div className="px-5 pt-5 border-2 border-slate-100 bg-white">
        <img src={props.image} alt="" className="w-64 pb-4" />
        <p className="text-xs font-bold text-slate-600 bg-white relative left-52 w-7 px-5 rounded">
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
