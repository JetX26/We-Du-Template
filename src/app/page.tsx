"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Chat from "../components/Chat";
// import Chatbot from "../components/Chatbot";
import ChatOpen from "../components/ChatOpen";
import Eightsec from "../components/Eightsec";
import Fifthsec from "../components/Fifthsec";
import Footer from '../components/Footer';
import Fourthsec from "../components/Fourthsec";
import Secondsec from "../components/Secondsec";
import Seventhsec from "../components/Seventhsec";
import Sixthsec from "../components/Sixthsec";
import Thirdsec from "../components/Thirdsec";
import Burgermenu from "../components/Burgermenu";
import { useGlobalStore } from "./helper/store";


import { useEffect, useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);
  const { showBurger, setShowBurger } = useGlobalStore()

  useEffect(() => {
    console.log(showBurger)
  }, [show, showBurger]);



  return (
    <main className={`${showBurger && ' overflow-y-hidden'} h-full flex flex-col relative`} >
      <Navbar></Navbar>
      <Hero></Hero>
      <Secondsec></Secondsec>
      <Thirdsec></Thirdsec>
      <Fourthsec></Fourthsec>
      <Fifthsec></Fifthsec>
      <Sixthsec></Sixthsec>
      <Seventhsec></Seventhsec>
      <Eightsec></Eightsec>
      <Footer></Footer>
      <Chat setShow={setShow}></Chat>
      {show && <ChatOpen setShow={setShow}></ChatOpen>}
      {showBurger ? <Burgermenu></Burgermenu> : null}
      {/* <Chatbot></Chatbot> */}
    </main>
  );
}
