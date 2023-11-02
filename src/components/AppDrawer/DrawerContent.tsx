import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { SxProps } from "@mui/material";
import DrawerListItem from "./DrawerListItem";
import DrawerItems from "./DrawerItems";

type DrawerContentProps = {
  sx?: SxProps;
};

function DrawerContent({ sx }: DrawerContentProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.paper",
        // minHeight: "100vh",
        ...sx,
      }}
    >
      <List sx={{ px: 1 }}>
        {DrawerItems.map((item) => (
          <DrawerListItem key={item.path} data={item} />
        ))}
      </List>
    </Box>
  );
}

export default DrawerContent;
