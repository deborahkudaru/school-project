import React from "react";
import form from "../images/form.png";

const Howto = () => {
  return (
    <div className="px-48 pt-20 bg-indigo-">
      <div className="flex gap-10  -z-50">
        <div className="w-2/3">
          <h2 className="text-4xl font-bold w-3/4">
            How It's Work Creative Jobs & Quickly Feature
          </h2>

          <div className="flex gap-4">
            <div className="flex flex-col gap-10 mt-6 text-indigo-50">
              <p className="px-3 py-1 bg-violet-400 hover:bg-violet-400 rounded-full">
                1
              </p>
              <p className="px-3 py-1 bg-violet-300 hover:bg-violet-400 rounded-full">
                2
              </p>
              <p className="px-3 py-1 bg-violet-300 hover:bg-violet-400 rounded-full">
                3
              </p>
              <p className="px-3 py-1 bg-violet-300 hover:bg-violet-400 rounded-full">
                4
              </p>
            </div>
            <div>
              <h4 className="text-xl pt-5 font-bold text-violet-400">
                Register Account
              </h4>
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
        </div>
        <div>
          <img
            src={form}
            alt="form-for-resume-creation z-20 border-2 border-slate-500"
          />
          {/* <div className="w-full h-full bg-violet-400 relative bottom-52 left-5 -z-10">

        </div> */}
        </div>
      </div>
      <h2 className="text-4xl font-bold mt-28 text-center">Popular Job Categories</h2>
    </div>
  );
};

export default Howto;
