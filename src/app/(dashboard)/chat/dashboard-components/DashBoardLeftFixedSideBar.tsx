"use client"
import { FiPlus } from "react-icons/fi"
import { FaRegTrashAlt } from "react-icons/fa"
import Conversations from "./Conversations"
import AddConversationBtn from "./AddConversationBtn"

const DashBoardLeftFixedSideBar = () => {
  // const authToken = window.localStorage?.getItem("authToken")
  // console.log(authToken)

  // const token =
  //   "eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.JxNIEKBuzyqAMEVdiya6PfY8vYgrUunDVm2qM2drq1x-LUorcwa2jaa2ABsKJHdkmbFpwAZ23Pn6keSS3DvfzX2LhQOWt-rO.V7s5F30FjYsfBvyZvBSt1A.1SmNuCHdyas0x7i3OdhkpBZsY6GxSAl23HtK1Eq7U9n8hwnMCJrZitWn06BclGBHQfQ4lakW0w-ETV9jg2wzVMQUSGSNMul1eQEgWKpZmwMXIWvcG9AuBvCa_UvuZR3p_6j2IA_LKj9RZdGj8gXipMh3TYinmvBWieQ4hMr5OH4.cvjvrnLMpncZX7xAcxqAEeBTx8kwA-Bb0V7o1_xM_34"

  return (
    <aside
      className={`fixed top-14 left-32 z-30 bottom-3   hidden lg:block
      lg:w-[300px] w-0 lg:left-24 xl:left-32
          bg-white  `}
    >
      {/* Head Name */}
      <div className="absolute w-full  h-full  flex flex-col gap-y-2 scrollbar-thump scrollbar-thin scrollbar-webkit overflow-y-auto overflow-x-clip ">
        <div className=" border bg-topNav flex justify-between items-center py-[0.45rem] text-[0.85rem] text-white px-2 rounded ">
          <p className="text-lg">Conversations</p>
          <AddConversationBtn />
        </div>
        <div
          className={`duration-300 border bg-leftSideBar h-full shadow-lg rounded`}
        >
          {/* <div className=" border bg-pinkBtn flex justify-between items-center py-[0.45rem] text-[0.85rem] text-white px-2 rounded">
            <p>Conversations</p>
            <FaRegTrashAlt className=" text-white text-md" />
          </div> */}

          <Conversations />
        </div>
      </div>
    </aside>
  )
}

export default DashBoardLeftFixedSideBar
