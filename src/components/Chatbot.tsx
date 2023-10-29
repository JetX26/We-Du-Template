"use client";

import React, { useRef, useState } from "react";
// import axios from "axios";

const Chatbot = (): React.ReactNode => {
  const [chat, setChat] = useState<string>();

  const inputRef = useRef<HTMLInputElement | null>(null);

  // const openAIRequest = async (message: any) => {
  //   const { data } = await axios.post(
  //     "https://api.openai.com/v1/chat/completions",
  //     {
  //       model: "gpt-3.5-turbo",
  //       messages: [{ role: "user", content: message }],
  //       max_tokens: 500, //characters
  //     },
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer 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`,
  //       },
  //     }
  //   );
  //   console.log(data.choices[0].message.content);
  //   setChat(data.choices[0].message.content);
  // };

  return (
    <div>
      <div className=" border-black border-[2px] h-[250px] w-[250px] p-3">
        <p>{chat}</p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const message = formData.get("message");
          if (inputRef.current) {
            inputRef.current.value = ''
          }
          console.log(message);
          // openAIRequest(message);
        }}
        className=" flex"
      >
        <input
          name="message"
          type="text"
          placeholder="Type..."
          ref={inputRef}
        />
        <button
          type="submit"
          // onClick={openAIRequest}
          className=" bg-blue-400 p-4"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;

// sk - ET4GnIj0fNP13hMCH0h7T3BlbkFJauUWoH1urvwsCBCg8dId;
