import React from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="px-48 pt-6 bg-gray-50">
      <Logo />
      <div className="mt-16 w-1/2 m-auto text-center">
        <h2 className="text-3xl font-bold">
          Join as an Employer or Worker
        </h2>
        <div className="flex gap-5 text-3xl my-10 text-violet-500">
          <Link
            to="/employer-signup"
            className="border-2 border-violet-400 px-6 py-12 rounded-xl hover:bg-violet-400 hover:text-gray-50"
          >
            Join as an Employer
          </Link>
          <Link
            to="/worker-signup"
            className="border-2 border-violet-400 px-10 py-12 rounded-xl  hover:bg-violet-400 hover:text-gray-50"
          >
            Join as a worker
          </Link>
        </div>
        <p className="pb-10">
          Already have an account?{" "}
          <Link to="/login" className="text-violet-600 underline underline-offset-1">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
