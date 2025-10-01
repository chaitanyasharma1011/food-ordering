"use client";

import AppInput from "@/components/input/textfield";
import { onRenderInput } from "@/library/helper";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({});
  const router = useRouter();
  return (
    <div className="flex flex-col space-y-6 w-full">
      <h2 className="font-montserrat text-black text-center font-semibold text-2xl uppercase">
        Login
      </h2>
      <AppInput label="Email" {...onRenderInput(form, setForm, "email", "")} />
      <AppInput
        label="Password"
        type="password"
        {...onRenderInput(form, setForm, "email", "")}
      />
      <p>
        Don't have an account ?{" "}
        <span
          className="text-primary-100 cursor-pointer hover:underline hover:underline-offset-2"
          onClick={() => router.push("/register")}
        >
          Signup
        </span>
      </p>
      <Button variant="contained">Submit</Button>
    </div>
  );
}
