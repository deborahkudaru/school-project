import React from "react";
import { BsDatabaseGear } from "react-icons/bs";
import { MdOutlineLinkedCamera } from "react-icons/md";
import { GrAnalytics } from "react-icons/gr";
import { TfiWrite } from "react-icons/tfi";
import { AiOutlineProject } from "react-icons/ai";
import { AiOutlineAccountBook } from "react-icons/ai";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="px-48 pt-16 bg-teal-50">
      <Router>
        <div className="flex gap-4">
          <Link to="/" className="">
            <div className="bg-white flex py-6 px-8 gap-5 border-2 border-slate-100 rounded">
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
            <div className="bg-white flex py-6 px-8 gap-5 border-2 border-slate-100 rounded">
              <AiOutlineAccountBook className="bg-violet-400  p-3 rounded text-6xl text-white" />
              <div>
                <h3 className="text-xl font-bold">Database Engineer</h3>
                <p className="text-xs text-slate-500 font-semibold mt-2">
                  55 Open Positions
                </p>
              </div>
            </div>
          </Link>

          <Link to="/" className="">
            <div className="bg-white flex py-6 px-8 gap-5 border-2 border-slate-100 rounded">
              <MdOutlineLinkedCamera className="bg-violet-400  p-3 rounded text-6xl text-white" />
              <div>
                <h3 className="text-xl font-bold">Photographer</h3>
                <p className="text-xs text-slate-500 font-semibold mt-2">
                  55 Open Positions
                </p>
              </div>
            </div>
          </Link>
        </div>

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
        <Routes>
          <Route exact path="/" render={() => <div>Home Page</div>} />
        </Routes>
      </Router>
    </div>
  );
};

export default Category;
