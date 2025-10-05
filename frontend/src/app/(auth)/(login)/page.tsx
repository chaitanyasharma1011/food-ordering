"use client";

import AppInput from "@/components/input/textfield";
import { onRenderInput } from "@/library/helper";
import { useLoginUser } from "@/redux/slices/user/authApiSlice";
import { Button } from "@mui/material";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";

export default function Login() {
  const [loginUser, loggedinuser] = useLoginUser();
  const [form, setForm] = useState<Record<string, string>>({});
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let body = {
      email: form.email || "",
      password: form?.password || "",
    };
    loginUser({ body });
  };

  useEffect(() => {
    const { data, error } = loggedinuser;
    if (data) {
      Cookies.set("jwtToken", data?.data?.jwt);
      router.push("/home");
    } else if (error) console.log(error);
  }, [loggedinuser]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-6 w-full">
      <h2 className="font-montserrat text-black text-center font-semibold text-2xl uppercase">
        Login
      </h2>
      <AppInput label="Email" {...onRenderInput(form, setForm, "email", "")} />
      <AppInput
        label="Password"
        type="password"
        {...onRenderInput(form, setForm, "password", "")}
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
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
}
