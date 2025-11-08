import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import "@fontsource/playfair-display";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
    { label: "Products", path: "/products" },
    { label: "Color Gallery", path: "/color-gallery" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: isHome ? "transparent" : "hsl(0,0%,100%)",
          boxShadow: isHome ? "none" : "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <Toolbar sx={{ px: 3, display: "flex", minHeight: { xs: 80, md: 90 }, justifyContent: "space-between"}}>

          {/* LOGO */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button
                component={Link}
                to="/"
                sx={{
                color: "#fff",
                fontWeight: "700",
                borderRadius: "14px",
                minWidth: { xs: 48, sm: 60 },
                minHeight: { xs: 48, sm: 60 },
                fontSize: { xs: 18, sm: 24 },
                boxShadow: "0 0 8px 2px rgba(244,192,76,0.18)", 
                background: "linear-gradient(to bottom, hsl(220,70%,20%), hsl(220,60%,30%))",
              }}
            >
              S
            </Button>
            <Typography
              component={Link}
              to="/"
              sx={{
                fontFamily: "Playfair Display",
                fontWeight: 700,
                fontSize: { xs: 20, sm: 28 },
                color: isHome ? "#fff" : "#132847",
                textDecoration: "none",
                transition: "color 0.3s ease",
                "&:hover": { color: "#132847" },
              }}
            >
              Sree Paints
            </Typography>
          </Box>

          {/* MENU - DESKTOP */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, alignItems: "center" }}>
            {menuItems.map((item) => {
              const isActive = location.pathname ===  item.path;
              return (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.875rem",
                  color: isHome ? "#fff" : "#132847",
                  textTransform: "none",
                  position: "relative",
                  "&:hover": isHome ? { color: "#fad13d" } : { color: "#132847"},
                  "&::after": isActive
                  ? {
                            content: '""',
                            position: "absolute",
                            bottom: -4,
                             width: "100%",
                            height: "0.25rem",
                            backgroundColor: "hsl(220,70%,20%)",
                            }
                        : {},
                }}
              >
                {item.label}
              </Button>
            );
            })}

            <Button
              variant="contained"
              sx={{
                fontWeight: 500,
                fontSize: "0.875rem",
                textTransform: "none",
                borderRadius: "10px",
                backgroundColor: "#fad13d",
                color: "#132847",
                "&:hover": { backgroundColor: "#fad13d" },
              }}
            >
              Get Quote
            </Button>
          </Box>

          {/* MENU ICON - MOBILE */}
          <IconButton sx={{ display: { xs: "flex", md: "none" }, "&:hover": { color: "#132847" }, color: isHome ? "#fff" : "#132847",}} disableRipple 
            onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} PaperProps={{
            sx: {
            backgroundColor: "transparent", 
            boxShadow: "none",              
            },
        }}>
        <List sx={{ width: 200,height: "100%"  }}>
          {menuItems.map((item) => (
            <ListItem onClick={() => setOpen(false)}
              key={item.label}
              component={Link}
              to={item.path}
              sx={{ py: 3.5, color: "#fff", "&:hover": { backgroundColor: "#fad13d", color: "#132847" }, fontFamily: "'Inter', sans-serif", }}
            >
              {item.label}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
