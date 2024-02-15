import type {} from "@mui/material/themeCssVarsAugmentation";
import { ThemeOptions, alpha } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { PaletteMode } from "@mui/material";
import { getTokenByMode } from "../generated/tokens";

declare module "@mui/material/styles/createPalette" {
  interface ColorRange {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

  interface PaletteColor extends ColorRange {}
}

export const brand = {
  50: getTokenByMode("primitive.color.red.0", undefined),
  100: getTokenByMode("primitive.color.red.1", undefined),
  200: getTokenByMode("primitive.color.red.2", undefined),
  300: getTokenByMode("primitive.color.red.3", undefined),
  400: getTokenByMode("primitive.color.red.4", undefined),
  500: getTokenByMode("primitive.color.red.5", undefined),
  600: getTokenByMode("primitive.color.red.6", undefined),
  700: getTokenByMode("primitive.color.red.7", undefined),
  800: getTokenByMode("primitive.color.red.8", undefined),
  900: getTokenByMode("primitive.color.red.9", undefined),
};

export const secondary = {
  50: getTokenByMode("primitive.color.orange.0", undefined),
  100: getTokenByMode("primitive.color.orange.1", undefined),
  200: getTokenByMode("primitive.color.orange.2", undefined),
  300: getTokenByMode("primitive.color.orange.3", undefined),
  400: getTokenByMode("primitive.color.orange.4", undefined),
  500: getTokenByMode("primitive.color.orange.5", undefined),
  600: getTokenByMode("primitive.color.orange.6", undefined),
  700: getTokenByMode("primitive.color.orange.7", undefined),
  800: getTokenByMode("primitive.color.orange.8", undefined),
  900: getTokenByMode("primitive.color.orange.9", undefined),
};

export const grey = {
  50: getTokenByMode("primitive.color.gray.0", undefined),
  100: getTokenByMode("primitive.color.gray.1", undefined),
  200: getTokenByMode("primitive.color.gray.2", undefined),
  300: getTokenByMode("primitive.color.gray.3", undefined),
  400: getTokenByMode("primitive.color.gray.4", undefined),
  500: getTokenByMode("primitive.color.gray.5", undefined),
  600: getTokenByMode("primitive.color.gray.6", undefined),
  700: getTokenByMode("primitive.color.gray.7", undefined),
  800: getTokenByMode("primitive.color.gray.8", undefined),
  900: getTokenByMode("primitive.color.gray.9", undefined),
};

export const green = {
  50: getTokenByMode("primitive.color.green.0", undefined),
  100: getTokenByMode("primitive.color.green.1", undefined),
  200: getTokenByMode("primitive.color.green.2", undefined),
  300: getTokenByMode("primitive.color.green.3", undefined),
  400: getTokenByMode("primitive.color.green.4", undefined),
  500: getTokenByMode("primitive.color.green.5", undefined),
  600: getTokenByMode("primitive.color.green.6", undefined),
  700: getTokenByMode("primitive.color.green.7", undefined),
  800: getTokenByMode("primitive.color.green.8", undefined),
  900: getTokenByMode("primitive.color.green.9", undefined),
};

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary:
      mode === "dark"
        ? {
            contrastText: brand[100],
            light: brand[300],
            main: brand[400],
            dark: brand[800],
          }
        : {
            light: brand[200],
            main: brand[500],
            dark: brand[800],
            contrastText: brand[50],
          },
    secondary:
      mode === "dark"
        ? {
            light: secondary[400],
            main: secondary[500],
            dark: secondary[900],
          }
        : {
            light: secondary[300],
            main: secondary[500],
            dark: secondary[800],
          },
    warning: {
      main: getTokenByMode("themedColor.text.warning.default", mode),
      dark: getTokenByMode("themedColor.text.warning.hover", mode),
    },
    error: {
      main: getTokenByMode("themedColor.text.error.default", mode),
      light: red["300"],
      dark: getTokenByMode("themedColor.text.error.hover", mode),
    },
    success: {
      main: getTokenByMode("themedColor.text.success.default", mode),
      light: green[300],
      dark: getTokenByMode("themedColor.text.error.hover", mode),
    },
    grey,
    divider: mode === "dark" ? alpha(grey[600], 0.3) : alpha(grey[300], 0.5),
    background: {
      default:
        mode === "dark"
          ? getTokenByMode("primitive.color.gray.8", undefined)
          : getTokenByMode("primitive.color.white", undefined),
      paper: getTokenByMode("themedColor.surface.1", mode),
    },
    text: {
      primary: getTokenByMode("themedColor.text.mediumEmphasis.default", mode),
      secondary: getTokenByMode("themedColor.text.mediumEmphasis.hover", mode),
    },
    action: {
      selected:
        mode === "dark" ? alpha(brand[800], 0.2) : alpha(brand[200], 0.2),
    },
  },
  typography: {
    fontFamily: ['"Inter", "sans-serif"'].join(","),
    h1: {
      fontSize: 60,
      fontWeight: 600,
      lineHeight: 78 / 70,
      letterSpacing: -0.2,
    },
    h2: {
      fontSize: 48,
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: 42,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: 36,
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: 20,
      fontWeight: 600,
    },
    h6: {
      fontSize: 18,
    },
    subtitle1: {
      fontSize: 18,
    },
    subtitle2: {
      fontSize: 16,
    },
    body1: {
      fontWeight: 400,
      fontSize: 15,
    },
    body2: {
      fontWeight: 400,
      fontSize: 14,
    },
    caption: {
      fontWeight: 400,
      fontSize: 12,
    },
  },
});

