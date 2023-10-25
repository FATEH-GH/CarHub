"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

const NavBar = () => {
  return (
    <header className="w-full absolute z-10 ">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 ">
        <Link href="./" className="flex-center ">
          <Image
            src="/CarHub-logo.png"
            alt="Car Hub Logo"
            width={100}
            height={90}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyle="text-primary-blue rounded-full min-w-[130px] bg-amber-800 text-white"
        />
      </nav>
    </header>
  );
};

export default NavBar;
