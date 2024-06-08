import React from "react"
import { PiTextOutdentFill } from "react-icons/pi"

import Link from "next/link"

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
      className={`relative px-3 lg:px-5 
        lg:left-[250px] left-0
      min-h-[90vh] 
         lg:w-[calc(100%-250px)] w-[calc(100%-0px)]
      bg-[#F4F4F4] border shadow-inner `}
    >
      <div className={`drop-shadow-lg mb-20 `}>{children}</div>
      <div className="absolute bottom-0 w-[95%]">
        <div className=" pb-[0.5rem] text-[0.8rem] flex justify-between items-center text-center flex-wrap">
          <p>
            &copy; {new Date().getFullYear()} made with ❤️ {""}
            <a
              href="https://github.com/francismaxug"
              target="_blank"
              className="text-dashboardBaseColor  "
            >
              by Francis Atinga Anaba
            </a>{" "}
            All rights reserved
          </p>
          <div className="  gap-x-5 hidden md:flex">
            <p>License</p>
            <p>Support</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainItemsPage
