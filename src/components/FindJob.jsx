import React from "react";

const FindJob = (props) => {
  return (
    <div>
      <div>
        <div>{props.logo}</div>
        <h3>{props.jobname}</h3>
        <p>{props.location}</p>
        <p>{props.duration}</p>
        <p>{props.time}</p>
        <p>{props.company}</p>
      </div>
    </div>
  );
};

export default FindJob;
