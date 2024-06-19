import React from "react";
import { BsDatabaseGear } from "react-icons/bs";
// import { MdOutlineLinkedCamera } from "react-icons/md";
import { GrAnalytics } from "react-icons/gr";
import { TfiWrite } from "react-icons/tfi";
import { AiOutlineProject } from "react-icons/ai";
// import { AiOutlineAccountBook } from "react-icons/ai";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="px-48 pt-16 bg-gray-50">

      <div className="flex gap-4 pt-5">
        <Link to="/" className="">
          <div className="bg-white flex py-6 px-6 gap-5 border-2 border-slate-100 rounded">
            <TfiWrite className="bg-violet-400  p-3 rounded text-6xl text-white" />
            <div>
              <h3 className="text-xl font-bold">Database Engineer</h3>
              <p className="text-xs text-slate-500 font-semibold mt-2">
                55 Open Positions
              </p>
            </div>
          </div>
        </Link>

        <Link to="/" className="">
          <div className="bg-white flex py-6 px-6 gap-5 border-2 border-slate-100 rounded">
            <AiOutlineProject className="bg-violet-400  p-3 rounded text-6xl text-white" />
            <div>
              <h3 className="text-xl font-bold">Database Engineer</h3>
              <p className="text-xs text-slate-500 font-semibold mt-2">
                55 Open Positions
              </p>
            </div>
          </div>
        </Link>

        <Link to="/" className="">
          <div className="bg-white flex py-6 px-6 gap-5 border-2 border-slate-100 rounded">
            <AiOutlineProject className="bg-violet-400  p-3 rounded text-6xl text-white" />
            <div>
              <h3 className="text-xl font-bold">Database Engineer</h3>
              <p className="text-xs text-slate-500 font-semibold mt-2">
                55 Open Positions
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex gap-4 mb-10 pt-5">
        <Link to="/" className="">
          <div className="bg-white flex py-6 px-6 gap-5 border-2 border-slate-100 rounded">
            <BsDatabaseGear className="bg-violet-400  p-3 rounded text-6xl text-white" />
            <div>
              <h3 className="text-xl font-bold">Database Engineer</h3>
              <p className="text-xs text-slate-500 font-semibold mt-2">
                55 Open Positions
              </p>
            </div>
          </div>
        </Link>

        <Link to="/" className="">
          <div className="bg-white flex py-6 px-6 gap-5 border-2 border-slate-100 rounded">
            <AiOutlineProject className="bg-violet-400  p-3 rounded text-6xl text-white" />
            <div>
              <h3 className="text-xl font-bold">Database Engineer</h3>
              <p className="text-xs text-slate-500 font-semibold mt-2">
                55 Open Positions
              </p>
            </div>
          </div>
        </Link>

        <Link to="/" className="">
          <div className="bg-white flex py-6 px-6 gap-5 border-2 border-slate-100 rounded">
            <GrAnalytics className="bg-violet-400  p-3 rounded text-6xl text-white" />
            <div>
              <h3 className="text-xl font-bold">Database Engineer</h3>
              <p className="text-xs text-slate-500 font-semibold mt-2">
                55 Open Positions
              </p>
            </div>
          </div>
        </Link>
      </div>

      <Link
        to="/explore"
        className="text-sky-100 bg-violet-400 px-10 py-3  font-semibold text-sm rounded-md relative ml-14 left-1/3"
      >
        Explore More
      </Link>

      <div>
        <div className=" pb-10">
          <h2 className="text-4xl font-bold mt-28">Find The Best Talent</h2>

          <Link className="text-white px-10 py-3 bg-violet-400  font-semibold text-sm rounded-md relative left-3/4 bottom-5 ml-20 ">
            Find More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
