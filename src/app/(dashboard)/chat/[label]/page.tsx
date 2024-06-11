"use client"
import React, { Suspense } from "react"
import Messages from "../dashboard-components/Messages"
import LoadingMessages from "../loading"
import { formatDateTime } from "@/lib/helper"
import ChatBotHeader from "../dashboard-components/ChatBotHeader"

const Chat = () => {
  const time = formatDateTime(new Date())

  return (
    <main>
      <ChatBotHeader />
      <h1 className="text-center  text-xs 3xl:text-lg">{time}</h1>
      <Suspense fallback={<LoadingMessages />}>
        {" "}
        <Messages />
      </Suspense>
    </main>
  )
}

export default Chat
