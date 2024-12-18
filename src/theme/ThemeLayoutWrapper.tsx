// ThemeLayoutWrapper.tsx
import { Box } from "@mui/material";
import { useTheme } from "@mui/system";
import { ReactNode } from "react";

type ThemeLayoutWrapperProps = {
  children: ReactNode;
};

const ThemeLayoutWrapper = ({ children }: ThemeLayoutWrapperProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      {children}
    </Box>
  );
};

export default ThemeLayoutWrapper;
