import React from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Workersignup = () => {
  return (
    <div className="px-48 pt-16">
      <Logo />
      <p>Looking to hire</p>
      <Link>Apply as employer</Link>
      <div className="flex flex-col gap-3 mt-5">
        <h2 className="text-2xl font-semibold">Sign up to hire</h2>
        <button className="bg-blue-500 text-gray-50 font-semibold w-2/3 m-auto pb-3 rounded-lg">
          <FaGoogle className="relative top-5 left-14 text-rose-500" />
          Continue with Google
        </button>
        <button className="border-2 border-black w-2/3 m-auto font-semibold pb-3 rounded-lg mt-2">
          <FaApple className="relative top-5 left-14" />
          Continue with Apple
        </button>
        <p>or</p>
        <label htmlFor="">First Name</label>
        <input type="text" />
        <label htmlFor="">Last Name</label>
        <input type="text" />
        <label htmlFor="email">Work Email Address</label>
        <input type="email" />
        <label htmlFor="password">Password</label>
        <input type="password" />
        <button>Create my account</button>
        <p>
          Already have an account?{" "}
          <Link
            to="login"
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
