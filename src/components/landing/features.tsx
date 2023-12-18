import React from "react";
import Image from "next/image";

interface Props {
  icon: string;
  title: string;
  description: string;
}

export const FeatureItems: Props[] = [
  {
    icon: "kanban",
    title: "Kanban Board",
    description: `Experience project management like never before. Our Kanban boards are designed with startups in mind, offering a visual and flexible way to organize tasks. It's not just a board; it's your roadmap to success.`,
  },

  {
    icon: "chat_icon",
    title: "Chat",
    description: `Unite your team effortlessly with our intuitive chat system. Say goodbye to scattered conversations and hello to streamlined communication. The conversation flows, and so does your productivity.`,
  },
];

const FeatureCard = ({ icon, title, description }: Props) => {
  return (
    <div className="text-[#1F1F1F] shadow-xl rounded-xl first:odd:mt-16 last:even:mb-16 p-8 max-w-[485px] ">
      <Image
        className="pt-8 sm:pt-20 bg-opacity-0"
        src={`/assets/landing/${icon}.svg`}
        alt={title}
        width={80}
        height={80}
      />
      <h3 className="text-2xl font-bold my-8">{title}</h3>
      <p className="my-8 text-justify">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <div
      id="features"
      className="text-[#1F1F1F] mt-20 sm:mx-4 lg:mt-36 xl:mt-36 md:mt-36 lg:mx-24 xl:mx-48 md:mx-8"
    >
      <h1 className="text-center font-extrabold lg:my-24 xl:my-24 md:my-24 mt-8 text-3xl">
        Features
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 justify-items-center mx-4 sm:mx-8 gap-16">
        {FeatureItems.map((item, index) => (
          <FeatureCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
