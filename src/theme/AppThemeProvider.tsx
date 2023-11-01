import { ReactNode, useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";
import createAppTheme from "./createAppTheme";

type AppThemeProviderProps = {
  children: ReactNode;
};

function AppThemeProvider({ children }: AppThemeProviderProps) {
  const mode = "light"; // can update in the future

  const theme = useMemo(() => {
    return createAppTheme(mode);
  }, [mode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default AppThemeProvider;
