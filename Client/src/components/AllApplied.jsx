import React from "react";
import { IoIosMore } from "react-icons/io";

const AllApplied = () => {
  return (
    <div className="border">
      <div className="flex justify-between">
        <h3>Others Applied</h3>
        <button>
          <IoIosMore />
        </button>
      </div>
      <div>
      <input type="text" placeholder="Search Applied..."/>
      </div>

    </div>
  );
};

export default All