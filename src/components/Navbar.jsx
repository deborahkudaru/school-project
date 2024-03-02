import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";


const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggleNavbar = () => {
    setisOpen(!isOpen);
  };
  return (
    <Router>
      <nav>
        <div className="container hidden  md:flex ">
          <ul className="flex space-x-5 nav">
            <li>
              <Link
                to="/finder"
                className="text-gray-600 hover:text-slate-950 transition duration-300 font-bold"
              >
                Find
              </Link>
            </li>
            <li>
              <Link
                to="/employer"
                className="text-gray-600 hover:text-slate-950 transition duration-300 font-bold"
              >
                Post
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="text-gray-700 hover:text-gray-600 transition duration-300 border-black border-2 px-4 py-2"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="text-white bg-black hover:text-gray-600 transition duration-300 border-black border-2 px-4 py-2"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar} className="object-right">{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      
    </Router>
  );
};

export default Navbar;
