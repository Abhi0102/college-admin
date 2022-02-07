import React, { useEffect } from "react";
// import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  Box,
  Link,
  Typography,
  Avatar,
  Button,
  Stack,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import NavSection from "./NavSection";
import { sidebarConfig } from "./SidebarConfig";
import { logout } from "../../../actions/auth";


const AccountStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: theme.palette.secondary["main"],
}));
function Sidebar({ isOpenSidebar, onCloseSidebar }) {
  const pathname = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
  }, [pathname]);
  const handleSignOut = (e) => {
    e.preventDefault();
    // console.log(user);
    dispatch(logout());
  };
  return (
    <>
    
      <Stack>
        <Box sx={{ px: 2.5, py: 3 }}>
          <Box component={RouterLink} to="/" sx={{ display: "inline-flex" }}>
            <Avatar />
          </Box>
        </Box>
        <Box sx={{ mb: 5, mx: 2.5 }}>
          <Link underline="none" component={RouterLink} to="#">
            <AccountStyle>
              <Avatar src="/avatar_default.jpg" />
              <Box sx={{ ml: 2 }}>
                <Typography variant="h6" sx={{ color: "white" }}>
                  {user.name}
                </Typography>
              </Box>
            </AccountStyle>
          </Link>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <NavSection navConfig={sidebarConfig} />
        <Box sx={{ px: 2.5, py: 3 }}>
          <Button fullWidth variant="contained" onClick={handleSignOut}>
            Sign Out
          </Button>
        </Box>
      </Stack>

    </>
  );
}

export default Sidebar;
