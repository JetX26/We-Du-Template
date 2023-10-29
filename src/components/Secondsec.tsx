"use client";

import React from "react";

const Secondsec = (): React.ReactNode => {
  // const paragraph = `I'm a paragraph. Click here to add your own text and edit me. It's easy.
  //   Just click “Edit Text” or double click me to add your own content and
  //   make changes to the font. Feel free to drag and drop me anywhere you
  //   like on your page. I'm a great place for you to tell a story and let
  //   your users know a little more about you.`;

  return (
    <div className=" bg-[#ffbf23] h-[500px] flex items-center justify-evenly p-16 sm:p-10 lg:gap-8 lg:text-center md:p-4 md:flex-col md:justify-center md:gap-8 xl:text-lg xxl:text-lg sm:flex-col">
      <h1 className=" text-3xl max-w-sm">
        <strong>With the Right Software, Great Things Can Happen</strong>
      </h1>
      <p className=" break-all max-w-lg">
        {`I am a paragraph. Click here to add your own text and edit me. It is
        easy. Just click “Edit Text” or double click me to add your
        own content and make changes to the font. Feel free to drag and drop me
        anywhere you like on your page. Im a great place for you to tell a
        story and let your users know a little more about you.`}
      </p>
    </div>
  );
};

export default Secondsec;
