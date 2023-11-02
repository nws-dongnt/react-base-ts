import { useMemo, useState } from "react";
import { matchPath, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Popover, Box, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import { PathMap } from "route/Path";
import { FLEX_COL_CENTER_CENTER } from "theme/themeConst";
import { DrawerItem, DrawerChildItem } from "./DrawerItems";

const GListItem = styled(ListItem)(() => ({
  ".MuiListItemButton-root": {
    borderRadius: 10,
  },
  ".Mui-selected": {
    ".MuiSvgIcon-root": {
      color: "#0EA5E9",
    },
    ".MuiListItemText-root": {
      ".MuiTypography-root": {
        color: "#0EA5E9",
        fontWeight: 600,
      },
    },
  },
}));

const GListItemButton = styled(ListItemButton)(() => ({
  borderRadius: 10,
  marginLeft: "10px !important",
  marginRight: "10px !important",
  paddingTop: 6,
  paddingBottom: 6,
  ".MuiTypography-root": {
    fontSize: 14,
  },
}));

type DrawerListItemProps = {
  data: DrawerItem;
};

function DrawerListItem({ data }: DrawerListItemProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const { hasOneSelected, selected } = useMemo(() => {
    let hasOneSelectedCheck = false;
    const selectedSet: { [key: number]: boolean } = {};
    const children: Array<DrawerChildItem> = [
      ...(data.matches
        ? [
            {
              label: "",
              path: data.path,
              matches: data.matches,
            },
          ]
        : []),
      ...(data.children || []),
    ];
    children.forEach((current, index) => {
      const matched = current.matches?.find((match) => {
        return !PathMap[location.pathname]
          ? matchPath(match, location.pathname)
          : match === location.pathname;
      });
      selectedSet[index] =
        location.pathname === current.path || Boolean(matched);
      hasOneSelectedCheck = hasOneSelectedCheck || selectedSet[index];
    });
    return {
      hasOneSelected:
        (!data.children?.length && location.pathname === data.path) ||
        hasOneSelectedCheck,
      selected: selectedSet,
    };
  }, [data.children, data.matches, data.path, location.pathname]);

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (data.children?.length) {
      setAnchorEl(event.currentTarget);
      return;
    }
    navigate(data.path);
  };

  return (
    <>
      <GListItem disablePadding sx={{ pt: 1.5 }}>
        {hasOneSelected && (
          <Box
            sx={{
              height: 32,
              width: 8,
              borderRadius: 16,
              marginLeft: -1.5,
              backgroundColor: "gray.500",
            }}
          />
        )}
        <ListItemButton
          aria-owns={open ? data.label : undefined}
          aria-haspopup="true"
          selected={hasOneSelected}
          onClick={handleClick}
          sx={{ ...FLEX_COL_CENTER_CENTER, maxWidth: 123 }}
        >
          {data.icon}
          <ListItemText
            primary={
              <Typography variant="body2" textAlign="center">
                {t(data.label)}
              </Typography>
            }
            sx={{
              ".MuiListItemText-primary":
                hasOneSelected && data.children?.length
                  ? { fontWeight: "400 !important" }
                  : {},
            }}
          />
        </ListItemButton>
      </GListItem>
      {data.children?.length ? (
        <Popover
          id={data.label}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handlePopoverClose}
        >
          {data.children.map((child, index) => {
            return (
              <List
                key={child.path}
                component="div"
                disablePadding
                sx={{ my: 1 }}
              >
                <GListItemButton
                  sx={{ px: 3 }}
                  selected={Boolean(selected[index])}
                  onClick={() => {
                    handlePopoverClose();
                    navigate(child.path);
                  }}
                >
                  <ListItemText
                    sx={{
                      ".MuiListItemText-primary": selected[index]
                        ? { color: "primary.main", fontWeight: "600" }
                        : {},
                    }}
                    primary={t(child.label)}
                  />
                </GListItemButton>
              </List>
            );
          })}
        </Popover>
      ) : null}
    </>
  );
}

export default DrawerListItem;
