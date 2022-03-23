import React, { useState } from "react";
import {
  Box,
  List,
  ListItemIcon,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import {
  NavLink as RouterLink,
  useLocation,
  matchPath,
} from "react-router-dom";
import { alpha, useTheme, styled } from "@mui/material/styles";

const ListItemStyle = styled((props) => (
  <ListItemButton disableGutters {...props} />
))(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: "relative",
  textTransform: "capitalize",
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(2.5),
  color: theme.palette.text.secondary,
  "&:before": {
    top: 0,
    right: 0,
    width: 3,
    bottom: 0,
    content: "''",
    display: "none",
    position: "absolute",
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: theme.palette.primary.main,
  },
}));

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

function NavItem({ item, active }) {
  const theme = useTheme();
  const { title, path, icon } = item;
  const isActiveRoot = active(item.path);
  // const [open, setOpen] = useState(isActiveRoot);
  //   console.log(isActiveRoot);
  //   console.log(item);

  const activeRootStyle = {
    color: "primary.main",
    fontWeight: "fontWeightMedium",
    bgcolor: alpha(
      theme.palette.primary.main,
      theme.palette.action.selectedOpacity
    ),
    "&:before": { display: "block" },
  };
  return (
    <ListItemStyle
      component={RouterLink}
      to={path}
      sx={{ ...(isActiveRoot && activeRootStyle) }}
    >
      <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
      <ListItemText disableTypography primary={title} />
    </ListItemStyle>
  );
}

function NavSection({ navConfig, ...other }) {
  const { pathname } = useLocation();
  const match = (path) =>
    path ? !!matchPath({ path, end: false }, pathname) : false;
  return (
    <Box>
      <List>
        {navConfig.map((item) => (
          <NavItem key={item.title} item={item} active={match} />
        ))}
      </List>
    </Box>
  );
}

export default NavSection;
