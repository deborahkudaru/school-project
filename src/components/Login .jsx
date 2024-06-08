import React from "react";
import Logo from "./Logo";
import SignUp from "./SignUp"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Apply = () => {
  return (
    <div>
      <Logo />
      <h2>Login To Workbuddy</h2>
      <input type="text" placeholder="Username or Email" />
      <button>Continue</button>
      <p>or</p>
      <button>Continue with Google</button>
      <button>Continue with Apple</button>
      <p>Don't have a WorkBuddy account?</p>
      <Router>
        <Link to="/signup">Sign Up</Link>
        <Routes>
          <Route path="/signup" component={SignUp}/>
        </Routes>
      </Router>
    </div>
  );
};

export default Apply;
