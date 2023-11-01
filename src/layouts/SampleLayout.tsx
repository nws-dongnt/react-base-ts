import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigateBack } from "hooks";
import Path from "route/Path";
import RLink from "components/RLink";
import { Outlet } from "react-router-dom";

export default function Sample() {
  const navigateBack = useNavigateBack();

  return (
    <Box>
      <Button onClick={() => navigateBack(Path.home)}>back</Button>
      <RLink to={Path.listPageExample}>List Page Example</RLink>
      <Outlet />
    </Box>
  );
}
