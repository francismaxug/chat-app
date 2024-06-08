"use client"

import { useEffect, useState } from "react"

import { usePathname } from "next/navigation"
import MainItemsPage from "./MainItemsPage"




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
      
        <MainItemsPage open={open} setOpen={handleIsOpen}>
          {children}
        </MainItemsPage>
      </div>
    </>
  )
}

export default MainBackgroundHolder
