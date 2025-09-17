// app/dashboard/nav-link.tsx
"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
// 注意在组件中使用 usePathname() 等 hooks，需要在文件顶部声明 use client 表示这是一个客户端渲染组件

export default function NavLink() {
  const pathname = usePathname();
  const { replace, push } = useRouter();

  return (
    <div className="flex justify-center items-center h-screen gap-[10px]">
      <Link
        style={{ color: pathname === "/dashboard/customers" ? "#333" : "#999" }}
        href="/dashboard/customers"
      >
        Customers
      </Link>
      <div onClick={() => push("/dashboard/list")} className="cursor-pointer">
        navigate to list
      </div>
      <div onClick={() => push("/dashboard/info")} className="cursor-pointer">
        navigate to info
      </div>
      <div onClick={() => push("/dashboard")} className="cursor-pointer">
        back to dashboard page
      </div>
    </div>
  );
}
