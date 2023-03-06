import { useState } from "react";
import {
  Grid,
  Container,
  Toolbar,
  Paper,
  AppBar,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
  Box,
} from "@mui/material";
import NavbarProfile from "../NavbarProfile/NavbarProfile";
import logoImg from "../../Assets/images/navbarLogo.svg";
import MenuIcon from "@mui/icons-material/Menu";

import "./Navbar.css";
import { SideNavArr } from "../SideNavbar/SideNavArr";
import { Link } from "react-router-dom";
const drawerWidth = 240;

const drawer = (
  <div>
    <Toolbar />
    <List className="listStyling">
      {SideNavArr.map((val, index) => (
        <Link key={index} to={val.link} style={{ textDecoration: "none" }}>
          <ListItem
            disablePadding
            className="menuStyle"
            id={window.location.pathname == val.link ? "active" : ""}
          >
            <ListItemButton>
              <ListItemIcon>
                <img
                  src={
                    window.location.pathname == val.link
                      ? val.iconChange
                      : val.icon
                  }
                />
              </ListItemIcon>
              <ListItemText>{val.title}</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  </div>
);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "white" }}>
        <Toolbar
          sx={{
            boxShadow: "0px 1px 3px #00000014",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            // color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none", xs: "inline-block" } }}
          >
            <MenuIcon />
          </IconButton>

          <img
            src={logoImg}
            className="image-style"
            style={{ left: "0" }}
            alt="logoImg"
          />
          <NavbarProfile />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};
export default Navbar;
