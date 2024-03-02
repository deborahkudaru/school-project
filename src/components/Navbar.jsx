import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <Router>
      <div id="header">
        <Link
          to="/"
          className="logo"
          style={{ textDecoration: " none", color: "black" }}
        >
          Workbuddy
        </Link>
        <ul className="nav-links navbar">
          <li>
            <Link
              to="/seekers"
              style={{ textDecoration: " none", color: "black" }}
            >
              Find work
            </Link>
          </li>
          <li>
            <Link
              to="/employers"
              style={{ textDecoration: " none", color: "black" }}
            >
              Post a Job
            </Link>
          </li>
          <li>
            <Link
              to="/application"
              style={{ textDecoration: " none", color: "black" }}
            >
              Application
            </Link>
          </li>
          <div className="login-signup">
            <li>
              <Link
                to="/login"
                style={{ textDecoration: " none", color: "black" }}
                className="login"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/sign-up"
                style={{ textDecoration: " none", color: "white" }}
                className="signup"
              >
                Sign up
              </Link>
            </li>
          </div>
        </ul>
      </div>
      <Routes>
        <Route exact path="/" render={() => <div>Home Page</div>} />
        <Route path="/seekers" render={() => <div>Seekers Page</div>} />
        <Route path="/employers" render={() => <div>Employers Page</div>} />
        <Route
          path="/application"
          render={() => <div>Applications Page</div>}
        />
        <Route path="/login" render={() => <div>Login Page</div>} />
        <Route path="/sign-up" render={() => <div>Sign Up Page</div>} />
      </Routes>
    </Router>
  );
};

export default Navbar;
