"use client"
import React, { Suspense, useState } from "react"
import Messages from "../dashboard-components/Messages"
import Image from "next/image"
import { IoMenuOutline } from "react-icons/io5"
import MobileMenuRecords from "../dashboard-components/MobileMenuRecords"
import { AnimatePresence } from "framer-motion"
import LoadingMessages from "../loading"

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
      <Suspense fallback={<LoadingMessages />}>
        {" "}
        <Messages />
      </Suspense>

      <AnimatePresence>{showMenu && <MobileMenuRecords />}</AnimatePresence>
    </main>
  )
}

export default Chat
