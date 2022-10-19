import Image from "next/image";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { PhoneEnabled } from "@mui/icons-material";
import { Box, Button, Container, Grid, useMediaQuery } from "@mui/material";
import Footer from "../components/footer";
import Advantages from "../components/advantages";

export default function Home({}) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
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
                  title="duudlagiin jolooch duud, дуудлагын жолооч дууд title"
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
                  title="duudlagiin jolooch duud, дуудлагын жолооч дууд desc"
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
                  title="duudlagiin jolooch duud, дуудлагын жолооч дууд button"
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
              alt="duudlagiin jolooch duud, дуудлагын жолооч дууд banner"
              title="duudlagiin jolooch duud, дуудлагын жолооч дууд banner title"
              priority={true}
              width="550"
              height="300"
            />
          </Grid>
        </Grid>
      </Container>
      <Advantages />
      <Footer />
    </>
  );
}
