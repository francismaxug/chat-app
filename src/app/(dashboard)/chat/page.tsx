
import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"

const Chat = () => {
  return (
    <main
  
    >
      <div className=" bg-topNav mb-3 px-2 sm:rounded py-2 sm:py-1 flex items-center gap-x-1">
        <div className="size-7 relative flex items-center justify-center  rounded-full border cursor-pointer ">
          <Image
            alt="profile"
            src="/images/pro.jpg"
            width={500}
            height={500}
            quality={80}
            className=" w-full h-full object-fill object-center rounded-full"
          />
        </div>
        <p className="text-xs text-white">Chatbot</p>
      </div>
      <div className="px-3"></div>
    </main>
  )
}

export default Chat
