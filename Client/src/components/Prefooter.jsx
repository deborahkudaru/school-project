import React from "react";
import Logo from "./Logo";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Prefooter = () => {
  return (
    <div className="px-32 pb-10 bg-sky-100 text-slate-500 font-semibold pt-20">
      <div className=" flex justify-between ">
        <div>
          <Logo />
          <div className="border-2 border-slate-400 rounded-lg mt-5 px-5 pb-3">
            <FaMagnifyingGlass className="relative top-6 left-3"/>
            <input
              type="email"
              placeholder="Email address"
              className="px-10 bg-sky-100 border-0 outline-none"
            />
            <button className="text-sky-100 bg-violet-400 px-5 py-2  font-semibold text-sm rounded-md ml-10">
              Subscribe
            </button>
          </div>

          <div className="flex gap-14 pt-10 text-sm">
            <div>
              <h4 className="text-black font-normal">Contact Us</h4>
              <p>deborahkudaru@gmail.com</p>
              <p>09161235877</p>
            </div>
            <div>
              <h4 className="text-black font-normal">Location</h4>
              <p>University Of Jos, Plateau State</p>
            </div>
          </div>
        </div>
        <div className="flex gap-20 text-sm">
          <div>
            <h3 className="font-bold text-xl text-black pb-4">Company</h3>
            <p className="mb-3">About Us</p>
            <p className="mb-3">Why Portal</p>
            <p className="mb-3">Testimonial</p>
            <p className="mb-3">Promotions</p>
            <p className="mb-3">Forum</p>
          </div>
          <div>
            <h3 className="font-bold text-xl text-black pb-4">Help</h3>
            <p className="mb-3">Contact Us</p>
            <p className="mb-3">Our Job</p>
            <p className="mb-3">My Account</p>
            <p className="mb-3">My Career</p>
          </div>
          <div>
            <h3 className="font-bold text-xl text-black pb-4">Jobs</h3>
            <p className="mb-3">Graphic Design</p>
            <p className="mb-3">Data Analyst</p>
            <p className="mb-3">Business Model</p>
            <p className="mb-3">Project Manager</p>
            <p className="mb-3">Other Jobs</p>
          </div>
        </div>
      </div>

      {/* <footer className="bg-black text-white py-20">2024 WorkBuddy</footer> */}
    </div>
  );
};

export default Prefooter;
