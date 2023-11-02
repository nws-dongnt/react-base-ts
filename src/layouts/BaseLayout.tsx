import { ReactNode } from "react";
import { Box, SxProps } from "@mui/material";

interface BaseLayoutProps {
  children: ReactNode;
  sx?: SxProps;
}

function BaseLayout({ sx, children }: BaseLayoutProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        ...(sx || {}),
      }}
    >
      {children}
    </Box>
  );
}

export default BaseLayout;
