import { styled } from "@mui/material/styles";
import React from "react";

interface StyledButtonProps {
    children: React.ReactNode;
}
const StyledButton: React.FC<StyledButtonProps> = ({ children }) => {

    const StyledButton = styled("button")(({ theme })  => ({
       backgroundColor: "transparent",
       border: "1px solid ${theme.palette.primary.contrastText}",
       borderRadius: "3px",
       padding: "5px 15px",
       width: "100%",
       color: theme.palette.primary.contrastText,
       display: "inline-flex",
       alignItems: "center",
       justifyContent: "center",
       gap: "10px",
       '&:hover': {
       backgroundColor: theme.palette.primary.contrastText,
    }
    }))
  return (
    <>
      <StyledButton>
        {children}
      </StyledButton>
    </>
  )
}

export default StyledButton;