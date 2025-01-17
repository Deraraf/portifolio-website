import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="pb-20 pt-30">
      <div>
        <Spotlight
          className="-top-40 -left-10  md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="sm:flex justify-center relative z-10 ">
        <div>
          <Image
            src="/portifolio.jpg"
            alt="pic"
            width={500}
            height={500}
            className="mt-2"
          />
        </div>
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center">
          <h1 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Daynamic web magic Next.js
          </h1>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concept into Seamless User Experiance"
          />
          <p className="text-center tracking-wider mb-4 text-sm md:text-lg lg:text-2xl mt-2">
            Hi, I&apos;m Derara Next.js Developer Based Croatia
          </p>
          <Link href={"/about"}>
            <MagicButton
              title="Show My Work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
