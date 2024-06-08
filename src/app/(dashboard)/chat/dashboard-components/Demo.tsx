import { Nunito } from "next/font/google"
import { cookies } from "next/headers"

import MainBackgroundHolder from "./MainBackgroundHolder"
import Header from "./Header"

const nunito = Nunito({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
})

// async function getCurrentUser() {
//   try {
//     const user: User = await getSession()
//     if (user === null) {
//       // router.push("/")
//       return
//     }
//     console.log(user)
//     return user
//   } catch (error) {
//     console.log(error)
//   }
// }

const Demo = ({ children }: { children?: React.ReactNode }) => {
  // const user = await fetch(
  //   "http://localhost:5000/api/v1/church/getCurrentAdmin",{
  //     credentials: "include"
  //   }
  // )
  // console.log(user)
  // const data = await getCurrentUser()
  // console.log(data)
  return (
    <>
      <div className={`  dark:bg-gray-900 ${nunito.className} `}>
        <Header />
        <MainBackgroundHolder>{children}</MainBackgroundHolder>
      </div>
    </>
  )
}

export default Demo
