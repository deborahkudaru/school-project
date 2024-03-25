import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="mx-auto flex w-full items-center justify-between flex-wrap z-50 p-4 md:pt-8 px-48 bg-sky-100">
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
