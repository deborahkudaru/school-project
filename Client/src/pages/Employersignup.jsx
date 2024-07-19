import React from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import google from "../images/google.png"

const Employersignup = () => {
  return (
    <div className="lg:px-48 md:px-32 px-5 pt-10 bg-gray-50 ">
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
          <button className="border border-slate-500 font-semibold w-2/3 m-auto pb-3 rounded-lg">
            <img
              src={google}
              alt="google-logo"
              className="w-4 relative left-4 top-5"
            />
            Continue with Google
          </button>
          <button className="border border-slate-500 w-2/3 m-auto font-semibold pb-3 rounded-lg ">
            <FaApple className="relative top-5 left-4" />
            Continue with Apple
          </button>
        </div>
        <p className="py-6 text-center">or</p>
        <div className="flex gap-4 pb-6">
          <div className="flex flex-col">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              className="border border-slate-400 rounded-xl px-6 py-2 outline-0"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              className="border border-slate-400 rounded-xl px-6 py-2 outline-0"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col pb-6">
            <label htmlFor="email">Work Email Address</label>
            <input
              type="email"
              className="border border-slate-400 rounded-xl py-2 outline-0 px-6"
            />
          </div>
          <div className="flex flex-col pb-6">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="border border-slate-400 rounded-xl py-2 outline-0 px-6"
              placeholder=""
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
