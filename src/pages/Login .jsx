import React from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Apply = () => {
  return (
    <div className="px-48 pt-6 bg-gray-50">
      <Logo />
      <div className="mt-32 border-2 border-slate-200 w-1/2 text-center m-auto py-14 rounded-xl">
        <h2 className="text-2xl font-semibold">Login To Workbuddy</h2>
        <input
          type="text"
          placeholder="Username or Email"
          className="border-2 border-slate-200 bg-gray-50 px-20 rounded-lg py-1 mt-5"
        />
        <button className="block mt-5 ml-20 bg-violet-400 py-2 px-32 rounded-lg text-gray-50 font-semibold mb-5">
          Continue
        </button>
        <p>or</p>
        <div className="flex flex-col gap-3 mt-5">
          <button className="bg-blue-500 text-gray-50 font-semibold w-2/3 m-auto py-2 rounded-lg">
            <FaGoogle />
            Continue with Google
          </button>
          <button className="border-2 border-black w-2/3 m-auto font-semibold py-2 rounded-lg mt-2">
            <FaApple />
            Continue with Apple
          </button>
        </div>
        <p className="mt-20 mb-10">Don't have a WorkBuddy account?</p>

        <Link
          to="/signup"
          className="border-2 border-violet-400 rounded-lg px-24 text-violet-400 font-semibold py-2"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Apply;
