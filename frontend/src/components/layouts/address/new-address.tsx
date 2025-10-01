import AppInput from "@/components/input/textfield";
import { onRenderInput } from "@/library/helper";
import { Button } from "@mui/material";
import React, { useState } from "react";

export default function NewAddress() {
  const [form, setForm] = useState({});
  return (
    <div className="min-w-[300px]">
      <h3 className="text-lg font-semibold9">Enter Details</h3>
      <div className="mt-4 space-y-4">
        <AppInput
          label="Street Address"
          {...onRenderInput(form, setForm, "street", "")}
        />
        <AppInput
          label="Landmark"
          {...onRenderInput(form, setForm, "landmark", "")}
        />
        <div className="grid grid-cols-2 gap-4">
          <AppInput
            label="State"
            {...onRenderInput(form, setForm, "state", "")}
          />
          <AppInput
            label="Pincode"
            {...onRenderInput(form, setForm, "pincode", "")}
          />
        </div>
        <AppInput label="City" {...onRenderInput(form, setForm, "city", "")} />
        <Button variant="contained">Deliver Here</Button>
      </div>
    </div>
  );
}
