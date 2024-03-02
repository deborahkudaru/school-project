import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Router>
      <nav className="bg-slate-200 shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-gray-900 text-xl font-bold">
            Workbuddy
          </Link>
          <ul className="flex space-x-5">
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
      </nav>
      <Routes>
        <Route exact path="/" render={() => <div>Home Page</div>} />
        <Route path="/finder" render={() => <div>Finder Page</div>} />
        <Route path="/employer" render={() => <div>Employer Page</div>} />
        <Route path="/login" render={() => <div>Login Page</div>} />
        <Route path="/signup" render={() => <div>Sign up Page</div>} />
      </Routes>
    </Router>
  );
};

export default Navbar;
