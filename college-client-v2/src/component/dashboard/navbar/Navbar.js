import React from "react";

import { Icon } from "@iconify/react";
import menu2Fill from "@iconify/icons-eva/menu-2-fill";
// material
import { Box, Avatar, Stack, IconButton } from "@mui/material";

function Navbar({ toggleSidebar }) {
  return (
    <Box display="flex">
      <IconButton onClick={toggleSidebar} sx={{ mr: 1, color: "text.primary" }}>
        <Icon icon={menu2Fill} />
      </IconButton>
      <Box sx={{ flexGrow: 1 }} />
      <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
        <Avatar src="/avatar_default.jpg" />
      </Stack>
    </Box>
  );
}

export default Navbar;
