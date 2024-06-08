import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { BiMenuAltRight } from "react-icons/bi";
// import { CiMenuFries } from "react-icons/ci";
import { RiMenu3Fill } from "react-icons/ri";
import { X } from "lucide-react";
import Login from "./Login ";

const NavLinks = () => {
  return (
      <ul className="flex space-x-12 nav  font-medium ">
        <li>
          <Link
            to="/"
            className="text-slate-500  hover:text-slate-950 transition duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/category"
            className="text-slate-500 hover:text-slate-950 transition duration-300"
          >
            Category
          </Link>
        </li>
        <li>
          <Link
            to="/apply"
            className="text-slate-500 hover:text-slate-950 transition duration-300"
          >
            Apply
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-slate-500 hover:text-slate-950 transition duration-300"
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="text-slate-900 transition duration-300 ml-10 border-slate-900 rounded-lg border-2 px-8 py-2"
          >
            Login
          </Link>
        </li>
      </ul>
  );
};

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggleNavbar = () => {
    setisOpen(!isOpen);
  };
  return (
    <Router>
      <nav>
        <div className="w-full justify-between hidden  md:flex">
          <NavLinks />
        </div>
        <div className="md:hidden text-rose-500">
          <button onClick={toggleNavbar} className="object-right">
            {isOpen ? <X /> : <RiMenu3Fill className="text-4xl" />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <ul className="flex flex-col items-center gap-7 basis-full md:pr-20 font-medium">
          <li>
            <Link
              to="/about"
              className="text-slate-400  hover:text-rose-500 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              className="text-slate-400 hover:text-rose-500 transition duration-300"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="/project"
              className="text-slate-400 hover:text-rose-500 transition duration-300"
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-slate-400 hover:text-rose-500 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
      <Routes>
        <Route path="/finder" render={() => <div>Find Page</div>} />
        <Route path="/employer" render={() => <div>Employ Page</div>} />
        <Route path="/login" element={Login} />
        <Route path="/signup" render={() => <div>Sign Up Page</div>} />
      </Routes>
    </Router>
  );
};

export default Navbar;
