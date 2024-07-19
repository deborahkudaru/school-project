import React from "react";
import { FaStar } from "react-icons/fa";
import talents from "../Talent";

const FindTalent = () => {
  return (
    <div className="bg-gray-50 grid grid-cols-3 px-48 gap-3">
      {talents.map((talent) => (
        <div className="px-5 pt-5 border-2 border-slate-100 bg-white">
          <img src={talent.imageUrl} alt="" className="w-64 pb-4" />
          <p className="text-xs font-bold text-slate-600 bg-white relative left-52 w-7 px-5 rounded">
            <FaStar className="relative right-4 top-3 text-yellow-400" />{" "}
            {talent.rating}
          </p>
          <p className="text-sm text-slate-500 font-semibold">{talent.job}</p>
          <p className="text-xl font-bold">{talent.name}</p>
          <p className="text-sm text-slate-500 font-semibold relative left-44 bottom-10">
            {talent.age}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FindTalent;
