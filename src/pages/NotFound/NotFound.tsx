import React from "react";
import { Box, Typography } from "@mui/material";
import { FLEX_CENTER_CENTER } from "theme/themeConst";

export default function NotFound() {
  return (
    <Box sx={{ ...FLEX_CENTER_CENTER, height: "100vh" }}>
      <Typography>404 not found</Typography>
    </Box>
  );
}
