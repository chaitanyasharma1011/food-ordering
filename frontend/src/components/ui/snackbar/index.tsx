import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import Alert, {
  AlertColor,
  AlertPropsColorOverrides,
} from "@mui/material/Alert";
import { ReactNode, SyntheticEvent } from "react";
import { OverridableStringUnion } from "@mui/types";

interface Props {
  sx?: Record<string, any>;
  open: boolean;
  onClose: (e: Event | SyntheticEvent<any, Event>) => void;
  message: ReactNode;
  severity?:
    | OverridableStringUnion<AlertColor, AlertPropsColorOverrides>
    | undefined;
  variant?: "standard" | "filled" | "outlined";
  icon?: ReactNode;
  anchorOrigin?: SnackbarOrigin;
  autoHideDuration?: number;
}
const AppSnackbar = ({
  sx = {},
  open,
  onClose,
  message,
  severity,
  variant = "standard",
  icon = null,
  anchorOrigin = {
    vertical: "bottom",
    horizontal: "left",
  },
  autoHideDuration = 4000,
}: Props) => (
  <Snackbar
    open={open}
    autoHideDuration={autoHideDuration}
    anchorOrigin={anchorOrigin}
    onClose={onClose}
  >
    <Alert
      sx={sx}
      {...(icon && { icon })}
      onClose={onClose}
      severity={severity}
      variant={variant}
    >
      {message}
    </Alert>
  </Snackbar>
);

export default AppSnackbar;
