import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Initialize completedWeeks cookie if it doesn't exist
  if (!request.cookies.has("completedWeeks")) {
    const response = NextResponse.next()
    response.cookies.set("completedWeeks", JSON.stringify([]))
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/",
}
