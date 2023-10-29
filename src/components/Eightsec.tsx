"use client";

import Image from "next/image";
import React from "react";
import WorkingPeople from "../app/assets/wix images/last-sec-photo.png";

const Eightsec = (): React.ReactNode => {
  return (
    <div className=" h-[850px] p-10 flex flex-col items-center gap-12 pt-28 relative ">
      <h1 className=" text-4xl text-center sm:text-2xl">
        Get Ready to Maximize Your Productivity <br></br> With Our Workflow
        Solutions
      </h1>
      <button className=" bg-black p-4 text-white">Get Started</button>
      <Image
        className=" absolute bottom-[-25px] z-10"
        width={1100}
        height={1000}
        alt="People Working"
        src={WorkingPeople}
      ></Image>
    </div>
  );
};

export default Eightsec;
