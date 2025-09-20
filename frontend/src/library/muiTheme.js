"use client";

import { createTheme } from "@mui/material/styles";
const globalTheme = require("@/library/globalTheme");

const Theme = createTheme({
  palette: {
    primary: {
      main: globalTheme.palette.primary.main,
      light: globalTheme.palette.primary.light,
      dark: globalTheme.palette.primary.dark,
      accent: globalTheme.palette.primary.accent,
    },
    secondary: {
      main: globalTheme.palette.secondary.main,
      light: globalTheme.palette.secondary.light,
      dark: globalTheme.palette.secondary.dark,
    },
    success: {
      main: globalTheme.palette.success.main,
      light: globalTheme.palette.success.light,
      dark: globalTheme.palette.success.dark,
    },
    error: {
      main: globalTheme.palette.error.main,
      light: globalTheme.palette.error.light,
      dark: globalTheme.palette.error.dark,
    },
    // button: {
    //   main: globalTheme.components.button.main,
    //   light: globalTheme.components.button.light,
    //   dark: globalTheme.components.button.dark,
    //   accent: globalTheme.components.button.accent,
    // },
    app: {
      text: {
        main: "#323232",
        light: "#6E6E6E",
        extraLight: "#9E9E9E",
        error: "#d32f2f",
        disabled: "#000061",
      },
      bg: {
        main: "#FCFCFC",
      },
      //   containedButtonText: {
      //     main: globalTheme.components.containedButtonText.main,
      //   },
    },
  },
  breakpoints: {
    values: {
      xs: 480,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1440,
    },
  },
  typography: {
    fontFamily: "var(--font-inter)",
  },
  components: {
    MuiCheckBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          paddingTop: "4px",
          paddingLeft: "9px",
          paddingRight: "9px",
        }),
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontFamily: "Inter",
          textTransform: "none",
          backgroundColor: theme.palette.primary,
          "&:active": {
            outline: "none",
            // color: theme.palette.primary.light,
          },
          "&:focus": {
            outline: "none",
            // color: theme.palette.primary.light,
          },
        }),
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: ({ theme }) => ({
          paddingBottom: 0,
          paddingTop: 0,
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontFamily: "Inter",
          textTransform: "none",
          backgroundColor: theme.palette.primary,
          "&:active": {
            outline: "none",
            // color: theme.palette.primary.light,
          },
          "&:focus": {
            outline: "none",
            // color: theme.palette.primary.light,
          },
        }),
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        option: ({ theme }) => ({
          fontFamily: "Inter",
          fontSize: "14px",
        }),
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: "14px",
          color: theme.palette.app.text.main,
          paddingTop: "8px",
          paddingBottom: "8px",
        }),
      },
    },
  },
});

export default Theme;
