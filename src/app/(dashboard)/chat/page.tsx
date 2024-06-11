"use client"
import Image from "next/image"
import React from "react"


import ChatBotHeader from "./dashboard-components/ChatBotHeader"

const Chat = () => {
 

  return (
    <main>
      <ChatBotHeader />
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
            Hii There!, Select or Create a conversation <br /> to start
            chatting!!!
          </p>
        </div>
      </div>
      
    </main>
  )
}

export default Chat
