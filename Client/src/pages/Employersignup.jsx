import React from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import HorizontalLine from "../components/HorizontalLine";

const Employersignup = () => {
  return (
    <div className="px-48 pt-10 bg-gray-50">
      <Logo />
      <div className="flex flex-row gap-5 justify-end">
        <p>Looking for work?</p>
        <Link
          to="/worker-signup"
          className="text-violet-400 hover:text-violet-300"
        >
          Apply as a worker
        </Link>
      </div>
      <div className=" mt-5 w-1/2 m-auto">
        <h2 className="text-4xl font-semibold mb-10  text-center">
          Sign up to hire
        </h2>
        <div className="flex gap-3">
          <button className="bg-blue-500 text-gray-50 font-semibold w-2/3 m-auto pb-3 rounded-lg">
            <FaGoogle className="relative top-5 left-3 text-rose-500" />
            Continue with Google
          </button>
          <button className="border-2 border-black w-2/3 m-auto font-semibold pb-2 rounded-lg mt-2">
            <FaApple className="relative top-5 left-5" />
            Continue with Apple
          </button>
        </div>
        <p className="py-6 text-center">
          <HorizontalLine /> or <HorizontalLine />
        </p>
        <div className="flex gap-4 pb-6">
          <div className="flex flex-col">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              className="border-2 border-slate-200 rounded-xl px-6 py-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              className="border-2 border-slate-200 rounded-xl px-6 py-2"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col pb-6">
            <label htmlFor="email">Work Email Address</label>
            <input
              type="email"
              className="border-2 border-slate-200 rounded-xl py-2"
            />
          </div>
          <div className="flex flex-col pb-6">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="border-2 border-slate-200 rounded-xl py-2"
              placeholder="password (8 or more characters)"
            />
          </div>
        </div>

        <button className="block text-center bg-violet-400 text-gray-50 px-4 py-2 rounded-xl font-semibold relative left-40 mb-10">
          Create my account
        </button>
        <p className="text-center mb-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-violet-600 underline underline-offset-1"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Employersignup;
