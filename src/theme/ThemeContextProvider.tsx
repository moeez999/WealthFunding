import { ReactNode, createContext, useMemo, useState } from "react";

import { PaletteMode } from "@mui/material";
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";

type ThemeContextType = {
  switchColorMode: () => void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextType>({
  switchColorMode: () => {},
});

export function ThemeContextProvider({ children }: ThemeProviderProps) {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const switchColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      primary: {
        main: mode === "dark" ? "#0E0C14" : "#fff",
        secondary: {
          main: "#FF8F1F",
        },
      },
      ...(mode === "dark" && {
        background: {
          default: "#0E0C14",
          paper: "#0E0C14",
        },
      }),
      text: {
        ...(mode === "light"
          ? {
              primary: "#000",
              secondary: "#000",
            }
          : {
              primary: "#fff",
              secondary: "#fff",
            }),
      },
    },
  });

  const theme = useMemo(() => {
    const baseTheme = {
      palette: {
        mode,
      },
      typography: {
        fontFamily: "'Montserrat', sans-serif",
        body1: {
          color: "#DEDEDE",
          fontWeight: 500,
          fontSize: 22,
          "@media (max-width:768px)": {
            fontSize: 14,
          },
        },
        body2: {
          color: "#61FF00",
          fontWeight: 500,
          fontSize: 22,
          "@media (max-width:768px)": {
            fontSize: 14,
          },
        },
      },
      components: {
        MuiTypography: {
          styleOverrides: {
            root: {
              color: mode === "light" ? "#000" : "#fff",
            },
          },
        },
        MuiTextField: {
          styleOverrides: {
            root: {
              "& input::placeholder": {
                color: "#DEDEDE",
                padding: "0.2rem",
                fontSize: "0.75rem",
                fontWeight: 400,
                opacity: 1,
              },
              "&. Mui-focused input::placeholder": {
                color: "#FF8F1F",
              },
              "&:hover input::placeholder": {
                color: "#FF8F1F",
              },
              "&. Mui-focused": {
                borderColor: "#FF8F1F",
              },
              "&.Mui-active": {
                borderColor: "#FF8F1F",
              },
            },
          },
        },
        MuiInputAdornment: {
          styleOverrides: {
            root: {
              color: "#DEDEDE",
            },
          },
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              "& input::placeholder": {
                color: "#DEDEDE",
                padding: "0.2rem",
                fontSize: "0.75rem",
                fontWeight: 400,
                opacity: 1,
              },
              "&.Mui-focused input::placeholder": {
                color: "#FF8F1F",
              },
              "&:hover input::placeholder": {
                color: "#FF8F1F",
              },
              "&.Mui-focused": {
                borderColor: "#FF8F1F",
              },
              "&.Mui-active": {
                borderColor: "#FF8F1F",
              },
            },
          },
        },
      },
    };

    return createTheme({
      ...baseTheme,
      ...getDesignTokens(mode),
    });
  }, [mode]);

  //   const darkModeTheme = createTheme(getDesignTokens("dark"));

  return (
    <StyledEngineProvider injectFirst>
      <ThemeContext.Provider value={{ switchColorMode }}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ThemeContext.Provider>
    </StyledEngineProvider>
  );
}
