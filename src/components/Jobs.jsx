import React from "react";
// import { Link } from "react-router-dom";
import { FaHeadphones } from "react-icons/fa";

const Jobs = (props) => {
  return (
    <div className=" pt-20 ">
    
      {/* <Link to="/more-jobs">See more</Link> */}
      <div className="w-60 bg-slate-50 py-16 px-8 ">
        <FaHeadphones className="text-slate-50 bg-black text-5xl"/>
        <h3 className="text-xl font-medium pt-5">{props.name}</h3>
        <p className="text-sm">{props.desc}</p>
      </div>
    </div>
  );
};

export default Jobs;
