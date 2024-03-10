import React from "react";
import { Link } from "react-router-dom";
import { FaHeadphones } from "react-icons/fa";

const Jobs = (props) => {
  return (
    <div>
      <h3>See Open Jobs</h3>
      <Link to="/more-jobs">See more</Link>
      <div>
        <FaHeadphones />
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default Jobs;
