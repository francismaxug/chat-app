"use client"
import { useAppContext } from "@/app/context/AppContext"
import React from "react"
import ChatLoading from "./ChatLoading"

const Messages = () => {
  const { conversationMessage, chatLoading } = useAppContext()
  console.log(conversationMessage)

  return (
    <>
      {conversationMessage.length === 0 ? (
        <>
          <p>No Messages found</p>
        </>
      ) : (
        <div className="flex flex-col h-full">
          <div className="flex flex-col flex-grow p-4 overflow-y-auto">
            {conversationMessage.map((message) => (
              <div
                key={message.id}
                className={`flex items-center   ${
                  !message.user_id
                    ? "justify-start gap-y-2 mb-3"
                    : "justify-end mb-3 "
                }`}
              >
                <div
                  className={`px-4 py-3 rounded-lg shadow-md max-w-xs ${
                    !message.user_id ? " bg-gray-300" : "bg-blue-500 text-white"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
          {chatLoading && <ChatLoading />}
          {/* {chatLoading && <Loading />} */}
        </div>
      )}
    </>
  )
}

export default Messages
