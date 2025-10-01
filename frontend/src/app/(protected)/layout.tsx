import React, { ReactNode } from "react";
import Header from "./_layout/header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
