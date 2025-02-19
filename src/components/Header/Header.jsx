import React from "react";
import { Typography } from "@mui/material";
import { HeaderContainer } from "./styles";

function Header() {
  return (
    <HeaderContainer>
      <Typography
        variant="h1"
        fontSize={24}
        fontWeight={700}
        textAlign={"center"}
      >
        Chatter
      </Typography>
    </HeaderContainer>
  );
}

export default Header;
