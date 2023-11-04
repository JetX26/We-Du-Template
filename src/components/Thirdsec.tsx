"use client";

import React from "react";
import Workflow from "../app/assets/wix images/secondsec-photo1.jpg";
import AllInOne from "../app/assets/wix images/secondsec-photo2.jpg";
import CustomerSupport from "../app/assets/wix images/secondsec-photo3.jpg";
import SmartAutomationTools from "../app/assets/wix images/secondsec-photo4.jpg";
import Image, { StaticImageData } from "next/image";


interface ioffers {
  image: StaticImageData;
  title: string;
  description: string;
}

const Thirdsec = (): React.ReactNode => {
  const paragraph: string =
    "Im a paragraph. Click here to add your own text and edit me. Its easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.";

  const description: string = `Im a paragraph. Click here to add your own text and edit me. Im a great place for you to tell a story and let your users know a little more about you.`;



  const offers: ioffers[] = [
    {
      image: Workflow,
      title: "Workflows",
      description: description,
    },
    {
      image: AllInOne,
      title: "All-In-One Solution",
      description: description,
    },
    {
      image: CustomerSupport,
      title: "Comprehensive Customer Support",
      description: description,
    },
    {
      image: SmartAutomationTools,
      title: "Smart Automation Tools",
      description: description,
    },
  ];

  return (
    <div id='Product' className="  h-auto p-24 sm:p-10 flex flex-col justify-center gap-10 xl:text-lg xxl:text-lg">
      <div className=" flex flex-col gap-3">
        <h1 className=" text-3xl">What We Offer</h1>
        <p className="">
          I am a paragraph. Click here to add your own text and edit me. Its
          easy. <br></br>
          Just click “Edit Text” or double click me to add your own content and{" "}
          <br></br>
          make changes to the font.
        </p>
      </div>
      <div className="flex gap-5 justify-center md:flex-col md:scale-[0.9] sm:flex-col">
        {offers.map((offer, id) => {
          return (
            <div key={id} className=" flex flex-col gap-2 md:items-center">
              <div className=" border-black md:w-[70%]  border-[3px] rounded-lg  flex justify-center">
                <Image
                  height={200}
                  width={300}
                  alt="Image detailing workflow"
                  src={offer.image}
                  className=" rounded-lg w-full"
                ></Image>
              </div>
              <strong>
                <h2 className=" text-xl">{offer.title}</h2>
              </strong>
              <p>{offer.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Thirdsec;
