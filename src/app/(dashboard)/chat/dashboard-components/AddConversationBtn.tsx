"use client"
import React from "react"
import { FiPlus } from "react-icons/fi"
import { useAppContext } from "@/app/context/AppContext"

const AddConversationBtn = ({ children }: { children: React.ReactNode }) => {
  const { handleAddConversation } = useAppContext()

  return (
    <button
      className=" flex justify-between items-center w-full "
      onClick={handleAddConversation}
    >
      {children}
    </button>
  )
}

export default AddConversationBtn
