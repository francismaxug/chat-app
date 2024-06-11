"use client"
import { FiPlus } from "react-icons/fi"

import Conversations from "./Conversations"
import AddConversationBtn from "./AddConversationBtn"

const ConversationRecordsHolder = () => {
  return (
    <aside
      className={`fixed top-14  z-30 bottom-3 hidden lg:block 
      lg:w-[300px] w-0 lg:left-24 xl:left-32
          bg-white  `}
    >
      <div className="absolute w-full  h-full  flex flex-col gap-y-2 scrollbar-thump scrollbar-thin scrollbar-webkit overflow-y-auto overflow-x-clip ">
        <div className=" border bg-topNav flex justify-between items-center py-[0.65rem] lg: text-[0.85rem] text-white px-2 rounded ">
          <AddConversationBtn>
            <p className="text-lg">Conversations</p>
            <FiPlus className=" text-white text-2xl lg:text-[1.3rem]" />
          </AddConversationBtn>
        </div>
        <div
          className={`duration-300 border bg-leftSideBar h-full shadow-lg rounded`}
        >
          <Conversations />
        </div>
      </div>
    </aside>
  )
}

export default ConversationRecordsHolder
