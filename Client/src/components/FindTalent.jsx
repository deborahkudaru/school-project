import React from "react";
import { FaStar } from "react-icons/fa";
import person1 from "../images/sikandar-hayat-aasi-SQdUONdqxJI-unsplash.jpg";
import person2 from "../images/prince-akachi-i2hoD-C2RUA-unsplash.jpg";
import person3 from "../images/michael-dam-mEZ3PoFGs_k-unsplash.jpg";

const talents = [
  {
    imageUrl: person1,
    rating: "4.3",
    job: "Photographer",
    name: "Justine Cloud",
    age: "25 Years Old",
  },
  {
    imageUrl: person2,
    rating: "4.3",
    job: "Photographer",
    name: "Justine Cloud",
    age: "25 Years Old",
  },
  {
    imageUrl: person3,
    rating: "4.3",
    job: "Photographer",
    name: "Justine Cloud",
    age: "25 Years Old",
  },
];

const FindTalent = () => {
  return (
    <div className="bg-gray-50 px-48 pt-5">
      <h2 className="text-4xl font-bold mt-28 text-center pb-10">Find Talent</h2>
      <div className=" grid grid-cols-3  gap-3">
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
    </div>
  );
};

export default FindTalent;
