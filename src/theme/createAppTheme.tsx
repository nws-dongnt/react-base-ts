import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import darkPalette from "./darkPalette";
import lightPalette from "./lightPalette";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    dark: true;
  }
}
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    xm: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

type ColorGradient = {
  buttonGold1: string;
  gold1: string;
  gold2: string;
  button: string;
  switch: string;
  grayButton: string;
  menu: string;
  news: string;
  transaction: string;
};

type ColorPalette = {
  [key: number | string]: string;
};

type ColorMaterial = {
  primary: {
    primary: string;
    onPrimaryContainer: string;
  };
  secondary: {
    90: string;
    95: string;
  };
  white: string;
  black: string;
  error: {
    80: string;
  };
  dark: {
    tertiary: string;
  };
};

type ColorAccent = {
  bg: string;
  secondary: { [key: string]: string };
  lightGreen: string;
  lightGreenBg: string;
  err: string;
};

declare module "@mui/material/styles" {
  interface Palette {
    gray: ColorPalette;
    slate: ColorPalette;
    yellow: ColorPalette;
    material: ColorMaterial;
    gradient: ColorGradient;
    accent: ColorAccent;
  }
  interface PaletteOptions {
    gray: ColorPalette;
    slate: ColorPalette;
    yellow: ColorPalette;
    material: ColorMaterial;
    gradient: ColorGradient;
    accent: ColorAccent;
  }
}

const createAppTheme = (mode: PaletteMode) => {
  const palette = mode === "light" ? lightPalette : darkPalette;
  return createTheme({
    breakpoints: {
      values: {
        xs: 0,
        xm: 480,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    typography: {
      allVariants: {
        fontFamily: "'Inter', sans-serif;",
        letterSpacing: 0,
      },
    },
    palette,
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: "1rem",
            fontWeight: "600",
            borderRadius: 8,
            textTransform: "none",
            minHeight: 48,
            "&.Mui-disabled": {
              background: palette.gray[650],
              color: palette.gray[500],
              cursor: "not-allowed",
              pointerEvents: "all !important",
            },
          },
          outlined: {
            color: palette.yellow.primary,
            borderColor: palette.yellow.primary,
          },
          containedPrimary: {
            "&:hover": {
              color: palette.text?.primary,
            },
          },
        },
        variants: [
          {
            props: { variant: "primary" },
            style: {
              color: palette.slate[700],
              backgroundSize: "300% 100%",
              backgroundImage: palette.gradient.buttonGold1,
              transition: "all .4s ease-in-out",
              boxShadow: "0px 2px 0px rgba(0, 0, 0, 0.043)",
              "&:not([disabled]):hover": {
                backgroundPosition: "100% 0",
                transition: "all .4s ease-in-out",
              },
            },
          },
          {
            props: { variant: "secondary" },
            style: {
              background: darkPalette.gradient.grayButton,
              color: palette.text?.primary,
            },
          },
          {
            props: { variant: "dark" },
            style: {
              background: "#45474D",
              color: "#F6F8FA",
            },
          },
        ],
      },
      // MuiCheckbox: {
      //   defaultProps: {
      //     icon: <CheckboxIcon />,
      //     checkedIcon: <CheckedCheckboxIcon />,
      //   },
      // },
      MuiOutlinedInput: {
        defaultProps: {
          size: "small",
        },
        styleOverrides: {
          input: {
            borderRadius: 8,
            padding: "12.5px 14px",
          },
          notchedOutline: {
            borderRadius: 8,
          },
        },
      },
      MuiAutocomplete: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root.MuiInputBase-sizeSmall": {
              padding: "12.5px 14px",
              "& .MuiAutocomplete-input": {
                padding: 0,
              },
            },
          },
        },
      },
      // MuiSelect: {
      //   defaultProps: {
      //     IconComponent: DropdownChevronDownIcon,
      //   },
      // },
      MuiPaper: {
        styleOverrides: {
          root: { backgroundImage: "none" },
        },
      },
      MuiPaginationItem: {
        styleOverrides: {
          root: {
            "&.MuiPaginationItem-outlined.MuiPaginationItem-rounded": {
              borderRadius: 4,
              borderColor: palette.slate[600],
              color: palette.slate[400],
              "&.Mui-selected": {
                background: palette.gradient.gold1,
                border: "none",
                color: palette.slate[600],
                fontWeight: "500",
              },
            },
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontFamily: "'Inter', sans-serif;",
          },
        },
      },
    },
  });
};

export default createAppTheme;
