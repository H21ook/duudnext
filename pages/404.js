import { Box, Button, createTheme, ThemeProvider } from "@mui/material";
import Image from "next/image";
import React from "react";
import Header from "../components/header";
import { myPallete } from "../utils/utils";

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

export default function NotFound() {
  return (
    <ThemeProvider theme={customTheme}>
      <Header notFound={true}></Header>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          src={"/assets/not_found.svg"}
          alt="duudlagiin jolooch duud"
          title="duudlagiin jolooch duud"
          width="550"
          height="400"
        />
        <Button
          title="duudlagiin jolooch duud, дуудлагын жолооч дууд"
          variant="contained"
          size="large"
          href="/"
          style={{
            marginTop: 50,
            marginBottom: 40,
          }}
        >
          Нүүр хуудасруу очих
        </Button>
      </Box>
    </ThemeProvider>
  );
}
