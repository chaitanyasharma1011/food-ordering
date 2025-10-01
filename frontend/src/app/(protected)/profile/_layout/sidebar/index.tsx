"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { menu } from "./data";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="min-h-inherit min-w-[200px] w-[200px] xl:min-w-[240px] xl:w-[240px] bg-[#1E1E1E] rounded hidden lg:block">
      <div className="flex flex-col p-[12px] font-inter-medium text-sm space-y-[10px]">
        {menu.map(({ label, id, navigation }) => (
          <div
            key={["sidebar-menu-option", id].join("-")}
            className={`relative rounded-[6px] transition-all group cursor-pointer ${
              pathname.includes(navigation)
                ? " text-primary-200 bg-primary-100/15"
                : " hover:text-primary-200 hover:bg-primary-100/15 text-[#a0a0a0]"
            }`}
            role="button"
            // onClick={() => onNavigate(navigation)}
          >
            <div className="h-full w-[4px] absolute py-[4px] left-0">
              <div
                className={`h-full rounded-r-[8px] transition-all${
                  pathname.includes(navigation)
                    ? " bg-primary-200"
                    : " group-hover:bg-primary-200"
                }`}
              />
            </div>
            <div className="p-[10px] px-[20px]">
              <span>{label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
