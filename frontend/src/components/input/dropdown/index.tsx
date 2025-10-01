import _ from "lodash";
import styled from "@emotion/styled";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { v4 } from "uuid";
import { memo } from "react";
import { Choices } from "@/library/type";

const CustomSelect = styled(FormControl, {
  shouldForwardProp: (props) => props !== "inputStyles",
})(() => ({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    // width: 350,
    width: "100%",
    "& fieldset": {
      borderColor: "black",
    },
  },
}));

interface AppSelectParams {
  id?: string;
  sx?: Record<string, any>;
  label?: string | null;
  error?: boolean;
  helperText?: string;
  options: Choices[];
  name: string;
  value: string;
  onChange: (event: SelectChangeEvent) => void;
  disabled?: boolean;
  className?: string;
}

const AppSelect = ({
  id = v4(),
  sx = {},
  label = null,
  error = false,
  helperText = "",
  options,
  name,
  value,
  onChange,
  disabled = false,
  className = "",
}: AppSelectParams) => (
  <div className={`w-full ${className}`}>
    <CustomSelect sx={sx} error={error} size="small" disabled={disabled}>
      <InputLabel id={id}>
        <span className="font-inter text-sm">{label}</span>
      </InputLabel>
      <Select
        id={id}
        labelId={`${id}-label`}
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 250,
            },
          },
        }}
      >
        {options.map(({ id, label, option }) => (
          <MenuItem value={option} key={id}>
            <span className="font-inter text-sm text-[#3d3d3d]">{label}</span>
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{helperText}</FormHelperText>}
    </CustomSelect>
  </div>
);

const isEqual = (
  {
    value: prevValue,
    error: prevError,
    disabled: prevDisabled,
  }: Pick<AppSelectParams, "value" | "error" | "disabled">,
  {
    value: nextValue,
    error: nextError,
    disabled: nextDisabled,
  }: Pick<AppSelectParams, "value" | "error" | "disabled">
) =>
  _.isEqual(
    [prevValue, prevError, prevDisabled],
    [nextValue, nextError, nextDisabled]
  );

export default memo(AppSelect, isEqual);

// AppSelect.defaultProps = {
//   sx: {},
//   error: false,
//   helperText: "",
//   options: [],
// };
// AppSelect.propTypes = {
//   sx: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.func,
//   ]),
//   id: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   error: PropTypes.bool,
//   helperText: PropTypes.node,
//   options: PropTypes.array,
// };
// export default AppSelect;
