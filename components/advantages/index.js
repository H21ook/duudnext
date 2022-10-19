import Image from "next/image";
import { styled, useTheme } from "@mui/material/styles";
import { Box, Container, useMediaQuery } from "@mui/material";
import { myPallete } from "../../utils/utils";
import { Element } from "react-scroll";

const Row = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const AdvantageItem = ({ text, icon, direction, name }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Row sx={{ p: 3, mb: 2, flexDirection: direction ?? "row" }}>
      <Image
        src={icon}
        alt={`duudlagiin jolooch duud, дуудлагын жолооч дууд ${name}`}
        title={`duudlagiin jolooch duud, дуудлагын жолооч дууд ${name}`}
        height="150"
        width="220"
      />
      <p
        title={`duudlagiin jolooch duud, дуудлагын жолооч дууд ${name} desc`}
        style={{
          textAlign: matches ? "center" : "left",
          margin: "0 20px",
          maxWidth: "400px",
          fontWeight: 400,
          fontSize: "1rem",
          lineHeight: 1.75,
        }}
      >
        {text}
      </p>
    </Row>
  );
};

function Advantages() {
  return (
    <Element
      style={{ backgroundColor: `${myPallete["500"]}10`, padding: "60px 0" }}
      name="advantage"
    >
      <Container maxWidth="lg">
        <AdvantageItem
          name="image 1"
          icon={"/assets/price.svg"}
          text="Үнийн уян хатан бодлого баримтлах бөгөөд Улаанбаатар хот дотор 20.000 төгрөгийн тарифтайгаар үйлчилж байна."
        />
        <AdvantageItem
          name="image 2"
          icon={"/assets/time.svg"}
          text="24/7 цагийн турш тасралтгүй дуудлагын төвөөрөө дамжуулан таны хүссэн цагт, хүссэн газарт тань бид бэлэн байх болно"
          direction="row-reverse"
        />
        <AdvantageItem
        name="image 3"
          icon={"/assets/security.svg"}
          text="Манай жолооч нар даатгагдсан, мэргэшсэн хамт олон бөгөөд, найрсаг аюулгүй үйлчилгээг үзүүлэх болно."
        />
      </Container>
    </Element>
  );
}

export default Advantages;
