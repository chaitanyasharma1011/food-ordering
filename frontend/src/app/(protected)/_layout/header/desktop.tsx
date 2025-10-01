"use client";

import globalTheme from "@/library/globalTheme";
import { Avatar, Badge } from "@mui/material";
import React, { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export default function Desktop() {
  useEffect(() => {
    const header = document.getElementById("grabit-app-header");
    const handleScroll = () => {
      if (!header) return;
      if (window.scrollY > 1) {
        header.style.backgroundColor = globalTheme.palette.primary.main;
      } else header.style.backgroundColor = "transparent";
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="grabit-app-header"
      className="flex flex-row items-center fixed top-0 z-50 w-full transition-all duration-200"
    >
      <div className="w-full max-w-[1520px] p-4 pr-8 mx-auto">
        <nav className="flex w-full justify-between">
          <li className="list-none">
            <h2 className="font-bold text-3xl font-montserrat text-white">
              Grabit
            </h2>
          </li>

          <div className="flex space-x-10 items-center">
            <FaSearch color="white" size={24} />
            <Avatar sx={{ width: 32, height: 32 }} />
            <Badge badgeContent={4} color="secondary">
              <FaShoppingCart color="white" size={24} />
            </Badge>
          </div>
        </nav>
      </div>
    </header>
  );
}
