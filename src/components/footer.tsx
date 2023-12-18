import Image from "next/image";
import { syncteamLogoDark } from "../../public/assets/landing";

const Footer = () => {
  return (
    <div className="bg-black py-8 px-4 sm:px-10 lg:px-16 flex sm:items-center justify-between flex-col sm:flex-row">
      <Image
        width={150}
        height={150}
        src={syncteamLogoDark}
        alt="bounty banner"
        className="h-auto w-[120px] sm:w-[150px]"
      />
      <p className="text-white text-[15px]">
        © 2023 Syncteam. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
