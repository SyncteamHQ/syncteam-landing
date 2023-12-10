import Image from "next/image";
import { colorFrame, howItWorksSVG } from "../../../public/assets/landing";

const HowItWorks = () => {
  return (
    <div id="howitworks" className="flex flex-col w-full justify-around">
      <Image
        width={1}
        height={1}
        alt="bounty banner"
        src={howItWorksSVG}
        className="w-full h-full"
      />
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
