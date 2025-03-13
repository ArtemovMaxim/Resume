import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Добавляем заголовки кэширования для статических ресурсов
  if (
    request.nextUrl.pathname.startsWith("/_next/") ||
    request.nextUrl.pathname.startsWith("/images/") ||
    request.nextUrl.pathname.endsWith(".jpg") ||
    request.nextUrl.pathname.endsWith(".png") ||
    request.nextUrl.pathname.endsWith(".svg") ||
    request.nextUrl.pathname.endsWith(".webp") ||
    request.nextUrl.pathname.endsWith(".avif")
  ) {
    response.headers.set("Cache-Control", "public, max-age=31536000, immutable")
  }

  // Добавляем заголовки кэширования для страниц
  if (request.nextUrl.pathname === "/" || request.nextUrl.pathname === "/en") {
    response.headers.set("Cache-Control", "public, max-age=3600, stale-while-revalidate=86400")
  }

  // Добавляем заголовки кэширования для блога
  if (request.nextUrl.pathname.startsWith("/blog") || request.nextUrl.pathname.startsWith("/en/blog")) {
    response.headers.set("Cache-Control", "public, max-age=3600, stale-while-revalidate=86400")
  }

  return response
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}

