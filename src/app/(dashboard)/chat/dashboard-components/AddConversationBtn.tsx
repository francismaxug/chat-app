"use client"
import React from "react"
import { useState, useEffect } from "react"
import { FiPlus } from "react-icons/fi"
import { useAppContext } from "@/app/context/AppContext"

const token =
  "eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.JxNIEKBuzyqAMEVdiya6PfY8vYgrUunDVm2qM2drq1x-LUorcwa2jaa2ABsKJHdkmbFpwAZ23Pn6keSS3DvfzX2LhQOWt-rO.V7s5F30FjYsfBvyZvBSt1A.1SmNuCHdyas0x7i3OdhkpBZsY6GxSAl23HtK1Eq7U9n8hwnMCJrZitWn06BclGBHQfQ4lakW0w-ETV9jg2wzVMQUSGSNMul1eQEgWKpZmwMXIWvcG9AuBvCa_UvuZR3p_6j2IA_LKj9RZdGj8gXipMh3TYinmvBWieQ4hMr5OH4.cvjvrnLMpncZX7xAcxqAEeBTx8kwA-Bb0V7o1_xM_34"

const AddConversationBtn = () => {
  // const [authToken, setAuthToken] = useState<string | null>(null)
  const { handleAddConversationRecord, authToken } = useAppContext()

  // useEffect(() => {
  //   const token = window.localStorage?.getItem("authToken")
  //   setAuthToken(token)
  // }, [])
  const handleAddConversation = async () => {
    console.log("Add Conversation")
    console.log(process.env.AUTH_URL)
    try {
      const res = await fetch(
        `https://x8ki-letl-twmt.n7.xano.io/api:SSOLzzIz/conversation`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
      const data = await res.json()
      handleAddConversationRecord(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <button onClick={handleAddConversation}>
      <FiPlus className=" text-white text-2xl lg:text-[1.3rem]" />
    </button>
  )
}

export default AddConversationBtn
