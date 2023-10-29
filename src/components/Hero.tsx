"use client";

import Image from "next/image";
import React from "react";
import Heroimage from "../app/assets/main-banner-img.png";

const Hero = (): React.ReactNode => {
  const herodetails: string[] = [
    "Speed & Security",
    "Flexibility & Scalability",
    "Better Collaboration",
  ];

  return (
    <div className=" p-16 sm:p-10 w-full flex sm:flex-col justify-evenly items-center gap-10 xl:text-lg">
      <div className="flex flex-col gap-7">
        <h1 className=" font-bold text-4xl">
          Communicate. Collaborate. Create.
        </h1>
        <p>
          WeDu provides an effective and powerful way to manage your projects
        </p>
        <button className=" bg-black text-white p-2.5 rounded-md ">
          Get Started
        </button>
        <div className="flex gap-3 xl:justify-evenly">
          {herodetails.map((detail, id) => {
            return (
              <p className=" " key={id}>
                {detail}
              </p>
            );
          })}
        </div>
      </div>
      <div>
        <Image
          height={500}
          width={500}
          alt="hero image"
          src={Heroimage}
        ></Image>
      </div>
    </div>
  );
};

export default Hero;
