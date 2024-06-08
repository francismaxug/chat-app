import Image from "next/image"
import { Fragment, useEffect, useRef, useState } from "react"
import { BiBible } from "react-icons/bi"
import {
  PiHandsPrayingDuotone,
  PiMessengerLogo,
  PiTextOutdentFill,
} from "react-icons/pi"
import { IoKeyOutline, IoCalendarNumberOutline } from "react-icons/io5"
import { LuUserCheck2 } from "react-icons/lu"
import { IoIosLogOut } from "react-icons/io"
import { CgScreen } from "react-icons/cg"
import Link from "next/link"

import MainItemsPage from "./MainItemsPage"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
})

const DashBoardLeftFixedSideBar = () => {
  return (
    <aside
      className={`fixed top-14 left-40 z-30 bottom-3 border  hidden lg:block
      lg:w-[250px] w-0
        bg-leftSideBar shadow-md   `}
    >
      {/* Head Name */}
      <div className="absolute w-full py-2 h-full  flex flex-col gap-y-7 scrollbar-thump scrollbar-thin scrollbar-webkit overflow-y-auto overflow-x-clip ">
        <div className={`flex gap-x-1 pl-7 items-center duration-300 mt-2  `}>
          <div>
            <p className=" font-bold text-[#002868] text-2xl sm:text-[2rem]  first-letter:text-[#7367F0] tracking-wide">
              {" "}
              UPCI
            </p>
            <p className=" text-[0.2rem] -mt-[0.2rem] sm:text-[0.37rem] lg:text-white">
              UNITED PENTECOSTAL CHURCH
            </p>
            <p className=" text-[0.4rem] text-center -mt-1">
              Ghana - Kadosh Chapel
            </p>
          </div>
          <div className=" sm:w-[1.4rem] sm:h-[1.7rem] w-[1.1rem] h-[1.3rem] flex items-center justify-center bg-[#7367F0] rounded-b-[20rem] rounded-r-[25rem] rotate-45 ">
            {/* <CgCross className=" text-white -rotate-90 h-20" /> */}
          </div>
        </div>
        <div className="flex flex-col mt-5 w-full gap-y-0  duration-500  ">
          <div className={`  `}>
            <div className="absolute flex  flex-col gap-y-[0.45rem]  w-[100%]">
              <Link
                href="/church/dashboard"
                className={` flex group/tea px-[0.3rem] hover:bg-[#F2F5F8] rounded-lg w-full gap-x-2 items-center font-semibold text-gray-500`}
              >
                <div
                  className={` w-full flex gap-x-2 items-center px-2 py-[0.4rem]`}
                >
                  <CgScreen
                    className={`  duration-300 w-[0.9rem] h-[1.1rem]`}
                  />

                  <span
                    className={` text-[0.7rem] duration-300  transition group-hover/tea:translate-x-1.5 group-hover/tea:duration-500  `}
                  >
                    Dashboard
                  </span>

                  {/* <Link
                    href="/dashboard"
                    className={` text-[0.7rem] ${
                      open ? " hidden opacity-0" : " block"
                    } duration-300 hover:translate-x-1.5 hover:transition hover:duration-500`}
                  >
                    Dashboard
                  </Link> */}
                </div>
              </Link>
              <>
                <Link
                  href="#"
                  className={` flex gap-x-2 items-center  font-semibold text-gray-500 `}
                >
                  {/* <Link
                    href="/dashboard"
                    className={` text-[0.7rem] ${
                      open ? " translate-x-9 opacity-0" : " translate-x-0"
                    } duration-500`}
                  >
                    Members
                  </Link> */}
                  {/* <Link
                    href="/dashboard"
                    className={` text-[0.7rem] ${
                      open ? " hidden opacity-0" : " block"
                    } duration-500`}
                  >
                    Members
                  </Link> */}
                </Link>
              </>
              <Link
                href=""
                className={` flex group/tea px-[0.3rem] hover:bg-[#F2F5F8] rounded-lg w-full gap-x-2 items-center font-semibold text-gray-500`}
              >
                <div
                  className={` w-full flex gap-x-2 items-center px-2 py-[0.4rem]`}
                >
                  <IoCalendarNumberOutline
                    className={`  duration-300 w-[0.9rem] h-[1.1rem]`}
                  />
                  <span
                    className={` text-[0.7rem] duration-500 group-hover/tea:translate-x-1.5 group-hover/tea:duration-500 `}
                  >
                    Events
                  </span>
                </div>
                {/* <Link
                    href="/dashboard"
                    className={` text-[0.7rem] ${
                      open ? " hidden opacity-0" : " block"
                    } duration-500`}
                  >
                    Events
                  </Link> */}
              </Link>
              <Link
                href=""
                className={` flex group/tea px-[0.3rem] hover:bg-[#F2F5F8] rounded-lg w-full gap-x-2 items-center font-semibold text-gray-500`}
              >
                <div
                  className={` w-full flex gap-x-2 items-center px-2 py-[0.4rem]`}
                >
                  <BiBible className={` duration-300 w-[0.9rem] h-[1.1rem]`} />
                  <span
                    className={` text-[0.7rem]  duration-500 group-hover/tea:translate-x-1.5 group-hover/tea:duration-500 `}
                  >
                    Sermons
                  </span>
                </div>

                {/* <Link
                    href="/dashboard"
                    className={` text-[0.7rem] ${
                      open ? " hidden opacity-0" : " block"
                    } duration-500`}
                  >
                    Sermons
                  </Link> */}
              </Link>
              <Link
                href=""
                className={` flex group/tea px-[0.3rem] hover:bg-[#F2F5F8] rounded-lg w-full gap-x-2 items-center font-semibold text-gray-500`}
              >
                <div
                  className={` w-full flex gap-x-2 items-center px-2 py-[0.4rem]`}
                >
                  <BiBible className={` duration-300 w-[0.9rem] h-[1.1rem]`} />
                  <span
                    className={` text-[0.7rem]  duration-500 group-hover/tea:translate-x-1.5 group-hover/tea:duration-500 `}
                  >
                    Sermons
                  </span>
                </div>

                {/* <Link
                    href="/dashboard"
                    className={` text-[0.7rem] ${
                      open ? " hidden opacity-0" : " block"
                    } duration-500`}
                  >
                    Sermons
                  </Link> */}
              </Link>
              <Link
                href=""
                className={` flex group/tea px-[0.3rem] hover:bg-[#F2F5F8] rounded-lg w-full gap-x-2 items-center font-semibold text-gray-500`}
              >
                <div
                  className={` w-full flex gap-x-2 items-center px-2 py-[0.4rem]`}
                >
                  <BiBible className={` duration-300 w-[0.9rem] h-[1.1rem]`} />
                  <span
                    className={` text-[0.7rem]  duration-500 group-hover/tea:translate-x-1.5 group-hover/tea:duration-500 `}
                  >
                    Sermons
                  </span>
                </div>

                {/* <Link
                    href="/dashboard"
                    className={` text-[0.7rem] ${
                      open ? " hidden opacity-0" : " block"
                    } duration-500`}
                  >
                    Sermons
                  </Link> */}
              </Link>
              <Link
                href=""
                className={` flex group/tea px-[0.3rem] hover:bg-[#F2F5F8] rounded-lg w-full gap-x-2 items-center font-semibold text-gray-500`}
              >
                <div
                  className={` w-full flex gap-x-2 items-center px-2 py-[0.4rem]`}
                >
                  <PiHandsPrayingDuotone
                    className={` duration-300 w-[0.9rem] h-[1.1rem]`}
                  />
                  <span
                    className={` text-[0.7rem] duration-500 group-hover/tea:translate-x-1.5 group-hover/tea:duration-500 `}
                  >
                    Prayer request
                  </span>
                </div>
                {/* <Link
                    href="/dashboard"
                    className={` text-[0.7rem] ${
                      open ? " hidden opacity-0" : " block"
                    } duration-500`}
                  >
                    Prayer request
                  </Link> */}
              </Link>

              <Link
                href=""
                className={` flex group/tea px-[0.3rem] hover:bg-[#F2F5F8] rounded-lg w-full gap-x-2 items-center font-semibold text-gray-500`}
              >
                <div
                  className={` w-full flex gap-x-2 items-center px-2 py-[0.4rem]`}
                >
                  <IoKeyOutline
                    className={`  duration-300 w-[0.9rem] h-[1.1rem]`}
                  />
                  <span
                    className={` text-[0.7rem] duration-500 group-hover/tea:translate-x-1.5 group-hover/tea:duration-500 `}
                  >
                    Accounts
                  </span>
                </div>
                {/* <Link
                    href="/dashboard"
                    className={` text-[0.7rem] ${
                      open ? " hidden opacity-0" : " block"
                    } duration-500`}
                  >
                    Accounts
                  </Link> */}
              </Link>
              <Link
                href=""
                className={` flex group/tea px-[0.3rem] hover:bg-[#F2F5F8] rounded-lg w-full gap-x-2 items-center font-semibold text-gray-500`}
              >
                <div
                  className={` w-full flex gap-x-2 items-center px-2 py-[0.4rem]`}
                >
                  <PiMessengerLogo
                    className={`  duration-300 w-[0.9rem] h-[1.1rem]`}
                  />
                  <span
                    className={` text-[0.7rem]  duration-500 group-hover/tea:translate-x-1.5 group-hover/tea:duration-500 `}
                  >
                    Communications
                  </span>
                </div>
                {/* <Link
                    href="/dashboard"
                    className={` text-[0.7rem] ${
                      open ? " hidden opacity-0" : " block"
                    } duration-500`}
                  >
                    Communications
                  </Link> */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default DashBoardLeftFixedSideBar
