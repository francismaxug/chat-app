import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "@/styles/globals.css"
import Demo from "./dashboard-components/Demo"
import AppProvider from "@/app/context/AppContext"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chat bot",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="">
        <main>
          <AppProvider>
            <div className=" mx-0 md:mx-0 lg:mx-32 xl:mx-40">
              <Demo>{children}</Demo>
            </div>
          </AppProvider>
        </main>
        <ToastContainer />
      </body>
    </html>
  )
}
