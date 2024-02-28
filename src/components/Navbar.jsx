import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const NavRef = useRef();

  const showNavbar = () => {
    NavRef.current.classList.toggle("responsive_nav");
  };

  return (
    <Router>
      <div>
        <Link
          to="/"
          className="logo"
          style={{ textDecoration: " none", color: "black" }}
        >
          Workbuddy
        </Link>
        <nav ref={NavRef}>
          <ul className="nav-links">
            <li>
              <Link
                to="/seekers"
                style={{ textDecoration: " none", color: "black" }}
              >
                For Job seekers
              </Link>
            </li>
            <li>
              <Link
                to="/employers"
                style={{ textDecoration: " none", color: "black" }}
              >
                For employers
              </Link>
            </li>
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
          </ul>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
      <Routes>
        <Route exact path="/" render={() => <div>Home Page</div>} />
        <Route path="/seekers" render={() => <div>Seekers Page</div>} />
        <Route path="/employers" render={() => <div>Employers Page</div>} />
        <Route path="/login" render={() => <div>Login Page</div>} />
        <Route path="/sign-up" render={() => <div>Sign Up Page</div>} />
      </Routes>
    </Router>
  );
};

export default Navbar;
