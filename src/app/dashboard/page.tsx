"use client";
import { Suspense } from "react";
import Info from "./(merchant)/info/page";
import NavLink from "./nav-link";
import CustomButton from "@/components/ui/Button";

export default function Dashboard() {
  return (
    <div className="">
      <h1>Dashboard</h1>
      <div className="flex justify-center items-center gap-[10px]">
        <NavLink />
      </div>
      <CustomButton
        danger
        tooltip="手动抛错，测试error"
        onClick={() => {
          throw new Error("手动抛错，测试error");
        }}
      >
        throw error
      </CustomButton>
    </div>
  );
}
