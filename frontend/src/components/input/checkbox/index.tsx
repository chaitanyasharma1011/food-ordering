import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

interface AppCheckboxProps {
  label: string;
  name: string;
  value: boolean;
  onChange: (e: any) => void;
  disabled?: boolean;
  className?: string;
  sx?: Record<string, any>;
}

export default function AppCheckbox({
  label,
  name,
  value,
  onChange,
  disabled = false,
  className = "",
  sx = {},
}: AppCheckboxProps) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={value}
          onChange={(e) => {
            const { target } = e;
            onChange?.({
              target: { name: target.name, value: target.checked },
            });
          }}
          name={name}
          disabled={disabled}
          size="small"
          sx={sx}
        />
      }
      label={<span className="font-inter text-sm">{label}</span>}
      className={`${className}`}
    />
  );
}
