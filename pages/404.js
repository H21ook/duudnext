import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Image
        src={"/assets/not_found.svg"}
        alt="duudlagiin jolooch duud, дуудлагын жолооч дууд notfound"
        title="duudlagiin jolooch duud, дуудлагын жолооч дууд notfound"
        width="550"
        height="400"
      />
      <Box sx={{height: 50, width: "100%"}}></Box>
      <Link
        title="duudlagiin jolooch duud, дуудлагын жолооч дууд back"
        href="/"
      >
        Нүүр хуудасруу очих
      </Link>
    </Box>
  );
}
