import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { myPallete } from "../../utils/utils";
import Header from "../header";

const customTheme = createTheme({
  palette: {
    primary: myPallete,
  },
  typography: {
    fontFamily: "Oswald, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
          @font-face {
            font-family: 'Raleway';
            font-weight: 400;
          }
        `,
    },
  },
});

function CustomLayout({ children, notFound }) {
  return (
    <ThemeProvider theme={customTheme}>
      <Header notFound={notFound}/>
      {children}
    </ThemeProvider>
  );
}

export default CustomLayout;
