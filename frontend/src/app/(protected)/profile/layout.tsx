import { ReactNode } from "react";
import Sidebar from "./_layout/sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-w-[100vw] min-h-[100vh] bg-[#121212] pt-[84px] pb-4">
      <div className="max-w-[1520px] flex min-h-[calc(100vh_-_100px)] mx-auto px-4">
        <Sidebar />
        <div className="flex-1 min-h-inherit bg-[#1E1E1E] ml-4 rounded">
          {children}
        </div>
      </div>
    </div>
  );
}
