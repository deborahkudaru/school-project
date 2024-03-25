import React from "react";
import form from "../images/form.png";

const Howto = () => {
  return (
    <div className="flex gap-10 px-48 pt-20 ">
      <div className="w-2/3">
        <h2 className="text-4xl font-bold w-3/4">
          How It's Work Creative Jobs & Quickly Feature
        </h2>
        <div>
          <h4 className="text-xl pt-5 font-bold">Register Account</h4>
          <p className="text-slate-500 font-medium">
            First, you need to make an account
          </p>

          <h4 className="text-xl pt-5 font-bold">Create Resume</h4>
          <p className="text-slate-500 font-medium">
            Secons, create a resume to your job
          </p>

          <h4 className="text-xl pt-5 font-bold">Find Job</h4>
          <p className="text-slate-500 font-medium">
            Third, search for appropriate job
          </p>

          <h4 className="text-xl pt-5 font-bold">Apply Job</h4>
          <p className="text-slate-500 font-medium">
            Fourth, apply to the company and wait
          </p>
        </div>
      </div>
      <div>
        <img src={form} alt="form-for-resume-creation" />
      </div>
    </div>
  );
};

export default Howto;
