import React from "react"
import { motion } from "framer-motion"
import AddConversationBtn from "./AddConversationBtn"
import Conversations from "./Conversations"

const MobileMenuRecords = () => {
  return (
    <motion.div
      initial={{ x: "-50vw", opacity: 1 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      exit={{ x: "-60vw", opacity: 1, transition: { duration: 0.7 } }}
      className=" w-56 sm:w-60 flex gap-y-2 bg-white fixed z-50 top-0 botton-0 sm:h-[79vh] h-[77.5vh] lg:hidden overflow-y-auto overflow-x-clip   "
    >
      <div className="absolute w-full  h-full  flex flex-col gap-y-2 scrollbar-thump scrollbar-thin scrollbar-webkit overflow-y-auto overflow-x-clip  ">
        <div className=" bg-topNav flex justify-between items-center py-[1.14rem] sm:py-2 lg:py-1 text-[0.85rem] text-white px-2 lg:rounded ">
          <p className="text-lg">Conversations</p>
          <AddConversationBtn />
        </div>
        <div
          className={`duration-300 border bg-leftSideBar h-full shadow-lg rounded`}
        >
          <Conversations />
        </div>
      </div>
    </motion.div>
  )
}

export default MobileMenuRecords
