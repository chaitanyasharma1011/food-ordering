import React from "react";
import Sidebar from "./sidebar";
import Address from "./address";

export default function Cart() {
  return (
    <div className="min-w-[100vw] min-h-[100vh] bg-[#121212]">
      <div className="max-w-[1520px] flex pt-20 min-h-[100vh] mx-auto">
        <Sidebar />
        <Address />
      </div>
    </div>
  );
}
