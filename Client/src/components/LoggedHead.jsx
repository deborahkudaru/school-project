import React from "react";
import Logo from "./Logo";
import Nav from "./LoggedNav";
import UserIcon from "./UserIcon";

const LoggedHead = () => {
  return (
    <div className="mx-auto flex w-full items-center justify-between flex-wrap z-50 p-4 md:pt-8 px-48 bg-sky-100">
      <Logo />
      <Nav />
      <UserIcon />
    </div>
  );
};

export default LoggedHead;
