import Image from "next/image"
import Link from "next/link"
import React from "react"

const Signup = () => {
  return (
    <div className="  grid md:grid-cols-[400px_1fr] overflow-hidden rounded-sm bg-white my-5">
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
          <form className=" space-y-9 w-60">
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
                  placeholder="text@mail.com"
                  className=" border outline-none text-[0.85rem] placeholder:text-xs rounded px-2 py-[0.4rem] text-grayColor w-full"
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
                  placeholder="Firstname Lastname"
                  className=" border outline-none text-[0.85rem] placeholder:text-xs rounded px-2 py-[0.4rem] text-grayColor w-full"
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
                  className=" border outline-none text-[0.85rem]  py-[0.4rem] placeholder:text-xs rounded px-2 text-grayColor w-full"
                />
              </div>
              <div className=" flex flex-col gap-y-[0.2rem]">
                <label
                  htmlFor="password"
                  className=" text-authRed font-manrope text-xs"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  className=" border outline-none text-[0.85rem]  py-[0.4rem] placeholder:text-xs rounded px-2 text-grayColor w-full"
                />
              </div>
            </div>
            <button className=" text-center md:py-2 md:text-[0.82rem]  text-[0.95rem] bg-topNav py-1 w-full font-manrope rounded text-white hover:bg-blue-400">
              Sign Up
            </button>
          </form>
          <p className=" text-xs text-topNav">
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
            src="/robot_sitting.jpg"
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
    </div>
  )
}

export default Signup
