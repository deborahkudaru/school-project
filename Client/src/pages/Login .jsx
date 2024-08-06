import React, { useState } from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import google from "../images/google.png";
import { FaRegUser } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import auth from "../Firebase";
import { 
  // createUserWithEmailAndPassword, 
  signInWithEmailAndPassword
 } from "firebase/auth";


const Apply = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await createUserWithEmailAndPassword (auth, email, password);
  //     const user = auth.currentUser;
  //     console.log(user);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <div className="px-48 pt-6 bg-gray-50 pb-10">
      <Logo />
      <div className="mt-16 border border-slate-500 w-1/2 text-center m-auto py-14 rounded-xl">
        <h2 className="text-2xl font-semibold">Login To Workbuddy</h2>

        <form action="" onSubmit={logIn}>
          <div className="border-2 border-slate-200 bg-gray-50 px-1 rounded-lg pb-3 mt-5 w-2/3 m-auto">
            <FaRegUser className="relative left-7 top-5" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Username or Email"
              className="bg-gray-50 outline-0 border-0"
            />
          </div>
          <div className="border-2 border-slate-200 bg-gray-50 px-1 rounded-lg pb-3 mt-5 w-2/3 m-auto">
            <FiLock className="relative left-7 top-5" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              className="bg-gray-50 outline-0 border-0"
            />
          </div>

          <button
            className="block mt-5 ml-20 bg-violet-400 hover:bg-violet-500 py-3 px-32 rounded-lg text-gray-50 font-semibold mb-5"
            type="submit"
          >
            Continue
          </button>
          <p>or</p>
          <div className="flex flex-col gap-3 mt-5">
            <button className="border border-slate-500 font-semibold w-2/3 m-auto pb-3 rounded-lg">
              <img
                src={google}
                alt="google-logo"
                className="w-4 relative left-14 top-5"
              />
              Continue with Google
            </button>
            <button className="border border-slate-500 w-2/3 m-auto font-semibold pb-3 rounded-lg mt-2">
              <FaApple className="relative top-5 left-14" />
              Continue with Apple
            </button>
          </div>
          <p className="mt-20 mb-10">Don't have a WorkBuddy account?</p>

          <Link
            to="/signup"
            className="border border-violet-400 rounded-lg px-24 text-violet-400 font-semibold py-2 hover:bg-violet-500 hover:border-violet-500 hover:text-gray-50"
          >
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Apply;
