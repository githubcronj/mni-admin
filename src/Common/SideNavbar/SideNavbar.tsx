import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Navbar from "../Navbar/Navbar";
import "./SideNavbar.css";
import { SideNavArr } from "./SideNavArr";
import { useState } from "react";

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  // window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  // const { window } = props;
  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <List className="listStyling">
        {SideNavArr.map((val, index) => (
          <Link key={index} to={val.link} style={{ textDecoration: "none" }}>
            <ListItem
              disablePadding
              className="menuStyle"
              id={active === index ? "active" : ""}
              onClick={() => setActive(index)}
              // id={window.location.pathname.startsWith(val.link) ? "active" : ""}
            >
              <ListItemButton>
                <ListItemIcon>
                  <img src={active === index ? val.iconChange : val.icon} />
                </ListItemIcon>
                <ListItemText>{val.title}</ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  // const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className="appbarStyle"
        sx={{
          ml: { sm: `${drawerWidth}px` },
          zIndex: "1201",
          // display:{ xs: "block", sm:"none"},
        }}
      >
        {/* <Toolbar> */}
        {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton> */}
        <Navbar />
        {/* </Toolbar> */}
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {/* <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      > */}
      <Toolbar />

      {/* </Box> */}
    </Box>
  );
}
function startsWith(link: string) {
  throw new Error("Function not implemented.");
}
