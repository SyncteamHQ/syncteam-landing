import Image from "next/image";
import { creatorBountyBanner } from "../../../public/assets/landing";

const BountyBanner = () => {
  return (
    <div
      id="bounties"
      className="bg-[#212121] py-20 text-white flex gap-4 justify-around lg:flex-row xl:flex-row flex-col lg:mt-24 xl:mt-24 md:mt-24  mt-20 w-full mx-auto lg:px-16 xl:px-16 md:px-16 px-4"
    >
      <Image
        width={0}
        height={0}
        alt="bounty banner"
        src={creatorBountyBanner}
        className="w-full lg:w-1/2"
      />
      <div className="flex gap-1 sm:gap-4 mt-8 w-full lg:w-2/4 text-justify justify-around">
        <Image
          className="w-full max-w-[172px] sm:max-w-[272px]"
          src="/assets/landing/creator_bounty_banner_2.svg"
          alt="bounty banner"
          width={0}
          height={0}
        />
        <p className="px-2 flex sm:hidden items-center justify-center w-auto min-w-[140px]">
          Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas
        </p>
        <p className="hidden sm:flex items-center justify-center min-w-[140px] max-w-[405px]">
          Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
          lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
          elementum tellus. Curabitur tempor quis eros tempus lacinia. Nam
        </p>
      </div>
    </div>
  );
};

export default BountyBanner;
