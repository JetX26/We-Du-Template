"use client";

import React from "react";
import Image1 from "../app/assets/wix images/1.png";
import Image2 from "../app/assets/wix images/2.png";
import Image3 from "../app/assets/wix images/3.png";
import Image, { StaticImageData } from "next/image";


interface icards {
  name: String;
  location: String;
  image: StaticImageData;
}

const Sixthsec = (): React.ReactNode => {
  const dots: string[] = ["", "", ""];

  const paragraph: string = `Im a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.`;

  const cards: icards[] = [
    {
      name: "Deena Levies, ",
      location: "Mission Bay",
      image: Image1,
    },
    {
      name: "Tom Smithenson, ",
      location: "Parkmerced",
      image: Image2,
    },
    {
      name: "Tilly Green, ",
      location: "Hayes Valley",
      image: Image3,
    },
  ];

  return (
    <div className="  flex flex-col justify-center items-center p-24 sm:p-10 gap-14 xl:text-lg xxl:text-lg">
      <div className="w-full">
        <h1 className=" text-3xl lg:text-center md:text-center">What Our Clients Say</h1>
      </div>

      <div className=" flex gap-12 md:flex-col sm:flex-col">
        {cards.map((card, id) => {
          return (
            <div
              key={id}
              className=" bg-white w-[280px] flex-col h-[370px] flex gap-4 relative  border-[2px] border-black rounded-md"
            >
              <div className=" bg-[#ffbd00] w-full h-[10%] flex gap-2 items-center pl-4 rounded-tr-md rounded-tl-md border-[2px] border-b-black">
                {dots.map((dot, id) => {
                  return (
                    <div
                      key={id}
                      className=" rounded-full w-[7px] h-[7px] bg-black"
                    ></div>
                  );
                })}
              </div>
              <div className=" p-4 flex grow flex-col justify-between">
                <p>{paragraph}</p>
                <div className=" flex flex-col items-end justify-end flex-grow">
                  <p>
                    {card.name}
                    <br></br>
                  </p>
                  <p>{card.location}</p>
                </div>
              </div>
              <Image
                width={120}
                height={120}
                alt="Plant Image"
                src={card.image}
                className=" absolute bottom-[-20px] left-[-15px]"
              ></Image>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sixthsec;
