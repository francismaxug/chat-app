"use server"
import { SignJWT, jwtVerify } from "jose"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

interface formState {
  errorMessage: string
  authToken: string
  status: string
  date: Date
}

const secretKey = (process.env.SECRET_KEY as string) || "secret"
const key = new TextEncoder().encode(secretKey)

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 sec from now")
    .sign(key)
}
export async function signup(
  preState: formState,
  formdata: FormData
): Promise<any> {
  const email = formdata.get("email") as string
  const name = formdata.get("name") as string
  const password = formdata.get("password") as string
  const confirmPassword = formdata.get("confirmPassword") as string

  //check if the password and confirm password match
  if (password !== confirmPassword) {
    return {
      ...preState,
      errorMessage: "Passwords does not match",
      status: "failed",
      date: new Date(),
    }
  }

  try {
    const response = await fetch(`${process.env.AUTH_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.log(errorData)
      return {
        ...preState,
        errorMessage: errorData.message,
        status: "failed",
        date: new Date(),
      }
    }
    const data = await response.json()
    console.log(data)
    const user = {
      name,
      email,
    }
    const expires = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)
    //encryt the user data
    const session = await encrypt({ user, expires })

    // Save the session in a cookie
    cookies().set("session", session, { expires, httpOnly: true })
    return {
      ...preState,
      status: "success",
      authToken: data.authToken,
      date: new Date(),
    }
  } catch (error) {
    console.log(error)
    return {
      ...preState,
      errorMessage: "failed to signup",
      status: "failed",
      date: new Date(),
    }
  }
}

export async function login(
  preState: formState,
  formdata: FormData
): Promise<any> {
  const email = formdata.get("email") as string
  const password = formdata.get("password") as string

  // console.log(adminID, password);
  console.log(process.env.AUTH_URL)

  try {
    const response = await fetch(`${process.env.AUTH_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.log(errorData)
      return {
        ...preState,
        errorMessage: errorData.message,
        status: "failed",
        date: new Date(),
      }
    }
    const data = await response.json()
    console.log(data)
    const user = {
      email,
    }
    const expires = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)
    const session = await encrypt({ user, expires })

    // Save the session in a cookie
    cookies().set("session", session, { expires, httpOnly: true })
    return {
      ...preState,
      status: "success",
      authToken: data.authToken,
      date: new Date(),
    }
  } catch (error) {
    console.log(error)
    return {
      ...preState,
      errorMessage: "failed to login",
      status: "failed",
      date: new Date(),
    }
  }
}
