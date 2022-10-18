import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { PhoneEnabled } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  createTheme,
  Grid,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import Footer from "../components/footer";
import Advantages from "../components/advantages";
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

export default function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <ThemeProvider theme={customTheme}>
      <Header />
      <Container maxWidth="lg">
        <Grid
          p={2}
          container
          spacing={2}
          direction={matches ? "column-reverse" : "row"}
          justifyContent="center"
          alignItems={"center"}
          sx={{ height: matches ? "auto" : "70vh" }}
        >
          <Grid
            item
            xs={12}
            sm={7}
            md={6}
            justifyContent="center"
            alignItems={"center"}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: matches ? 200 : 400,
                minHeight: 300,
              }}
            >
              <div
                style={{
                  maxWidth: 400,
                  textAlign: matches ? "center" : "left",
                }}
              >
                <h1
                  title="duudlagiin jolooch duud, дуудлагын жолооч дууд"
                  style={{
                    textAlign: matches ? "center" : "left",
                    fontSize: matches ? "2.125rem" : "3rem",
                    lineHeight: matches ? 1.235 : 1.167,
                    fontWeight: 700,
                  }}
                >
                  Танд жолооч хэрэгтэй байна уу?
                </h1>
                <h6
                  title="duudlagiin jolooch duud, дуудлагын жолооч дууд"
                  style={{
                    textAlign: matches ? "center" : "left",
                    color: "#888888",
                    fontWeight: 300,
                    marginBottom: 20,
                    fontSize: "1rem",
                    lineHeight: 1.75,
                  }}
                >
                  Манай дуудлагын жолоочид түргэн шуурхай, даатгагдсан
                  найдвартай үйлчилгээг санал болгож байна.
                </h6>
                <Button
                  title="duudlagiin jolooch duud, дуудлагын жолооч дууд"
                  variant="contained"
                  size="large"
                  href="tel:76766676"
                  endIcon={<PhoneEnabled />}
                >
                  Тэгвэл яг одоо ЗАЛГА
                </Button>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={5} md={6} justifyContent="center">
            <Image
              src={"/assets/bannar1.svg"}
              alt="duudlagiin jolooch duud"
              title="duudlagiin jolooch duud"
              priority={true}
              width="550"
              height="300"
            />
          </Grid>
        </Grid>
      </Container>
      <Advantages />
      <Footer />
    </ThemeProvider>
  );
}
