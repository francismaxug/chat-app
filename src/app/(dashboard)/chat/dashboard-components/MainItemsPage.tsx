"use client"
import React from "react"
import { FiSend } from "react-icons/fi"
import Header from "./Header"
import { useState } from "react"

const MainItemsPage = ({ children }: { children: React.ReactNode }) => {
  const [message, setMessage] = useState("")
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(message)
  }

  return (
    <main
      className={`relative md:px-0 lg:px-0
        lg:left-[250px] left-0 top-14
     min-h-[80vh] mb-[6.5rem]
         lg:w-[calc(100%-250px)] w-[calc(100%-0px)]
      bg-white rounded  border shadow-md mx-0 md:mx-0 lg:mx-6 `}
    >
      <Header />

      <div className={`drop-shadow-lg mb-10 `}>{children}</div>

      <div className=" bg-white fixed lg:left-[440px] has-[foc]: xl:left-[480px] left-0 right-[20px] bottom-0 md:pb-2 pb-0  lg:w-[calc(100%-572px)] xl:w-[calc(100%-650px)] lg:px-0 md:px-32 w-[calc(100%-0px)] z-20">
        <form
          onSubmit={handleSubmit}
          className=" border-2 shadow-md flex justify-between sm:rounded-full items-center sm:p-[0.15rem] p-3 px-3 "
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
            className=" text-xs  flex items-center justify-start border-none outline-none ml-3 rounded-full  w-full px-3 h-full  box-border resize-none overflow-y-hidden"
            name=""
            id=""
          />
          <button
            type="submit"
            className="p-[0.4rem] bg-pinkBtn  ml-3 flex items-center justify-end rounded-full"
          >
            <FiSend className=" text-white" />
          </button>
        </form>
      </div>
    </main>
  )
}

export default MainItemsPage
