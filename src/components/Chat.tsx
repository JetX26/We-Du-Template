"use client";

import Image from "next/image";
import ChatImage from "../app/assets/wix images/comment-alt.png";

interface props {
  setShow: any
}

const Chat = ({ setShow }: props): React.ReactNode => {
  return (
    <span
      onClick={() => {
        setShow(true);
      }}
      className="hover:cursor-pointer bg-yellow-600 flex justify-center z-999999  items-center bottom-3 right-3 fixed rounded-full w-[50px] h-[50px]"
    >
      <Image width={30} height={40} alt="Chat" src={ChatImage}></Image>
    </span>
  );
};

export default Chat;
