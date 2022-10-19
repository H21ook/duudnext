import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import { Phone, LocationOn, Email } from "@mui/icons-material";
import { Element } from "react-scroll";

const Row = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));

const FooterItem = ({ text, icon }) => {
  return (
    <Row mb={1}>
      {icon}
      <h6
        title={`duudlagiin jolooch duud, дуудлагын жолооч дууд ${text}`}
        style={{
          margin: "0px 0px 0px 8px",
          textAlign: "left",
          color: "white",
          maxWidth: "300px",
          fontWeight: 400,
          fontSize: "1rem",
          lineHeight: 1.75,
          marginLeft: 10,
        }}
      >
        {text}
      </h6>
    </Row>
  );
};
function Footer() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Element style={{ backgroundColor: "#6c63ff" }} name="footer">
      <Container maxWidth="lg">
        <h5
          title="duudlagiin jolooch duud, дуудлагын жолооч дууд contact"
          style={{
            textAlign: matches ? "center" : "left",
            color: "white",
            marginTop: 0,
            paddingTop: 24,
            marginBottom: 16,
            fontWeight: 400,
            fontSize: "1.5rem",
            lineHight: 1.334,
          }}
        >
          Холбоо барих
        </h5>
        {matches ? (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FooterItem
                icon={<Phone sx={{ color: "white" }} />}
                text="+976 76766676"
              />
              <FooterItem
                icon={<Email sx={{ color: "white" }} />}
                text="info.duud@gmail.com"
              />
              <FooterItem
                icon={<LocationOn sx={{ color: "white" }} />}
                text="Хан-Уул дүүрэг, 8-р хороо, Архивчдын гудамж, Шинэ Яармаг цогцолбор хороолол, 726"
              />
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FooterItem
                icon={<Phone sx={{ color: "white" }} />}
                text="+976 76766676"
              />
              <FooterItem
                icon={<LocationOn sx={{ color: "white" }} />}
                text="Хан-Уул дүүрэг, 8-р хороо, Архивчдын гудамж, Шинэ Яармаг цогцолбор хороолол, 726"
              />
            </Grid>
            <Grid item xs={6}>
              <FooterItem
                icon={<Email sx={{ color: "white" }} />}
                text="info.duud@gmail.com"
              />
            </Grid>
          </Grid>
        )}

        <p
          title="duudlagiin jolooch duud, дуудлагын жолооч дууд copyright"
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: 300,
            fontSize: "1rem",
            lineHeight: 1.5,
            paddingBottom: 8,
            paddingTop: 8,
            marginBottom: 0,
          }}
        >
          {`Copyright ©${new Date().getFullYear()}`}
        </p>
      </Container>
    </Element>
  );
}

export default Footer;
