import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export const MenuSection = () => {
  return (
    <div className="lg:hidden bg-white border-b shadow-sm flex flex-col  space-y-4 p-4 cursor-pointer">
      <text>Features</text>
      <text>MarketPlace</text>
      <text>Company</text>
      <text>Team</text>
      <text>Contact</text>
      <button className="border border-purple-700 text-purple-700 p-1 pl-5 pr-5 rounded-lg">
        Login
      </button>
      <button className="flex justify-center items-center p-1 pl-5 pr-5 font-normal space-x-2 bg-purple-700 text-white rounded-lg">
        <text>Add post</text>
        <FaLongArrowAltRight />
      </button>
    </div>
  );
};
