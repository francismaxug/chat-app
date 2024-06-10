import Image from "next/image"
import Link from "next/link"
import React from "react"
import { createPortal } from "react-dom"

const ConfirmationModal = ({
  setOpenModalFxn,
  conversationId,

  handleDeleteConversation,
}: {
  modalState: boolean
  setOpenModalFxn: React.Dispatch<React.SetStateAction<boolean>>
  conversationId: number | null
  handleDeleteConversation: (conversationId: number) => void
}) => {
  return createPortal(
    <div className="fixed inset-0 z-[999] bg-modal   flex items-center justify-center">
      <div className="bg-pinkBtn p-4 py-6 h-auto flex  duration-500 flex-col items-center justify-center rounded-lg shadow-md space-y-4 w-[23rem] animate-slide-up px-12">
        <div className=" flex flex-col justify-center items-center gap-y-7 w-full">
          <p className=" text-white leading-8">
            {" "}
            Are you sure you want to <br /> delete Conversation {conversationId}
            ?
          </p>
          <div className=" flex justify-between items-center w-full">
            <button
              onClick={() => setOpenModalFxn(false)}
              className=" px-7 py-1 bg-leftSideBar rounded-xl"
            >
              NO
            </button>
            <button
              onClick={() => {
                setOpenModalFxn(false)
                handleDeleteConversation(conversationId!)
              }}
              className=" px-7 py-1 bg-red-700 text-white rounded-xl"
            >
              YES
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default ConfirmationModal
