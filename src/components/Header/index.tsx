import React from "react";
import { FaLongArrowAltRight, FaAngleDown } from "react-icons/fa";


interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <div
      className={`h-20 p-6 fixed top-0 left-0 right-0 flex flex-row items-center justify-between border-b-2 shadow-sm ${className}`}
    >
      <div className="flex flex-row space-x-2  divide-x-2">
        <text className="text-purple-700 font-bold text-[24px]">
          ShopDigest
        </text>
        <select className="bg-white flex flex-row items-center pl-1 font-normal  text-gray-600 ">
          <option className="p-4" value="audi">
            Shopify
          </option>
        </select>
      </div>
      <div className="flex flex-row items-center pl-1 font-normal space-x-2  text-gray-600">
        <text>Features</text>
        <text>Marketplace</text>
        <div className="flex flex-row items-center pl-1 font-normal  text-gray-600">
          <text>Company</text>
          <FaAngleDown />
        </div>
        <text>Team</text>
        <text>Contact</text>
      </div>
      <div className=" flex space-x-2">
        <button className="border border-purple-700 text-purple-700 p-1 pl-5 pr-5 rounded-lg">
          Login
        </button>
        <button className="flex  items-center p-1 pl-5 pr-5 font-normal space-x-2 bg-purple-700 text-white rounded-lg">
          <text>Add post</text>
          <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
};
