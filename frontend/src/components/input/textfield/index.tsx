"use client";

import { TextField, TextFieldVariants } from "@mui/material";
import styled from "@emotion/styled";
// import _ from "lodash";
import { ChangeEventHandler, memo, useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const Input = styled(TextField, {
  shouldForwardProp: (props) => props !== "inputStyles",
})(({ theme }) => ({
  width: "100%",
  ".MuiInputLabel-shrink": {
    top: 2,
  },
  "& label": {
    fontFamily: "var(--font-inter)",
    fontSize: 14,
  },
  "& .MuiOutlinedInput-root": {
    // width: 350,
    width: "100%",
    fontFamily: "var(--font-inter)",
    fontSize: 14,
    lineHeight: "1.429em",
    "& input": {
      padding: "10px 14px",
      height: "inherit",
    },
    "& fieldset": {
      borderColor: "black",
    },
  },
}));

interface InputProps {
  id?: string;
  error?: boolean;
  type?: "text" | "password";
  variant?: TextFieldVariants;
  label?: string;
  helperText?: string;
  placeholder?: string;
  disabled?: boolean;
  autoComplete?: "on" | "off";
  name?: string;
  value?: string;
  onChange?: ChangeEventHandler;
  sx?: Record<string, any>;
  InputProps?: Record<string, any>;
  InputLabelProps?: Record<string, any>;
  minRows?: number;
  maxRows?: number;
  multiline?: boolean;
  required?: boolean;
  className?: string;
  passwordMeter?: boolean;
  popoverContent?: string;
}

const AppInput = ({
  id,
  error = false,
  type = "text",
  variant = "outlined",
  label,
  helperText = "",
  placeholder,
  disabled = false,
  autoComplete = "off",
  name,
  value,
  onChange,
  sx = {},
  InputProps = {},
  InputLabelProps = {},
  minRows = 1,
  maxRows = 1,
  multiline = false,
  required = false,
  className = "",
  passwordMeter = false,
  popoverContent = "",
}: InputProps) => {
  const [passwordToggle, setPasswordToggle] = useState(false);
  let inputType = type;
  if (inputType === "password")
    inputType = passwordToggle ? "text" : "password";

  return (
    <div className={`relative w-full ${className}`}>
      <Input
        size="small"
        variant={variant}
        id={id}
        label={label}
        error={error}
        helperText={helperText}
        type={inputType}
        disabled={disabled}
        autoComplete={autoComplete}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        minRows={minRows}
        maxRows={maxRows}
        multiline={multiline}
        sx={sx}
      />
      {type === "password" && (
        <div className="absolute right-[12px] top-[12px]">
          {passwordToggle && (
            <div
              onClick={() => setPasswordToggle(false)}
              role="button"
              tabIndex={0}
            >
              <BsFillEyeFill className="text-primary-200" />
            </div>
          )}
          {!passwordToggle && (
            <div
              onClick={() => setPasswordToggle(true)}
              role="button"
              tabIndex={0}
            >
              <BsFillEyeSlashFill color="#3D3D3D" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// LOGIC TO SUPPORT DATE PICKER MEMOIZATION
// const isEqual = (prev: InputProps, next: InputProps) => {
//   const {
//     error: prevError,
//     helperText: prevHelperText,
//     disabled: prevDisabled,
//   } = prev;
//   const prevValue = _.has(prev, "value") ? prev.value : "";
//   const {
//     error: nextError,
//     helperText: nextHelperText,
//     disabled: nextDisabled,
//   } = next;
//   const nextValue = _.has(next, "value") ? next.value : "";
//   return _.isEqual(
//     [prevValue, prevError, prevDisabled, prevHelperText],
//     [nextValue, nextError, nextDisabled, nextHelperText]
//   );
// };

export default AppInput;
