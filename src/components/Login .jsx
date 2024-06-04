import React from "react";
import Logo from "./Logo";

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
      <a href="">Sign Up</a>
    </div>
  );
};

export default Apply;