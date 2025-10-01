import { Button } from "@mui/material";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function User() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center space-y-6">
      <FaUserCircle color="#bfbfbf" size={100} />
      <h4 className="text-white font-semibold text-2xl">
        {"Chaitanya Sharma"}
      </h4>
      <p className="text-white font-medium">
        <span>Email : </span>
        <span>{"chaitanya.sharma@gmail.com"}</span>
      </p>
      <Button variant="contained">Log Out</Button>
    </div>
  );
}
