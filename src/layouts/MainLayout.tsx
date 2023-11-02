import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Container, SxProps } from "@mui/material";
import AppBarComponent from "components/AppBar/AppBar";
import AppDrawer from "components/AppDrawer/AppDrawer";
import { APP_BAR_HEIGHT, DRAWER_WIDTH } from "utils/constant";
import BaseLayout from "./BaseLayout";

interface MainLayoutProps {
  layoutSx?: SxProps;
  contentSx?: SxProps;
}

export default function MainLayout({ layoutSx, contentSx }: MainLayoutProps) {
  return (
    <BaseLayout sx={{ flexDirection: "column", ...(layoutSx || {}) }}>
      <AppBarComponent />
      <Box
        component="main"
        sx={{
          display: "flex",
          flexGrow: 1,
          height: { sm: `calc(100% - ${APP_BAR_HEIGHT}px)` },
          minWidth: 960,
        }}
      >
        <AppDrawer
          width={DRAWER_WIDTH}
          height={`calc(100% - ${APP_BAR_HEIGHT}px)`}
        />
        <Container
          maxWidth="xl"
          sx={{
            // display: "flex",
            flexGrow: 1,
            // flexDirection: "column",
            width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
            p: 3,
            ...(contentSx || {}),
          }}
        >
          <Outlet />
        </Container>
      </Box>
    </BaseLayout>
  );
}
