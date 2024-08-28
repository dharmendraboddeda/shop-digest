import React from "react";
import { Inter } from "next/font/google";
import HeaderLayout from "@/layouts/headerLayout";

const inter = Inter({ subsets: ["latin"] });

function HomeScreen() {
  return (
    <div className="">
      <h1 className="">Home</h1>
    </div>
  );
}

export default HeaderLayout(HomeScreen);
