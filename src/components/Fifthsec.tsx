"use client";

import React from "react";
import Image1 from "../app/assets/wix images/image1.webp";
import Image2 from "../app/assets/wix images/image2.webp";
import Image3 from "../app/assets/wix images/image3.webp";
import Image4 from "../app/assets/wix images/image4.webp";
import Image5 from "../app/assets/wix images/image5.webp";
import Image6 from "../app/assets/wix images/image6.webp";
import Image7 from "../app/assets/wix images/image7.webp";
import Image8 from "../app/assets/wix images/image8.webp";
import Image, { StaticImageData } from "next/image";

const Fifthsec = (): React.ReactNode => {
  const images: StaticImageData[] = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
  ];

  return (
    <div className=" flex flex-col gap-24 bg-[#ffc8dd] p-24 sm:p-10 xxl:text-lg">
      <div className=" px-32 flex flex-col gap-4 xl:text-xl sm:w-full sm:p-0">
        <strong>
          <h1 className=" text-3xl lg:text-center">Trusted Among Industry Leaders</h1>
        </strong>
        <p className=" w-[30%] lg:text-center lg:w-full md:w-full xl:w-[50%] xxl:w-[50%] sm:w-full">
          {`I'm a paragraph. Click here to add your own text and edit me. It's easy.
            Just click “Edit Text” or double click me to add your own content and
            make changes to the font.`}
        </p>
      </div>
      <div className=" grid grid-cols-4 grid-rows-2 gap-15 justify-items-center">
        {images.map((image, id) => {
          return (
            <Image
              key={id}
              height={125}
              width={125}
              src={image}
              alt={"Industry Icons"}
            ></Image>
          );
        })}
      </div>
    </div>
  );
};

export default Fifthsec;
