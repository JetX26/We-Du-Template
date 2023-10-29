"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useGlobalStore } from "../app/helper/store";



const Navbar = (): React.ReactNode => {
  const { push } = useRouter();

  const buttons: string[] = ["Home", "Product", "Pricing Plans", "Contact", "Login"];

  const pricingPlanButton = (buttonText: string) => {
    if (buttonText === "Pricing Plans") {
      push("/pricing");
    }
  };

  const { setShowBurger } = useGlobalStore()


  return (
    <div className=" flex xs:gap-4 justify-between w-full px-16 py-10 sm:text-sm sm:p-6 xl:text-lg xxl:text-lg">
      <div>
        <h1 className=" text-2xl">
          <strong>WeDu</strong>
        </h1>
        <p>Communicate. Collaborate. Create.</p>
      </div>
      <div className=" flex gap-7 lg:gap-4 sm:hidden md:hidden items-center">
        {buttons.map((button, id) =>
          button !== "Pricing Plans" ? (
            <a href={`#${button}`} key={id}><button >{button}</button></a>
          ) : (
            <button
              onClick={() => {
                push("/pricing");
              }}
              key={id}
            >
              {button}
            </button>
          )
        )}
        <button
          onClick={() => {
            push("/pricing");
          }}
          className=" sm:hidden md:hidden ml-3 bg-[#ffd60a] p-2.5 rounded-md border-[1px] border-black font-bold"
        >
          Get Started
        </button>
      </div>
      <button onClick={(e) => {
        e.preventDefault()

        setShowBurger(true)
        console.log('burger is shown')
      }} className=" flex flex-col gap-2 lg:hidden xl:hidden xxl:hidden sm:justify-center">
        <div className=" w-[30px] h-[2px] bg-black"></div>
        <div className=" w-[30px] h-[2px] bg-black"></div>
        <div className=" w-[30px] h-[2px] bg-black"></div>
      </button>
    </div>
  );
};

export default Navbar;




