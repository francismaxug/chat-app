"use client"

import { useEffect, useState } from "react"

import { usePathname } from "next/navigation"
import MainItemsPage from "./MainItemsPage"
import DashBoardLeftFixedSideBar from "./DashBoardLeftFixedSideBar"

const MainBackgroundHolder = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  // console.log(pathname)
  const path = pathname
  // const [user, setUser] = useState<User | null>(null)
  // const router = useRouter()

  // console.log(user)

  const handleIsOpen = () => {
    setOpen((p) => !p)
  }
  // console.log(user)

  // useEffect(() => {
  //   const fetchuser = async () => {
  //     const user = await fetchUser()
  //     setUser(user)
  //   }
  //   fetchuser()
  // }, [])
  return (
    <>
      <div className="">
        <div>
          <DashBoardLeftFixedSideBar />
        </div>
        <MainItemsPage open={open} setOpen={handleIsOpen}>
          {children}
        </MainItemsPage>
        {/* <div className=" fixed left-[24rem] bottom-3 border">Heloooo</div> */}
      </div>
    </>
  )
}

export default MainBackgroundHolder
