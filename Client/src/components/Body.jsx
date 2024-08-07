import React from "react";
import image from "../images/image.jpg";
import Brands from "./Brands";
import Howto from "./Howto";
import Category from "./Category";
import FindTalent from "./FindTalent";
import Review from "./Review";
import Begin from "./Begin";
import Prefooter from "./Prefooter";
import Header from "./Header"
import { BsStars } from "react-icons/bs";
import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="">
      <Header />
      <div  className="px-48 pt-20 pb-5 bg-sky-100">
        <div className="flex">
          <div>
            <h1 className="text-5xl font-extrabold leading-tight pb-4">
              <span className="text-gray-200 bg-violet-400 px-2 py-1 rounded-lg">
                WE HELP
              </span>{" "}
              YOU FIND YOUR <span className="text-violet-400">DREAM JOB</span>
            </h1>
            <p className="text-slate-500 font-medium w-4/5">
              Each month, more than 3 million job seekers turn to website in
              their search for work, making over 140,000 applications every
              single day
            </p>
          </div>

          <img className="w-96  rounded-2xl" src={image} alt="" />
        </div>
        <BsStars className="relative bottom-44 left-1/2 text-8xl" />

        <>
          <div className="flex gap-3 relative bottom-28">
            <Link className="text-sky-100 bg-violet-400 px-20 py-3  font-semibold text-sm rounded-md">
              Search Job{" "}
            </Link>

            <Link className="text-slate-600 border-slate-600 font-semibold border-2 px-12 py-3 text-sm rounded-md">
              How to apply
            </Link>
            <FaPlayCircle className="text-slate-900 relative right-44 top-4 text-lg" />
          </div>
        </>
        <Brands />
      </div>
      <Howto />
      <Category />
      <FindTalent />
      <div className="px-48 bg-gray-50">
        <h2 className="text-4xl font-bold pt-28 text-center pb-10">
          See What They Say About Us
        </h2>
       <Review />
      </div>
      <Begin />
      <Prefooter />
    </div>
  );
};

export default Body;
