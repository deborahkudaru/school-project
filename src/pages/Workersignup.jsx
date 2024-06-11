import React from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Workersignup = () => {
  return (
    <div className="px-48 pt-10">
    <Logo />
    <div className="flex flex-row gap-2 justify-end">
      <p>Looking to hire?</p>
      <Link to="/employer-signup" className="text-violet-400">
        Apply as an employer
      </Link>
    </div>
    <div className=" mt-5 w-1/2 m-auto text-center">
      <h2 className="text-2xl font-semibold">Sign up to apply</h2>
      <div className="flex gap-3">
        <button className="bg-blue-500 text-gray-50 font-semibold w-2/3 m-auto pb-3 rounded-lg">
          <FaGoogle className="relative top-5 left-5 text-rose-500" />
          Continue with Google
        </button>
        <button className="border-2 border-black w-2/3 m-auto font-semibold pb-2 rounded-lg mt-2">
          <FaApple className="relative top-5 left-7" />
          Continue with Apple
        </button>
      </div>
      <p>or</p>
      <div className="flex gapa-2">
        <div className="flex flex-col">
          <label htmlFor="">First Name</label>
          <input type="text" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Last Name</label>
          <input type="text" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <label htmlFor="email">Work Email Address</label>
          <input type="email" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input type="password" />
        </div>
      </div>

      <button className="block">Create my account</button>
      <p>
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

export default Workersignup;
