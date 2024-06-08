import React from "react"
import { FiSend } from "react-icons/fi"
import Link from "next/link"
import Header from "./Header"

const MainItemsPage = ({
  children,
  open,
  setOpen,
}: {
  children: React.ReactNode
  open: boolean
  setOpen: () => void
}) => {
  return (
    <main
      className={`relative md:px-0 lg:px-0
        lg:left-[250px] left-0 top-12
     min-h-[81vh] mb-[6.5rem]
         lg:w-[calc(100%-250px)] w-[calc(100%-0px)]
      bg-white rounded  border shadow-md mx-0 md:mx-0 lg:mx-6 `}
    >
      <Header />
      <div className={`drop-shadow-lg mb-10 `}>{children}</div>
      <div className=" bg-white fixed lg:left-[480px] left-0 right-[20px] bottom-0 pb-2  lg:w-[calc(100%-650px)] lg:px-0 md:px-32 w-[calc(100%-0px)] z-20">
        <form className=" border flex justify-between rounded-full items-center p-[0.15rem] px-3">
          <input
            type="text"
            name=""
            id=""
            className=" w-full border-none outline-none h-4"
          />
          <button className="p-[0.4rem] bg-pinkBtn  ml-3 flex items-center justify-end rounded-full">
            <FiSend className=" text-white" />
          </button>
        </form>
      </div>
    </main>
  )
}

export default MainItemsPage
