"use client"
import { AllConversations } from "@/lib/types"
import React, { useEffect } from "react"
import { useState } from "react"
import Loading from "./Loading"
import { FaRegTrashAlt } from "react-icons/fa"
import { useAppContext } from "@/app/context/AppContext"

const token =
  "eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.JxNIEKBuzyqAMEVdiya6PfY8vYgrUunDVm2qM2drq1x-LUorcwa2jaa2ABsKJHdkmbFpwAZ23Pn6keSS3DvfzX2LhQOWt-rO.V7s5F30FjYsfBvyZvBSt1A.1SmNuCHdyas0x7i3OdhkpBZsY6GxSAl23HtK1Eq7U9n8hwnMCJrZitWn06BclGBHQfQ4lakW0w-ETV9jg2wzVMQUSGSNMul1eQEgWKpZmwMXIWvcG9AuBvCa_UvuZR3p_6j2IA_LKj9RZdGj8gXipMh3TYinmvBWieQ4hMr5OH4.cvjvrnLMpncZX7xAcxqAEeBTx8kwA-Bb0V7o1_xM_34"

const Conversations = () => {
  const { conversations, loading, handleDeleteConversationRecord } =
    useAppContext()
  const handleDeleteConversation = async (id: number) => {
    console.log(id)
    try {
      const res = await fetch(
        `https://x8ki-letl-twmt.n7.xano.io/api:SSOLzzIz/conversation/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      const data = await res.json()
      handleDeleteConversationRecord(id)

      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  if (loading)
    return (
      <div className="flex justify-center items-center h-[60%]">
        <Loading />
      </div>
    )
  return (
    <>
      <div className=" space-y-1 ">
        {conversations.length === 0 ? (
          <>
            <p>No conversation found</p>
          </>
        ) : (
          conversations.map((conversation, index) => (
            <div key={conversation.id} className=" flex flex-col">
              <div className=" border bg-pinkBtn flex justify-between items-center py-[0.45rem] text-[0.85rem] text-white px-2 rounded">
                <p>Conversation {index}</p>
                <FaRegTrashAlt
                  onClick={(e) => {
                    e.stopPropagation()
                    handleDeleteConversation(conversation.id)
                  }}
                  className=" text-white text-md cursor-pointer"
                />
              </div>
            </div>
          ))
        )}
      </div>
    </>
  )
}

export default Conversations
