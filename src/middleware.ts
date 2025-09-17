// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("middleware request: ", request.nextUrl.pathname);

  if (request.nextUrl.pathname === "/dashboard") {
    // 重定向到 /dashboard/customers 页面
    return NextResponse.redirect(new URL("/dashboard/customers", request.url));
  }
}

export const config = {
  // 匹配器，让中间件在指定的路径上运行（排除 `/api`、`/_next/static`、`/_next/image` 和 `/favicon.ico` 路径）
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
