import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { APP_BAR_HEIGHT } from "utils/constant";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Box,
  Menu,
  MenuItem,
  Select,
  SelectChangeEvent,
  Container,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "reduxx";
import Path from "route/Path";
import { ExpandMore } from "@mui/icons-material";
import { clearAuth } from "reduxx/authReducer";
import RLink from "components/RLink";
import i18n from "i18n";
import BaseLayout from "./BaseLayout";

export default function MainLayout() {
  const { user } = useAppSelector((state) => state.auth);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [anchorAdminName, setAnchorAdminName] = useState<null | HTMLElement>();

  const handleAdminNameClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorAdminName(event.currentTarget);
  };

  const handleAdminNameMenuClose = () => {
    setAnchorAdminName(null);
  };

  const handleChange = (event: SelectChangeEvent<string>) => {
    i18n.changeLanguage(event.target.value);
  };

  const handleLogout = () => {
    dispatch(clearAuth());
    navigate(Path.login);
  };

  return (
    <BaseLayout>
      <AppBar
        position="sticky"
        color="inherit"
        sx={{
          borderRadius: 0,
          boxShadow: "none",
          height: APP_BAR_HEIGHT,
          borderBottom: 1,
          borderColor: "gray.200",
        }}
      >
        <Toolbar>
          <Button
            color="inherit"
            sx={{ px: 0.5 }}
            onClick={() => navigate(Path.home)}
          >
            <Box sx={{ width: 36, height: 36, mr: 0.5 }} />
            LOGO
          </Button>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            &nbsp;
          </Typography>
          <Typography sx={{ pr: 1 }}>{t("navBar.chooseLanguage")}</Typography>
          <Select value={i18n.language} onChange={handleChange}>
            <MenuItem value="kr">{t("navBar.kr")}</MenuItem>
            <MenuItem value="vi">{t("navBar.vi")}</MenuItem>
            <MenuItem value="en">{t("navBar.en")}</MenuItem>
          </Select>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            &nbsp;
          </Typography>
          <RLink to={Path.home}>
            <h1>{t("navBar.home")}</h1>
          </RLink>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            &nbsp;
          </Typography>
          <RLink to={Path.sample}>
            <h1>{t("navBar.sample")}</h1>
          </RLink>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            &nbsp;
          </Typography>
          <div>
            <Button
              id="basic-button"
              aria-controls={anchorAdminName ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={anchorAdminName ? "true" : undefined}
              onClick={handleAdminNameClick}
              color={anchorAdminName ? "primary" : "inherit"}
              endIcon={<ExpandMore />}
              sx={{ ml: 2 }}
            >
              {user?.username}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorAdminName}
              open={!!anchorAdminName}
              onClose={handleAdminNameMenuClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleAdminNameMenuClose}>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  onClick={() => handleLogout()}
                >
                  {t("Logout")}
                </Button>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </BaseLayout>
  );
}
