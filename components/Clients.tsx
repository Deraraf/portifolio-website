import React from "react";
import { InfiniteMovingCards } from "./ui/InfinitMovingCards";
import { companies, testimonials } from "@/data";
import Image from "next/image";

const Clients = () => {
  return (
    <div id="testimonials">
      <h1 className="heading">
        Kind Word From <span className="text-purple"> Satisfied Client </span>
      </h1>

      <div className="flex flex-col items-center justify-center max-lg mt-10 ">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map(({ id, name, img, nameImg }) => (
            <div className="flex md:max-w-60 max-w-32 gap-2" key={id}>
              <Image
                src={img}
                alt={name}
                className="md:w-10 w-5"
                width={20}
                height={20}
              />
              <Image
                src={nameImg}
                alt={name}
                width={id === 4 || id === 5 ? 100 : 150}
                height={id === 4 || id === 5 ? 100 : 150}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
