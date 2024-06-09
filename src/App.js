import React from "react";
// import Header from "./components/Header";
import Body from "./components/Body";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login ";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      {/* <Body /> */}

      <Routes>
        <Route path="/" element={<Body />} />
        {/* <Route path="/finder" element={<Find />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        {/* <Route path="/search" element={<Find />} /> */}
        {/* <Route path="/how-to-apply" element={<HowToApply />} /> */}
        {/* <Route path="/talent" /> */}
      </Routes>
    </div>
  );
};

export default App;
