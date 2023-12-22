"use client";

import Image from "next/image";
import {
  colorFrame,
  howItWorksDarkSVG,
  howItWorksSVG,
} from "../../../public/assets/landing";
import { useTheme } from "next-themes";

const HowItWorks = () => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div id="howitworks" className="flex flex-col w-full justify-around">
      {currentTheme === "dark" ? (
        <Image
          width={1}
          height={1}
          alt="bounty banner"
          src={howItWorksDarkSVG}
          className="w-full h-full"
        />
      ) : (
        <Image
          width={1}
          height={1}
          alt="bounty banner"
          src={howItWorksSVG}
          className="w-full h-full"
        />
      )}

      <Image
        width={1}
        height={1}
        alt="frame"
        src={colorFrame}
        className="w-full h-full"
      />
    </div>
  );
};

export default HowItWorks;
