import React from "react"

const Header = () => {
  return (
    <div className=" bg-white fixed left-0 top-0 right-0 w-full flex justify-between items-center px-3 sm:px-10 z-30 py-1  border shadow-md">
      <div className=" bg-pinkBtn rounded  font-manrope h-[2rem] w-[3.5rem] text-[0.6rem] text-white/80 flex items-center justify-center ">
        CHATBOT
      </div>
      <div className="  bg-pinkBtn rounded  font-manrope h-[1.7rem] w-[4rem] text-[0.6rem] text-white/80 flex items-center justify-center ">
        Log Out
      </div>
    </div>
  )
}

export default Header