export default function getLPTheme(mode: PaletteMode): ThemeOptions {
  return {
    ...getDesignTokens(mode),
    components: {
      MuiAccordion: {
        defaultProps: {
          elevation: 0,
          disableGutters: true,
        },
        styleOverrides: {
          root: ({ theme }) => ({
            padding: 8,
            overflow: "clip",
            backgroundColor: "#fff",
            border: "1px solid",
            borderColor: grey[100],
            ":before": {
              backgroundColor: "transparent",
            },
            "&:first-of-type": {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            },
            "&:last-of-type": {
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            },
            ...(theme.palette.mode === "dark" && {
              backgroundColor: grey[900],
              borderColor: grey[800],
            }),
          }),
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: ({ theme }) => ({
            border: "none",
            borderRadius: 8,
            "&:hover": { backgroundColor: grey[100] },
            ...(theme.palette.mode === "dark" && {
              "&:hover": { backgroundColor: grey[800] },
            }),
          }),
        },
      },
      MuiAccordionDetails: {
        styleOverrides: {
          root: { mb: 20, border: "none" },
        },
      },
      MuiToggleButtonGroup: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: "10px",
            boxShadow: `0 4px 16px ${alpha(grey[400], 0.2)}`,
            "& .Mui-selected": {
              color: brand[500],
            },
            ...(theme.palette.mode === "dark" && {
              "& .Mui-selected": {
                color: "#fff",
              },
              boxShadow: `0 4px 16px ${alpha(brand[700], 0.5)}`,
            }),
          }),
        },
      },
      MuiToggleButton: {
        styleOverrides: {
          root: ({ theme }) => ({
            padding: "12px 16px",
            textTransform: "none",
            borderRadius: "10px",
            fontWeight: 500,
            ...(theme.palette.mode === "dark" && {
              color: grey[400],
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.5)",
              "&.Mui-selected": { color: brand[300] },
            }),
          }),
        },
      },
      MuiButtonBase: {
        defaultProps: {
          disableTouchRipple: true,
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            boxSizing: "border-box",
            transition: "all 100ms ease-in",
            "&:focus-visible": {
              outline: `3px solid ${alpha(brand[500], 0.5)}`,
              outlineOffset: "2px",
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: ({ theme, ownerState }) => ({
            boxSizing: "border-box",
            boxShadow: "none",
            borderRadius: "10px",
            textTransform: "none",
            "&:active": {
              transform: "scale(0.98)",
            },
            ...(ownerState.size === "small" && {
              maxHeight: "32px",
            }),
            ...(ownerState.size === "medium" && {
              height: "40px",
            }),
            ...(ownerState.variant === "contained" &&
              ownerState.color === "primary" && {
                color: brand[50],
                background: brand[500],
                backgroundImage: `linear-gradient(to bottom, ${brand[400]}, ${brand[600]})`,
                boxShadow: `inset 0 1px ${alpha(brand[300], 0.4)}`,
                outline: `1px solid ${brand[700]}`,
                "&:hover": {
                  background: brand[400],
                  backgroundImage: "none",
                  boxShadow: `0 0 0 1px  ${alpha(brand[300], 0.5)}`,
                },
              }),
            ...(ownerState.variant === "outlined" && {
              backgroundColor: alpha(brand[300], 0.1),
              borderColor: brand[300],
              color: brand[500],
              "&:hover": {
                backgroundColor: alpha(brand[300], 0.3),
                borderColor: brand[200],
              },
            }),
            ...(ownerState.variant === "text" && {
              color: brand[500],
              "&:hover": {
                backgroundColor: alpha(brand[300], 0.3),
                borderColor: brand[200],
              },
            }),
            ...(theme.palette.mode === "dark" && {
              ...(ownerState.variant === "outlined" && {
                backgroundColor: alpha(brand[600], 0.1),
                borderColor: brand[700],
                color: brand[300],
                "&:hover": {
                  backgroundColor: alpha(brand[600], 0.3),
                  borderColor: brand[700],
                },
              }),
              ...(ownerState.variant === "text" && {
                color: brand[300],
                "&:hover": {
                  backgroundColor: alpha(brand[600], 0.3),
                  borderColor: brand[700],
                },
              }),
            }),
          }),
        },
      },
      MuiCard: {
        styleOverrides: {
          root: ({ theme, ownerState }) => ({
            backgroundColor: grey[50],
            borderRadius: 10,
            border: `1px solid ${alpha(grey[200], 0.8)}`,
            boxShadow: "none",
            transition: "background-color, border, 80ms ease",
            ...(ownerState.variant === "outlined" && {
              background: `linear-gradient(to bottom, #FFF, ${grey[50]})`,
              "&:hover": {
                borderColor: brand[300],
                boxShadow: `0 0 24px ${brand[100]}`,
              },
            }),
            ...(theme.palette.mode === "dark" && {
              backgroundColor: alpha(grey[800], 0.6),
              border: `1px solid ${alpha(grey[700], 0.3)}`,
              ...(ownerState.variant === "outlined" && {
                background: `linear-gradient(to bottom, ${grey[900]}, ${alpha(
                  grey[800],
                  0.5,
                )})`,
                "&:hover": {
                  borderColor: brand[700],
                  boxShadow: `0 0 24px ${brand[800]}`,
                },
              }),
            }),
          }),
        },
      },
      MuiChip: {
        styleOverrides: {
          root: ({ theme }) => ({
            alignSelf: "center",
            py: 1.5,
            px: 0.5,
            background: `linear-gradient(to bottom right, ${brand[50]}, ${brand[100]})`,
            border: "1px solid",
            borderColor: `${alpha(brand[500], 0.3)}`,
            fontWeight: "600",
            "&:hover": {
              backgroundColor: brand[500],
            },
            "&:focus-visible": {
              borderColor: brand[800],
              backgroundColor: brand[200],
            },
            "& .MuiChip-label": {
              color: brand[500],
            },
            "& .MuiChip-icon": {
              color: brand[500],
            },
            ...(theme.palette.mode === "dark" && {
              background: `linear-gradient(to bottom right, ${brand[700]}, ${brand[900]})`,
              borderColor: `${alpha(brand[500], 0.5)}`,
              "&:hover": {
                backgroundColor: brand[600],
              },
              "&:focus-visible": {
                borderColor: brand[200],
                backgroundColor: brand[600],
              },
              "& .MuiChip-label": {
                color: brand[200],
              },
              "& .MuiChip-icon": {
                color: brand[200],
              },
            }),
          }),
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderColor: `${alpha(grey[200], 0.8)}`,
            ...(theme.palette.mode === "dark" && {
              borderColor: `${alpha(grey[700], 0.4)}`,
            }),
          }),
        },
      },
      MuiLink: {
        defaultProps: {
          underline: "none",
        },
        styleOverrides: {
          root: ({ theme }) => ({
            color: brand[600],
            fontWeight: 500,
            position: "relative",
            textDecoration: "none",
            "&::before": {
              content: '""',
              position: "absolute",
              width: 0,
              height: "1px",
              bottom: 0,
              left: 0,
              backgroundColor: brand[200],
              opacity: 0.7,
              transition: "width 0.3s ease, opacity 0.3s ease",
            },
            "&:hover::before": {
              width: "100%",
              opacity: 1,
            },
            ...(theme.palette.mode === "dark" && {
              color: brand[200],
            }),
          }),
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: "99px",
            color: grey[500],
            fontWeight: 500,
            ...(theme.palette.mode === "dark" && {
              color: grey[300],
            }),
          }),
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundImage: "none",
            backgroundColor: grey[100],
            ...(theme.palette.mode === "dark" && {
              backgroundColor: alpha(grey[900], 0.6),
            }),
          }),
        },
      },
      MuiSwitch: {
        styleOverrides: {
          root: ({ theme }) => ({
            boxSizing: "border-box",
            width: 36,
            height: 24,
            padding: 0,
            transition: "background-color 100ms ease-in",
            "&:hover": {
              "& .MuiSwitch-track": {
                backgroundColor: brand[600],
              },
            },
            "& .MuiSwitch-switchBase": {
              "&.Mui-checked": {
                transform: "translateX(13px)",
              },
            },
            "& .MuiSwitch-track": {
              borderRadius: 50,
            },
            "& .MuiSwitch-thumb": {
              boxShadow: "0 0 2px 2px rgba(0, 0, 0, 0.2)",
              backgroundColor: "#FFF",
              width: 16,
              height: 16,
              margin: 2,
            },
            ...(theme.palette.mode === "dark" && {
              width: 36,
              height: 24,
              padding: 0,
              transition: "background-color 100ms ease-in",
              "&:hover": {
                "& .MuiSwitch-track": {
                  backgroundColor: brand[600],
                },
              },
              "& .MuiSwitch-switchBase": {
                "&.Mui-checked": {
                  transform: "translateX(13px)",
                },
              },
              "& .MuiSwitch-thumb": {
                boxShadow: "0 0 2px 2px rgba(0, 0, 0, 0.2)",
                backgroundColor: "#FFF",
                width: 16,
                height: 16,
                margin: 2,
              },
            }),
          }),
          switchBase: {
            height: 24,
            width: 24,
            padding: 0,
            color: "#fff",
            "&.Mui-checked + .MuiSwitch-track": {
              opacity: 1,
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: ({ theme }) => ({
            "& label .Mui-focused": {
              color: "white",
            },
            "& .MuiInputBase-input": {
              boxSizing: "border-box",
              "&::placeholder": {
                opacity: 0.7,
              },
            },
            "& .MuiOutlinedInput-root": {
              boxSizing: "border-box",
              minWidth: 280,
              minHeight: 40,
              height: "100%",
              borderRadius: "10px",
              border: "1px solid",
              borderColor: grey[200],
              transition: "border-color 120ms ease-in",
              "& fieldset": {
                border: "none",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                background: `${alpha("#FFF", 0.3)}`,
              },
              "&:hover": {
                borderColor: brand[300],
              },
              "&.Mui-focused": {
                borderColor: brand[400],
                outline: "4px solid",
                outlineColor: brand[200],
              },
            },
            ...(theme.palette.mode === "dark" && {
              "& .MuiOutlinedInput-root": {
                boxSizing: "border-box",
                minWidth: 280,
                minHeight: 40,
                height: "100%",
                borderRadius: "10px",
                border: "1px solid",
                borderColor: grey[600],
                transition: "border-color 120ms ease-in",
                "& fieldset": {
                  border: "none",
                  boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.4)",
                  background: `${alpha(grey[800], 0.4)}`,
                },
                "&:hover": {
                  borderColor: brand[300],
                },
                "&.Mui-focused": {
                  borderColor: brand[400],
                  outline: "4px solid",
                  outlineColor: alpha(brand[500], 0.5),
                },
              },
            }),
          }),
        },
      },
    },
  };
}
