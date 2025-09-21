import { Choices } from "@/library/type";
import {
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";
import { memo } from "react";

interface AppRadioProps<T extends Choices> {
  id?: string;
  label?: string;
  options: T[];
  onChange: (e: any) => void;
  error?: boolean;
  name: string;
  value: string;
  disabled?: boolean;
  helperText?: string;
  customStyles?: Record<string, any>;
  orientation?: "horizontal" | "vertical";
}

const AppRadio = <T extends Choices>({
  id,
  label = "",
  options = [],
  onChange,
  error = false,
  name,
  value,
  disabled = false,
  helperText = "",
  customStyles = { display: "block" },
  orientation = "horizontal",
}: AppRadioProps<T>) => (
  <FormControl error={error}>
    <FormLabel id={id}>
      <span className="font-inter-regular text-[#9E9E9E] text-sm">{label}</span>
    </FormLabel>
    <RadioGroup
      row={orientation === "horizontal"}
      aria-labelledby={id}
      name={name}
      value={value}
      onChange={onChange}
    >
      {options.map(({ id, option, label }) => (
        <FormControlLabel
          key={id}
          value={option}
          disabled={disabled}
          control={
            <Radio
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 20,
                },
                display: customStyles.display,
              }}
            />
          }
          label={
            <span className="font-inter-medium text-[#3d3d3d] text-sm">
              {label}
            </span>
          }
        />
      ))}
    </RadioGroup>
    {error && <FormHelperText>{helperText}</FormHelperText>}
  </FormControl>
);

export default memo(AppRadio);
