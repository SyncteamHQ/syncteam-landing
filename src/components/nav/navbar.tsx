"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import { darkLightMode, logoBlack } from "../../../public/assets/landing";

interface INav {
  title: string;
  link: string;
}

export const NavItems: INav[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Partners",
    link: "#partners",
  },
  {
    title: "Features",
    link: "#features",
  },
  {
    title: "How it Works",
    link: "#howitworks",
  },
  {
    title: "Road Map",
    link: "#roadmap",
  },
];

const Header = () => {
  const [show, setShow] = useState(false);

  const toggleMobile = () => {
    setShow(true);
  };

  return (
    <>
      <div className="hidden mt-10 md:block top-0 left-0 w-full bg-opacity-75 p-4">
        <div className="flex justify-between sm:px-4 md:px-2 xl:px-16">
          <Image
            alt="logo"
            width={180}
            src={logoBlack}
            className="md:w-36 lg:w-48"
          />
          <div className="flex items-center justify-center">
            {NavItems.map((item, index) => (
              <div className="" key={index}>
                <Link
                  href={item.link}
                  className="cursor focus:text-[#02EC88] active:text-[#02EC88]"
                >
                  <p className="flex md:mx-2 lg:mx-4 xl:mx-6 xl:text-lg hover:text-[#02EC88]">
                    {item.title}
                  </p>
                </Link>
              </div>
            ))}
            <Link className="flex items-center justify-center" href="#">
              <p className="text-white bg-gradient-to-r from-[#02EC88] to-[#5CB25D] px-3 py-2 rounded-full">
                Bounties
              </p>
            </Link>
            <Image
              width="36"
              height="36"
              alt="mode icon"
              src={darkLightMode}
              className="sm:mx-2 lg:mx-4 xl:mx-6 md:w-6 lg:w-8 "
            />
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="pt-10">
        <div className="flex md:hidden mx-6 sm:mx-8">
          <div className="w-full flex items-center justify-between">
            <Link href="/">
              <Image
                alt="logo"
                width={150}
                src={logoBlack}
                onClick={() => setShow(false)}
              />
            </Link>
            <AiOutlineMenu color="black" size={24} onClick={toggleMobile} />
          </div>
          {show ? (
            <div className="fixed inset-0 h-screen bg-white block ">
              <div className="flex flex-col pt-11 font-dmSans text-lg mx-6 sm:mx-8">
                <div className="flex justify-between">
                  <Image src={logoBlack} alt="logo" width={150} />
                  <AiOutlineCloseCircle
                    size={24}
                    onClick={() => setShow(false)}
                  />
                </div>
                {NavItems.map((item, index) => (
                  <div className="" key={index}>
                    <Link
                      className="cursor focus:text-purple-500 active:text-purple-500"
                      href={item.link}
                    >
                      <p className="mx-2 mt-8" onClick={() => setShow(false)}>
                        {item.title}
                      </p>
                    </Link>
                  </div>
                ))}
                <Link className="py-6" href="">
                  <p className="text-white text-center w-[120px] bg-gradient-to-r from-[#02EC88] to-[#5CB25D] px-3 py-2 rounded-full">
                    Bounties
                  </p>
                </Link>
                <Image
                  className="mx-4"
                  src={darkLightMode}
                  width="36"
                  height="36"
                  alt="mode icon"
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Header;
