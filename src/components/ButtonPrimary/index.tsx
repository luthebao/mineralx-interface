import React from "react";

import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

const ButtonPrimary = styled(Button)({
  padding: "15px 40px",
  borderRadius: "45px",
  background: "linear-gradient(180deg, #FFF 16.33%, #7C7C7C 93.3%)"
});

export default ButtonPrimary;
