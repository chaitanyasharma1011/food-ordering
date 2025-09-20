import { Avatar, Badge } from "@mui/material";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export default function Desktop() {
  return (
    <div className="flex flex-row items-center bg-primary-100 sticky top-0">
      <div className="w-full max-w-[1520px] p-4 pr-8 mx-auto">
        <nav className="flex w-full justify-between">
          <li className="list-none">
            <h2 className="font-bold text-3xl font-montserrat">Grabit</h2>
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
    </div>
  );
}
