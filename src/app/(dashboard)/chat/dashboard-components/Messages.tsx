"use client"
import { useAppContext } from "@/app/context/AppContext"
import React from "react"
import ChatLoading from "./ChatLoading"
import Image from "next/image"
import Loading from "./Loading"

const Messages = () => {
  const { conversationMessage, chatLoading } = useAppContext()
  console.log(conversationMessage)

  if (conversationMessage[0]?.status === "error")
    return <h1 className="text-center  mt-36 text-xl">Too many requests</h1>

  // if (loading)
  //   return (
  //     <div className="flex justify-center items-center h-[90%] mt-24">
  //       <Loading />
  //     </div>
  //   )

  return (
    <>
      {conversationMessage.length === 0 ? (
        <>
          <h1 className="text-center  mt-36 text-xl">No mesaages found!!</h1>
        </>
      ) : (
        <div className="flex flex-col h-full py-2">
          <div className="flex flex-col flex-grow p-4 overflow-y-auto">
            {conversationMessage.map((message) => (
              <div
                key={message.id}
                className={`flex items-center   ${
                  !message.user_id ? "justify-start gap-y-2 " : "justify-end "
                }`}
              >
                <div className={` py-1  max-w-xs mb-1 `}>
                  {!message.user_id ? (
                    <div className=" flex gap-x-2 items-center">
                      <Image
                        alt="profile"
                        src="/images/chat-image.jpeg"
                        width={500}
                        height={500}
                        quality={80}
                        className=" size-9 object-fill object-center rounded-full"
                      />
                      <p className=" py-1 px-3 rounded-full border text-blue-400 bg-[#F0F9FF] text-[0.9rem]">
                        {message.content}
                      </p>
                    </div>
                  ) : (
                    <div className=" flex gap-x-2 items-center">
                      <p className=" py-1 px-3 rounded-full bg-pinkBtn text-[0.95rem] text-white shadow-md">
                        {message.content}
                      </p>
                      <Image
                        alt="profile"
                        src="/images/pro.jpg"
                        width={500}
                        height={500}
                        quality={80}
                        className=" size-8 object-fill object-center rounded-full"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className=" w-[30%] lg:w-[15%]">
            {chatLoading && <ChatLoading />}
          </div>
        </div>
      )}
    </>
  )
}

export default Messages
