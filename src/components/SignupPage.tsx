"use client"
import { useFormStatus, useFormState } from "react-dom"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"
import { signup } from "@/app/actions/auth"
import { toast } from "react-toastify"
import { redirect } from "next/navigation"
import { InitState } from "@/lib/types"
import { motion } from "framer-motion"
import { LiaEye, LiaEyeSlash } from "react-icons/lia"
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
            className=" text-center md:py-2 md:text-[0.82rem] flex items-center justify-center gap-x-2  text-[0.95rem] bg-topNav py-[0.6rem] sm:py-1 w-full font-manrope rounded text-white hover:bg-blue-400"
          >
            <Loader2 className=" animate-spin" />
            <p> Sign Up</p>
          </button>
        </>
      ) : (
        <button
          type="submit"
          disabled={pending}
          className=" text-center md:py-2 md:text-[0.82rem]  text-[0.95rem] bg-topNav py-[0.6rem] sm:py-1 w-full font-manrope rounded text-white hover:bg-blue-400"
        >
          Sign Up
        </button>
      )}
    </>
  )
}

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(true)

  const [state, formAction] = useFormState(signup, initailState)

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="  grid md:grid-cols-[400px_1fr] overflow-hidden rounded-sm bg-white my-5"
    >
      <div className="  px-3  sm:px-20 md:px-2  ">
        <div className="flex flex-col py-7 px-9 gap-y-7  ">
          <div className=" flex justify-center flex-col gap-y-4 items-center">
            <div className=" bg-pinkBtn rounded text-center font-manrope size-16 text-xs text-white/80 flex items-center justify-center ">
              CHATBOT
            </div>
            <p className=" text-grayColor font-lexend text-xl font-semibold">
              Sign Up
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
                  htmlFor="email"
                  className=" text-authRed font-manrope text-xs"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Firstname Lastname"
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
                <div className="relative">
                  <input
                    type={passwordVisible ? "password" : "text"}
                    name="password"
                    required
                    className=" border outline-none text-[0.85rem] pr-9  py-[0.7rem] sm:py-[0.4rem] placeholder:text-xs rounded px-2 text-grayColor w-full"
                  />
                  <div
                    onClick={() => setPasswordVisible((p) => !p)}
                    className=" absolute right-0 cursor-pointer  h-full top-0 flex items-center px-3  justify-center"
                  >
                    {passwordVisible ? (
                      <LiaEyeSlash className=" text-slate-500 " />
                    ) : (
                      <LiaEye className=" text-slate-500 " />
                    )}
                  </div>
                </div>
              </div>
              <div className=" flex flex-col gap-y-[0.2rem]">
                <label
                  htmlFor="password"
                  className=" text-authRed font-manrope text-xs"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={passwordVisible ? "password" : "text"}
                    name="confirmPassword"
                    required
                    className=" border outline-none text-[0.85rem] pr-9  py-[0.7rem] sm:py-[0.4rem] placeholder:text-xs rounded px-2 text-grayColor w-full"
                  />
                  <div
                    onClick={() => setPasswordVisible((p) => !p)}
                    className=" absolute right-0 cursor-pointer  h-full top-0 flex items-center px-3  justify-center"
                  >
                    {passwordVisible ? (
                      <LiaEyeSlash className=" text-slate-500 " />
                    ) : (
                      <LiaEye className=" text-slate-500 " />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <SubmitFxn />
          </form>
          <p className=" md:text-xs text-sm text-topNav">
            Dont have an account?{" "}
            <span>
              <Link href="/login" className="underline">
                Log In
              </Link>
            </span>
          </p>
        </div>
      </div>
      <div className="hidden md:block ">
        <div className=" h-full overflow-hidden">
          <Image
            src="/images/robot_sitting.jpg"
            width={2000}
            height={2000}
            quality={80}
            priority
            sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw, 33vw"
            className=" w-full h-full object-cover "
            alt="robot"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default Signup
