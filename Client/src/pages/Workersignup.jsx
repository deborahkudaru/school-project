import React, { useState } from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import google from "../images/google.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

const Workersignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: Fname,
          lastName: Lname,
        });
      }
      console.log("user registered successfully");
      toast.success("User registered successfully", { position: "top-center" });
    } catch (error) {
      console.log(error.message);
      toast.success(error.message, { position: "bottom-center" });
    }
  };

  return (
    <div className="px-48 pt-10 bg-gray-50">
      <Logo />
      <div className="flex flex-row gap-2 justify-end">
        <p>Looking to hire?</p>
        <Link
          to="/employer-signup"
          className="text-violet-400 hover:text-violet-300"
        >
          Apply as an employer
        </Link>
      </div>

      <div className=" mt-5 w-1/2 m-auto">
        <h2 className="text-4xl font-semibold mb-10  text-center">
          Sign up for Work
        </h2>

        <form action="" onSubmit={handleRegister}>
          <div className="flex gap-3">
            <button className="border border-slate-500 font-semibold w-2/3 m-auto pb-3 rounded-lg">
              <img
                src={google}
                alt="google-logo"
                className="w-4 relative left-4 top-5"
              />
              Continue with Google
            </button>
            <button className="border border-slate-500 w-2/3 m-auto font-semibold pb-3 rounded-lg ">
              <FaApple className="relative top-5 left-4" />
              Continue with Apple
            </button>
          </div>

          <p className="py-6 text-center">or</p>

          <div className="flex gap-4 pb-6">
            <div className="flex flex-col">
              <label htmlFor="">First Name</label>
              <input
                type="name"
                value={Fname}
                onChange={(e) => setFname(e.target.value)}
                required
                className="border border-slate-400 rounded-xl py-2 px-6 outline-0"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Last Name</label>
              <input
                type="name"
                value={Lname}
                onChange={(e) => setLname(e.target.value)}
                required
                className="border border-slate-400 rounded-xl px-6 py-2 outline-0"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col pb-6">
              <label htmlFor="email">Work Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border border-slate-400 rounded-xl py-2 px-6 outline-0"
              />
            </div>
            <div className="flex flex-col pb-6">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border border-slate-400 rounded-xl py-2 px-6 outline-0"
              />
            </div>
          </div>

          <button
            className="block text-center bg-violet-400 text-gray-50 px-4 py-2 rounded-xl font-semibold relative left-40 mb-10"
            type="submit"
          >
            Create my account
          </button>
          <p className="text-center mb-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-violet-600 underline underline-offset-1"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Workersignup;
