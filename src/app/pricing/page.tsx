"use client";

import React, { isValidElement } from "react";
import { useRouter } from "next/navigation";

const Pricingplans = (): React.ReactNode => {
  const { push } = useRouter();

  const plans = [
    {
      plan: "Free",
      price: 0,
      validity: "Valid for 3 months",
      benefits: ["Two Benefits", "Two Benefits"],
    },
    {
      plan: "Standard",
      price: 30,
      validity: "Valid for 6 months",
      benefits: ["Three Benefits", "Three Benefits", "Three Benefits"],
    },
    {
      plan: "Free",
      price: 50,
      validity: "Valid for 12 months",
      benefits: [
        "Five Benefits",
        "Five Benefits",
        "Five Benefits",
        "Five Benefits",
        "Five Benefits",
      ],
    },
  ];

  return (
    <div className=" h-[1000px]">
      <div className=" h-[500px] bg-[rgb(255,215,239)] flex flex-col gap-5 justify-center items-center">
        <h1 className=" text-4xl">Explore Our Pricing Plans</h1>
        <p>Pick a pricing plan that works for you.</p>
      </div>
      <div className=" h-[600px] flex justify-center items-center gap-8 py-3 ">
        {plans.map((plan, id) => {
          return (
            <div
              className=" w-[300px] bg-white  bottom-3 border-[2px] border-black rounded-lg"
              key={id}
            >
              <div className=" bg-[rgb(255,196,3)] p-4 flex flex-col gap-6 rounded-tr-lg rounded-tl-lg">
                <div>
                  <p>Free</p>
                  <p className=" relative">
                    US$ <strong className=" text-6xl">{plan.price}</strong>
                  </p>
                </div>
                <p>Use this area to describe one of your memberships.</p>
                <p>{plan.validity}</p>
                <div className=" flex justify-center">
                  <button className=" bg-black text-white p-3 rounded-lg w-[90%]">
                    Get Started
                  </button>
                </div>
              </div>
              <div className=" bg-[rgb(255,215,239)] h-[200px] p-3 flex flex-col rounded-br-lg rounded-bl-lg">
                <div className=" h-full flex flex-col gap-3">
                  {plan.benefits.map((benefit, id) => {
                    return <p key={id}>{benefit}</p>;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" w-full flex justify-center items-center mt-12">
        <button
          onClick={() => {
            push("/");
          }}
          className=" bg-[rgb(255,196,3)] py-3 px-6 rounded-lg text-white border-black border-[2px]"
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default Pricingplans;
