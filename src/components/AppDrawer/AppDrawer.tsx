import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useAppDispatch, useAppSelector } from "reduxx";
import { closeDrawer } from "reduxx/commonReducer";
import DrawerContent from "./DrawerContent";

interface AppDrawerProps {
  width: number;
  height: number | string;
}

function AppDrawer({ width, height }: AppDrawerProps) {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.common.drawer.open);

  const onClose = () => {
    dispatch(closeDrawer());
  };

  return (
    <Box
      component="nav"
      sx={{ width: { sm: width }, height: { sm: height } }}
      aria-label="rabbit-app-drawer"
    >
      <Drawer
        container={window.document.body}
        variant="temporary"
        open={open}
        onClose={onClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width,
            height,
            top: "auto",
            bottom: 0,
          },
        }}
      >
        <DrawerContent />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          backgroundColor: "white",
          "& .MuiDrawer-paper": {
            borderRadius: 0,
            border: "none",
            boxSizing: "border-box",
            width,
            height,
            top: "auto",
            bottom: 0,
          },
        }}
        open
        className="custom-small-scrollbar"
      >
        <DrawerContent />
      </Drawer>
    </Box>
  );
}

export default AppDrawer;
