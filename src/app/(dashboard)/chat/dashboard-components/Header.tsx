"use client"
import React, { useEffect } from "react"
import { useRouter } from "next/navigation"
import { logout } from "@/app/actions/auth"
import { useAppContext } from "@/app/context/AppContext"
import Link from "next/link"

const Header = () => {
  // const { authToken } = useAppContext()
  const router = useRouter()

  const handleLogOut = async () => {
    await logout()
    router.push("/")
    if (typeof window !== "undefined")
      window.localStorage.removeItem("authToken")
  }

  // useEffect(() => {
  //   window.localStorage.removeItem("authToken")
  // }, [])
  return (
    <div className=" bg-white fixed left-0 top-0 right-0 w-full flex justify-between items-center px-3 sm:px-10 z-30 py-3 sm:py-1  border shadow-md">
      <Link
        href="/chat"
        className=" bg-pinkBtn rounded  font-manrope h-[2rem] w-[3.5rem] text-[0.7rem] text-white/80 flex items-center justify-center "
      >
        CHATBOT
      </Link>
      <button
        onClick={handleLogOut}
        className="  bg-pinkBtn rounded  font-manrope h-[1.7rem] w-[4rem] text-[0.8rem] text-white/80 flex items-center justify-center "
      >
        Log Out
      </button>
    </div>
  )
}

export default Header
