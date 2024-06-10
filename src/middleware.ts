import { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function middleware(req: NextRequest, res: NextResponse) {
  const session = req.cookies.get("session")
  console.log(session)
  const { pathname } = req.nextUrl
  console.log(pathname)

  if (!session) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/chat/:path*"],
}
