import { createTheme } from "@mui/material/styles";

const TuffxTheme = createTheme({
  palette: {
    background: {
      default: "#0B0919",
    },

    primary: {
      main: "#DEDEDE",
    },
    secondary: {
      main: "#D0D0D0",
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    body1: {
      color: "#DEDEDE",
      fontWeight: 500,

      "@media (max-width:768px)": {
        fontSize: 14,
      },
    },
    body2: {
      color: "#61FF00",
      fontWeight: 500,

      "@media (max-width:768px)": {
        fontSize: 14,
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            boxShadow: "0 0 5px 2.5px #ff8f1f",
          },
        },
      },
    },
  },
});

export default TuffxTheme;
