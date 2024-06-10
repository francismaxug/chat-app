"use client"

import React, { useState } from "react"
import Loading from "./Loading"
import { FaRegTrashAlt } from "react-icons/fa"
import { useAppContext } from "@/app/context/AppContext"
import ConfirmationModal from "./DeleteConfirmationModal"
import { useRouter } from "next/navigation"


const Conversations = () => {
  const router = useRouter()
  const {
    queryConversationMessage,
    conversationRecord,
    loading,
    authToken,
    handleDeleteConversationRecord,
  } = useAppContext()
  const [openModal, setOpenModal] = useState(false)
  const [conversationId, setConversationId] = useState<number | null>(null)

  // console.log(onConfirm)
  // console.log(conversationId)
  const handleDeleteConversation = async (id: number) => {
    console.log(id)
    handleDeleteConversationRecord(id)
    router.push("/chat")
    try {
      const res = await fetch(
        `https://x8ki-letl-twmt.n7.xano.io/api:SSOLzzIz/conversation/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
      const data = await res.json()

      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChangeRoute = (label: string) => {
    router.push(`/chat/${label}`)
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
        {conversationRecord.length === 0 ? (
          <>
            <p>No conversation found</p>
          </>
        ) : (
          conversationRecord?.map((conversation) => (
            <div key={conversation.id} className=" flex flex-col">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  queryConversationMessage(conversation.id)
                  handleChangeRoute(conversation.label)
                }}
                className=" border bg-pinkBtn flex justify-between items-center md:py-[0.45rem] py-[0.85rem] text-[0.85rem] text-white px-2 rounded"
              >
                <p className=" text-[1rem] lg:text-[0.9rem]">
                  Conversation {conversation.id}
                </p>
                <FaRegTrashAlt
                  onClick={(e) => {
                    e.stopPropagation()
                    setOpenModal(true)
                    setConversationId(conversation.id)
                    // handleDeleteConversation(conversation.id)
                  }}
                  className=" text-white text-[1.1rem] sm:text-[0.9rem] cursor-pointer"
                />
              </button>
            </div>
          ))
        )}
      </div>
      {openModal && (
        <ConfirmationModal
          modalState={openModal}
          conversationId={conversationId!}
          setOpenModalFxn={setOpenModal}
          handleDeleteConversation={handleDeleteConversation}
        />
      )}
    </>
  )
}

export default Conversations
