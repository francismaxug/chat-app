"use client"
import Image from "next/image"
import React from "react"
import { IoMenuOutline } from "react-icons/io5"
import { useState } from "react"
import MobileMenuRecords from "./dashboard-components/MobileMenuRecords"
import { AnimatePresence } from "framer-motion"
const Chat = () => {
  const [showMenu, setShowMenu] = useState(false)
  console.log(showMenu)
  return (
    <main>
      <div className=" bg-topNav mb-3 px-2 sm:rounded py-3 sm:py-2 lg:py-1  items-center gap-x-1 flex justify-between">
        <div className="sm:size-[2.2rem] size-10 relative gap-x-2  flex items-center  rounded-full border cursor-pointer  ">
          <Image
            alt="profile"
            src="/images/pro.jpg"
            width={500}
            height={500}
            quality={80}
            className=" w-full h-full  object-fill object-center rounded-full"
          />

          <p className="text-md sm:text-lg text-white">Chatbot</p>
        </div>
        <button className="lg:hidden">
          <IoMenuOutline
            onClick={() => setShowMenu((p) => !p)}
            className=" text-white text-3xl"
          />
        </button>
      </div>
      <div className=" flex items-center justify-center mt-32 flex-col">
        <div>
          <Image
            alt="profile"
            src="/images/welcomeImage.png"
            width={1000}
            height={1000}
            quality={80}
            className=" w-16 h-20 object-fill object-center rounded-full"
          />
        </div>
        <div>
          <p className=" text-center">
            Hii There!, select or create a conversation <br /> to start
            chatting!!!
          </p>
        </div>
      </div>
      <AnimatePresence>{showMenu && <MobileMenuRecords />}</AnimatePresence>
    </main>
  )
}

export default Chat
