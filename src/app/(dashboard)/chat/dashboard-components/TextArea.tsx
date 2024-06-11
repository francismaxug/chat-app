"use client"
import React from "react"
import { useState } from "react"
import { useAppContext } from "@/app/context/AppContext"
import { FiSend } from "react-icons/fi"

const TextArea = () => {
  const { sendMessage } = useAppContext()
  const [message, setMessage] = useState("")
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    sendMessage(message)
    setMessage("")
  }
  return (
    <div className=" bg-white fixed lg:left-[440px] xl:left-[480px] left-0 right-[20px] bottom-0 md:pb-2 pb-0  lg:w-[calc(100%-572px)] xl:w-[calc(100%-650px)] lg:px-0 md:px-0 w-[calc(100%-0px)] z-20">
      <form
        onSubmit={handleSubmit}
        className=" border-2 shadow-md flex justify-between lg:rounded-full items-center sm:p-[0.15rem] p-3 px-3 "
      >
        {/* <input
        type="text"
        name=""
        id=""
        className=" w-full border-none outline-none h-4"
      /> */}
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          rows={2}
          cols={30}
          value={message}
          className=" text-md sm:text-sm  flex items-center justify-start border-none outline-none ml-3 rounded-full pt-1 sm:pt-0  w-full px-3 h-full  box-border resize-none overflow-y-hidden"
          name=""
          id=""
        />
        <button
          type="submit"
          className="p-[0.6rem] md:p-[0.4rem] bg-pinkBtn  ml-3 mr-1 flex items-center justify-end rounded-full"
        >
          <FiSend className=" text-white text-3xl md:text-base" />
        </button>
      </form>
    </div>
  )
}

export default TextArea
