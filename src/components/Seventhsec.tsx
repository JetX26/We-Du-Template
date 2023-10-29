"use client";

import React from "react";
import Tick from "../app/assets/wix images/check.png";
import Image from "next/image";



const Seventhsec = (): React.ReactNode => {

  const benefits: string[] = [
    `I'm a benefit`,
    `I'm a benefit`,
    `I'm a benefit`,
    `I'm a benefit`,
  ];

  return (
    <div className=" h-[800px] flex justify-center items-center xl:text-lg xxl:text-lg sm:h-auto">
      <div className=" w-full h-full bg-[#edede9] flex sm:flex-col">
        <div className=" w-1/2 h-full flex justify-center sm:w-full">
          <div className=" flex flex-col justify-center h-full gap-6 w-[60%] sm:w-full sm:p-6">
            <h1 className=" text-3xl">
              Explore Our <br></br> Pricing Options
            </h1>
            <p className=" text-lg">
              {`I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.`}
            </p>
            <button className=" p-2 bg-black text-white rounded-md w-[50%]">
              See More
            </button>
          </div>
        </div>
        <div className=" w-1/2 h-full flex justify-center items-center sm:w-full">
          <div className=" w-[65%] sm:w-full sm:p-6">
            <div className=" bg-black  text-stone-50 p-6 flex flex-col gap-4 rounded-tr-lg rounded-tl-lg">
              <h1 className=" text-3xl">Premium</h1>
              <h2 className=" text-2xl">
                <span className=" text-6xl">50</span> $US
              </h2>
              <p>Every month</p>
              <p>Use this area to describe one of your memberships.</p>
              <p>Valid for 12 months</p>
              <div className=" flex justify-center">
                <button className=" bg-white rounded-lg text-black p-4 w-[300px]">
                  Get Started
                </button>
              </div>
            </div>
            <div className=" bg-pink-200 p-6 flex flex-col gap-2 border-black border-[2px] rounded-bl-lg rounded-br-lg">
              <div className=" flex flex-col gap-4">
                {benefits.map((benefit, id) => {
                  return (
                    <div key={id} className=" flex gap-4 items-center">
                      <Image
                        className=" bg-black p-1 rounded-full"
                        width={20}
                        height={10}
                        src={Tick}
                        alt="Check Mark"
                      ></Image>
                      <p key={id}>{benefit}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Seventhsec;


