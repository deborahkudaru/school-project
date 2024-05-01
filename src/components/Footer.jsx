import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="px-32 bg-sky-100 text-slate-500 font-semibold pt-20">
      <div className=" flex justify-between ">
        <div>
          <Logo />
          <input type="text" className="input" />
          <button>Subscribe</button>

          <div className="flex gap 2">
            <div>
              <h4>Contact Us</h4>
              <p>deborahkudaru@gmail.com</p>
              <p>09161235877</p>
            </div>
            <div>
              <h4>Location</h4>
              <p>University Of Jos, Plateau State</p>
            </div>
          </div>
        </div>
        <div className="flex gap-10 text-sm">
          <div>
            <h3 className="font-bold text-xl text-black">Company</h3>
            <p>About Us</p>
            <p>Why Portal</p>
            <p>Testimonial</p>
            <p>Promotions</p>
            <p>Forum</p>
          </div>
          <div>
            <h3 className="font-bold text-xl text-black">Help</h3>
            <p>Contact Us</p>
            <p>Our Job</p>
            <p>My Account</p>
            <p>My Career</p>
          </div>
          <div>
            <h3 className="font-bold text-xl text-black">Jobs</h3>
            <p>Graphic Design</p>
            <p>Data Analyst</p>
            <p>Business Model</p>
            <p>Project Manager</p>
            <p>Other Jobs</p>
          </div>
        </div>
      </div>

      {/* <footer className="bg-black text-white py-20">2024 WorkBuddy</footer> */}
    </div>
  );
};

export default Footer;
