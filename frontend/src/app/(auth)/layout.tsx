"use client";

import MainSection from "./_layout/main_section";
import { useRouter } from "next/navigation";
import { ReactNode, useRef } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="w-full min-h-[100vh] flex items-center bg-white relative">
        {/* <Header /> */}
        <MainSection children={children} />
        {/* <Footer /> */}
      </div>
    </>
  );
}
