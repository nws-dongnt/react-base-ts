import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigateBack } from "hooks";
import Path from "route/Path";
import RLink from "components/RLink";
import { Outlet } from "react-router-dom";
import { FLEX_BETWEEN_CENTER } from "theme";

export default function Sample() {
  const navigateBack = useNavigateBack();

  return (
    <Box>
      <Box sx={{ ...FLEX_BETWEEN_CENTER }}>
        <Button variant="primary" onClick={() => navigateBack(Path.home)}>
          Back
        </Button>
        <RLink to={Path.listPageExample}>List Page Example</RLink>
        <RLink to={Path.listPageExample}>
          Page Detail/Form/Create/Update Example
        </RLink>
      </Box>
      <Outlet />
    </Box>
  );
}
