import React from "react";
import airtable from "../images/airtable.png";
import amplitude from "../images/amplitude.png";
import rippling from "../images/rippling.png";
import atlassian from "../images/atlassian.png";
import gumroad from "../images/gumroad.png";

const Brands = () => {
  return (
    <div className="flex gap-20 w-32 relative bottom-14">
      <img src={airtable} alt="airtable-logo" />
      <img src={amplitude} alt="amplitude-logo" />
      <img src={rippling} alt="rippling-logo" />
      <img src={atlassian} alt="atlassian-logo" />
      <img src={gumroad} alt="gumroad-logo" />
    </div>
  );
};

export default Brands;
