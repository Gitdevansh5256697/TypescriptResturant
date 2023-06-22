import React, { useState } from "react";
import {
  AppBar,
  Box,
  Typography,
  Toolbar,
  IconButton,
  Divider,
  Drawer,
} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { Link, NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../images/logo.svg";

interface HeaderProps {}


const Header: React.FC<HeaderProps> = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  //handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //menu drawer for mobile-navigation
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        {/* Logo Image */}
        <img src={Logo} alt="logo" height={"70"} width="200" />  
      </Typography>

      <Divider />

      {/* mobile-navigation Links */}
      <ul className="mobile-navigation">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
          {/* handleDrawerToggle */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >

              <MenuIcon />

            </IconButton>

            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >

              {/* My
              <RestaurantIcon />
              Resturant */}

              {/* Logo Image */}
              <img src={Logo} alt="logo" height={"70"} width="250" />

            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
                <li>
                  <NavLink to={"/login"}>Logout</NavLink>
                </li>
                {/* <li>
                  <NavLink to={"/signup"}>SignUp</NavLink>
                </li>
                <li>
                  <NavLink to={"/login"}>Logout</NavLink>
                </li> */}
              </ul>
            </Box>
          </Toolbar>
        </AppBar>

        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>

        <Box sx={{ p: 1 }}>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};
export default Header;
