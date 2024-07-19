import React from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";
// import { FaGoogle } from "react-icons/fa";
import google from "../images/google.png";
import { FaRegUser } from "react-icons/fa";

const Apply = () => {
  return (
    <div className="px-48 pt-6 bg-gray-50 pb-10">
      <Logo />
      <div className="mt-16 border border-slate-500 w-1/2 text-center m-auto py-14 rounded-xl">
        <h2 className="text-2xl font-semibold">Login To Workbuddy</h2>
        <div className="border-2 border-slate-200 bg-gray-50 px-1 rounded-lg pb-3 mt-5 w-2/3 m-auto">
          <FaRegUser className="relative left-7 top-5" />
          <input
            type="email"
            placeholder="Username or Email"
            className="bg-gray-50 outline-0 border-0"
          />
        </div>

        <button className="block mt-5 ml-20 bg-violet-400 hover:bg-violet-500 py-3 px-32 rounded-lg text-gray-50 font-semibold mb-5">
          Continue
        </button>
        <p>or</p>
        <div className="flex flex-col gap-3 mt-5">
          <button className="border border-slate-500 font-semibold w-2/3 m-auto pb-3 rounded-lg">
            <img
              src={google}
              alt="google-logo"
              className="w-4 relative left-14 top-5"
            />
            {/* <FaGoogle className="relative top-5 left-14 text-rose-900" /> */}
            Continue with Google
          </button>
          <button className="border border-slate-500 w-2/3 m-auto font-semibold pb-3 rounded-lg mt-2">
            <FaApple className="relative top-5 left-14" />
            Continue with Apple
          </button>
        </div>
        <p className="mt-20 mb-10">Don't have a WorkBuddy account?</p>

        <Link
          to="/signup"
          className="border border-violet-400 rounded-lg px-24 text-violet-400 font-semibold py-2 hover:bg-violet-500 hover:border-violet-500 hover:text-gray-50"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Apply;
