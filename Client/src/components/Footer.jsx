import React from "react";
import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-neutral-900 text-gray-50 text-sm font-semibold px-32 py-16">
      <p className="flex gap-1">
        <MdOutlineCopyright />
        2024 Job Portal. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
 