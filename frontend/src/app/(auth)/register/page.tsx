"use client";

import AppInput from "@/components/input/textfield";
import AppSelect from "@/components/input/dropdown";
import { onRenderInput } from "@/library/helper";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";
import { roles } from "./_data";
import { useRegisterUser } from "@/redux/slices/user/authApiSlice";
import Cookies from "js-cookie";
interface FormType {
  email?: string;
  password?: string;
  confirmPassword?: string;
  name?: string;
  role?: "ROLE_CUSTOMER" | "ROLE_RESTAURANT_OWNER";
}

export default function Login() {
  const [form, setForm] = useState<FormType>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "ROLE_CUSTOMER",
  });
  const [registerUser, registeredUser] = useRegisterUser();
  const router = useRouter();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let body = {
      fullName: form?.name || "",
      email: form?.email || "",
      password: form?.password || "",
      role: form?.role || "ROLE_CUSTOMER",
    };
    registerUser({ body });
  };

  useEffect(() => {
    const { data, error } = registeredUser;
    if (data) {
      Cookies.set("jwtToken", data?.data?.jwt);
      router.push("/home");
    } else if (error) console.log(error);
  }, [registeredUser]);

  return (
    <form className="flex flex-col space-y-6 w-full" onSubmit={handleSubmit}>
      <h2 className="font-montserrat text-black text-center font-semibold text-2xl uppercase">
        Register
      </h2>
      <AppInput
        label="Full Name"
        {...onRenderInput(form, setForm, "name", "")}
      />
      <AppInput label="Email" {...onRenderInput(form, setForm, "email", "")} />
      <AppInput
        label="Password"
        type="password"
        {...onRenderInput(form, setForm, "password", "")}
      />
      <AppInput
        label="Confirm Password"
        type="password"
        {...onRenderInput(form, setForm, "confirm_password", "")}
      />
      <AppSelect
        id="register-user-role-type"
        label={"Role"}
        options={roles}
        {...onRenderInput(form, setForm, "role", "")}
      />
      <p>
        Already have an account ?{" "}
        <span
          className="text-primary-100 cursor-pointer hover:underline hover:underline-offset-2"
          onClick={() => router.push("/")}
        >
          Login
        </span>
      </p>
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
}
