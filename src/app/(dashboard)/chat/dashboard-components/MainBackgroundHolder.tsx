import { useState } from "react"

import { usePathname } from "next/navigation"
import MainItemsPage from "./MainItemsPage"
import DashBoardLeftFixedSideBar from "./DashBoardLeftFixedSideBar"
import dynamic from "next/dynamic"

// const DynamicComponent = dynamic(() => import("./DashBoardLeftFixedSideBar"), { ssr: false }) // defaults to loading: LoadingComponent, and ssr: true

const MainBackgroundHolder = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="">
        <div>
          <DashBoardLeftFixedSideBar />
        </div>
        <MainItemsPage>{children}</MainItemsPage>
        {/* <div className=" fixed left-[24rem] bottom-3 border">Heloooo</div> */}
      </div>
    </>
  )
}

export default MainBackgroundHolder
