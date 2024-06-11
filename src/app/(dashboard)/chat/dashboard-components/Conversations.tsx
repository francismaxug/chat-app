"use client"

import React, { useState } from "react"
import Loading from "./Loading"
import { FaRegTrashAlt } from "react-icons/fa"
import { useAppContext } from "@/app/context/AppContext"
import ConfirmationModal from "./DeleteConfirmationModal"
import { useRouter } from "next/navigation"
import { useParams } from "next/navigation"
import AddConversationBtn from "./AddConversationBtn"
import { FiPlus } from "react-icons/fi"

const Conversations = () => {
  const router = useRouter()
  const params = useParams()
  // console.log(params)
  const {
    queryConversationMessage,
    conversationRecord,
    loading,
    authToken,
    addConvoLoading,
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

  const handleChangeRoute = (label: string, id: number) => {
    router.push(`/chat/${label}?id=${id}`)
  
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
            <div className=" flex flex-col items-center gap-y-1">
              <h1 className="text-center  text-lg mt-36">
                No conversation found!!
              </h1>
              <div className=" cursor-pointer bg-topNav  rounded-full px-4 w-1/2 py-1 md:py-[0.16rem]  ">
                <AddConversationBtn>
                  <p className="text-lg text-white">Create</p>
                  <FiPlus className=" text-white text-2xl lg:text-[1.3rem]" />
                </AddConversationBtn>
              </div>
            </div>
          </>
        ) : (
          conversationRecord?.map((conversation) => (
            <div key={conversation.id} className=" flex flex-col">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleChangeRoute(conversation.label, conversation.id)
                  queryConversationMessage(conversation.id)
                }}
                className={` border ${
                  conversation.label === params.label
                    ? "bg-pinkBtn text-white"
                    : "bg-inActConvo text-black"
                }  flex justify-between items-center md:py-[0.45rem] py-[0.85rem] text-[0.85rem]  px-2 rounded`}
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
                  className={`${
                    conversation.label === params.label
                      ? " text-white"
                      : " text-black"
                  }  text-[1.1rem] sm:text-[0.9rem] cursor-pointer`}
                />
              </button>
            </div>
          ))
        )}
      </div>
      {addConvoLoading && <Loading className="w-7 h-7 mx-[6rem] mt-2" />}
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
