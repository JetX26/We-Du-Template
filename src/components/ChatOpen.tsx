"use client";

import Image from "next/image";
import React from "react";
import X from "../app/assets/wix images/cross-circle.png";
import { useState } from "react";
import axios from "axios";


interface props {
  setShow: any;
}

const ChatOpen = ({ setShow }: props): React.ReactNode => {
  const [message, setMessage] = useState<FormDataEntryValue | null>();

  // const gptRequest = async () => {
  //   const { data } = await axios.post(
  //     "https://api.openai.com/v1/chat/completions",
  //     {
  //       model: "gpt-3.5-turbo", // version of chatGPT
  //       messages: [{ role: "user", content: message }], // message coming from the user
  //       max_tokens: 500, //characters
  //     },
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer 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`,
  //       },
  //     }
  //   );

  //   console.log(data);
  //   console.log(data.choices[0].message.content);
  // };

  return (
    <div className="fixed bottom-0 right-0 z-20 bg-slate-300 w-[350px] rounded-lg h-[600px] m-3 flex flex-col justify-between border-black border-[3px] overflow-auto">
      <div className=" bg-white p-2 rounded-tl-lg rounded-tr-lg relative">
        <span className=" absolute top-2 right-2 hover:cursor-pointer">
          <Image
            src={X}
            alt="Close Button"
            width={30}
            height={30}
            onClick={() => {
              setShow(false);
            }}
          ></Image>
        </span>
        <h2 className="  text-xl">WeDu</h2>
        <div className="flex items-center gap-2">
          <span className=" bg-green-400 w-[10px] h-[10px] rounded-full"></span>
          <p>We will reply as soon as we can</p>
        </div>
      </div>
      <div className=" bg-yellow-400 flex flex-grow flex-col">
        <div className=" p-3 m-3 rounded-md bg-blue-500 w-[50%]">
          <p>User Message</p>
        </div>
        <div className=" flex justify-end">
          <div className=" bg-green-500 p-3 m-3 rounded-md w-[50%] flex justify-end">
            <p>Bot message</p>
          </div>
        </div>
      </div>
      <form
        className=" flex"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const message = formData.get("message");

          setMessage(message);
          // gptRequest();
        }}
      >
        <input
          type="text"
          placeholder="Type your message..."
          className=" w-full p-3 rounded-bl-lg "
          name="message"
        />
        <button className=" p-3">Send</button>
      </form>
    </div>
  );
};

export default ChatOpen;
