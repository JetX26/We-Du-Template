"use client";

import React from "react";

const Ninthsec = (): React.ReactNode => {

  return (
    <div id="Contact" className=" bg-[#ffc403] gap-8 h-auto text-black py-24 flex flex-col items-center relative justify-center xl:text-xl sm:text-sm sm:h-auto md:text-md md:h-auto xxl:text-lg">
      <div className=" w-[90%] flex flex-col ">
        <h1 className=" font-bold text-3xl">WeDu</h1>
        <p>Communicate. Collaborate. Create.</p>
      </div>
      <div className=" w-[90%] h-[80%] flex gap-14 justify-center sm:flex-col sm:gap-8 sm:text-lg md:flex-col md:gap-8 md:text-lg">
        <div className="h-full w-[17%]  flex flex-col  gap-24 sm:gap-0 sm:w-full md:gap-0 md:w-full">
          <h2 className=" font-bold text-2xl">Contact</h2>
          <p>500 Terry Francine Street <br></br>San Francisco, CA 94158
          </p>
          <p>General Inquiries: <br></br>123-456-7890</p>
        </div>
        <div className="  w-[18%]  flex flex-col gap-24 justify-evenly sm:h-full sm:gap-0 sm:w-full md:gap-0 md:w-full md:h-full">
          <div className=" h-[32px] w-full sm:hidden md:hidden"></div>
          <p>Sales:<br></br>info@mysite.com</p>
          <p>Customer Care:<br></br>info@mysite.com</p>
        </div>
        <div className="  w-[18%] flex flex-col gap-20 sm:h-full sm:gap-0 sm:w-full md:h-full md:gap-0 md:w-full">
          <span>
            <h2 className=" font-bold text-xl">Quick Links</h2>
          </span>
          <span>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </span>
          <div></div>
        </div>
        <div className="  w-[18%]  flex flex-col gap-20 sm:h-full sm:w-full sm:gap-2 md:h-full md:w-full md:gap-2">
          <h2 className=" font-bold text-2xl">Follow</h2>
          <p>Sign up to get the latest news on our product.</p>
          <div>
            <p>Email*</p>
            <div className=" flex sm:h-full md:h-full">
              <input type="text" className="bg-white border-red-800 border-r-0 rounded-md rounded-tr-none rounded-br-none border-[2px] w-[70%] md:w-[40%] sm:w-[80%]" />
              <button className="  p-2 bg-black rounded-md rounded-tl-none rounded-bl-none text-white">Subscribe</button>
            </div>
          </div>
        </div>
        <div className=" w-[18%] sm:w-full">
          <div className="flex flex-col w-full h-full gap-12 items-center justify-center">
            <div></div>
            <h2 className=" font-bold text-3xl md:text-xl lg:text-xl sm:text-2xl">LinkedIn</h2>
            <h2 className=" font-bold text-3xl md:text-xl lg:text-xl sm:text-2xl">YouTube</h2>
            <h2 className=" font-bold text-3xl md:text-xl lg:text-xl sm:text-2xl">Facebook</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ninthsec;
