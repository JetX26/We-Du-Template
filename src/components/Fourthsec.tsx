"use client";

import Image from "next/image";
import React from "react";
import FourthSecImg from "../app/assets/How-We-Work.png";

const Fourthsec = (): React.ReactNode => {
  const herodetails: string[] = [
    "All-In One Toolkit",
    "Integrated File Sharing",
    "Total Design Freedom",
  ];

  return (
    <div className=" p-16 sm:p-10 w-full flex sm:flex-col md:flex-col justify-evenly flex-row-reverse items-center gap-16 xl:text-lg xxl:text-lg">
      <div className="flex flex-col gap-7 w-[50%] sm:w-full">
        <h1 className=" font-bold text-4xl">
          Built for Creatives, <br></br> by Creatives
        </h1>
        <p>
          {`I'm a paragraph. Click here to add your own text and edit  me. It's
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I'm a great place for you to
            tell a story and let your users know a little more about you.`}
        </p>
        <div className="flex gap-3 xl:w-full xxl:w-full">
          {herodetails.map((detail, id) => {
            return (
              <p className=" w-[100px] xl:w-auto xxl:w-auto" key={id}>
                {detail}
              </p>
            );
          })}
        </div>
      </div>
      <div className=" w-[50%] flex justify-center">
        <Image
          height={500}
          width={500}
          alt="hero image"
          src={FourthSecImg}
        ></Image>
      </div>
    </div>
  );
};

export default Fourthsec;
