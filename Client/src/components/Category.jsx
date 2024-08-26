import React from "react";
import { Link } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
import { PiPaintBrushHouseholdThin } from "react-icons/pi";
import { GiGardeningShears } from "react-icons/gi";

const categories = [
  {
    icon: <FaCamera />,
    jobName: "PhotoGraphy",
    jobStatus: "Available",
  },
  {
    icon: <PiPaintBrushHouseholdThin />,
    jobName: "House Keeping",
    jobStatus: "Available",
  },
  {
    icon: <GiGardeningShears />,
    jobName: "Gardening",
    jobStatus: "Available",
  },
  // {
  //   icon: <FaCamera />,
  //   jobName: "PhotoGraphy",
  //   jobStatus: "Available",
  // },
  // {
  //   icon: <FaCamera />,
  //   jobName: "PhotoGraphy",
  //   jobStatus: "Available",
  // },
  // {
  //   icon: <FaCamera />,
  //   jobName: "PhotoGraphy",
  //   jobStatus: "Available",
  // },
];

const Category = () => {
  return (
    <div className="px-48 pt-16 bg-gray-50 grid grid-cols-3 gap-3">
      {categories.map((category) => (
        <Link to="/" className="">
          <div className="bg-white py-3 flex px-6 gap-5 border-2 border-slate-100 rounded">
            <p className="bg-violet-400  p-3 rounded text-6xl text-white">
              {category.icon}
            </p>
            <div>
              <h3 className="text-xl font-bold">{category.jobName}</h3>
              <p className="text-xs text-slate-500 font-semibold mt-2">
                {category.jobStatus}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Category;
