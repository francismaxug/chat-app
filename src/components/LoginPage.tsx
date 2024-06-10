"use client"
import Image from "next/image"
import Link from "next/link"
import { useFormStatus, useFormState } from "react-dom"

import { InitState } from "@/lib/types"
import { useEffect } from "react"
import { Loader2 } from "lucide-react"
import { login } from "@/app/actions/auth"
import { toast } from "react-toastify"
import { redirect } from "next/navigation"
import { motion } from "framer-motion"

const initailState: InitState = {
  errorMssage: null,
  status: "",
  authToken: "",
  date: new Date(),
}

function SubmitFxn() {
  const { pending } = useFormStatus()
  return (
    <>
      {pending ? (
        <>
          <button
            disabled
            className=" flex items-center justify-center gap-x-2 text-center md:py-2 md:text-[0.82rem]  text-[0.95rem] bg-topNav py-[0.6rem] sm:py-1 w-full font-manrope rounded text-white hover:bg-blue-400 "
          >
            <Loader2 className=" animate-spin" />
            <p> Log In</p>
          </button>
        </>
      ) : (
        <button
          type="submit"
          disabled={pending}
          className=" text-center md:py-2 md:text-[0.82rem]  text-[0.95rem] bg-topNav py-[0.6rem] sm:py-1  w-full font-manrope rounded text-white hover:bg-blue-400"
        >
          Log In
        </button>
      )}
    </>
  )
}

const Login = () => {
  const [state, formAction] = useFormState(login, initailState)

  useEffect(
    function (): any {
      if (state?.status === "failed" && state?.date) {
        toast.error(state?.errorMessage)
        return
      }

      if (state?.status === "success") {
        // Save the authToken in the local storage and route to the user to the chat page
        localStorage.setItem("authToken", state?.authToken)
        redirect("/chat")
      }
    },
    [state?.errorMessage, state?.status, state?.date, state]
  )
  console.log(state)

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="  grid md:grid-cols-[400px_1fr] overflow-hidden rounded-sm bg-white my-10"
    >
      <div className="  px-3  sm:px-20 md:px-2 py-3  ">
        <div className="flex flex-col py-7 px-9 gap-y-7  ">
          <div className=" flex justify-center flex-col gap-y-4 items-center">
            <div className=" bg-pinkBtn rounded text-center font-manrope size-16 text-xs text-white/80 flex items-center justify-center ">
              CHATBOT
            </div>
            <p className=" text-grayColor font-lexend text-xl font-semibold">
              Log In
            </p>
          </div>
          <form className=" space-y-9 w-60" action={formAction}>
            <div className=" space-y-5">
              <div className=" flex flex-col gap-y-[0.2rem]">
                <label
                  htmlFor="email"
                  className=" text-authRed font-manrope text-xs"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="text@mail.com"
                  className=" border outline-none text-[0.85rem] placeholder:text-xs rounded px-2 py-[0.7rem] sm:py-[0.4rem] text-grayColor w-full"
                />
              </div>
              <div className=" flex flex-col gap-y-[0.2rem]">
                <label
                  htmlFor="password"
                  className=" text-authRed font-manrope text-xs"
                >
                  Password
                </label>
                <input
                  type="password"
                  required
                  name="password"
                  className=" border outline-none text-[0.85rem]  py-[0.7rem] sm:py-[0.4rem] placeholder:text-xs rounded px-2 text-grayColor w-full"
                />
              </div>
            </div>
            <SubmitFxn />
          </form>
          <p className=" md:text-xs text-sm text-topNav">
            Dont have an account?{" "}
            <span>
              <Link href="/signup" className="underline">
                Sign up
              </Link>
            </span>
          </p>
        </div>
      </div>
      <div className="hidden md:block">
        <div className=" h-full">
          <Image
            src="/images/robot_sitting.jpg"
            width={2000}
            height={2000}
            quality={80}
            priority
            sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw, 33vw"
            className=" w-full h-full object-cover"
            alt="robot"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default Login
