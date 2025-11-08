import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const menuItems = ["Home", "About Us", "Products", "Color Gallery", "Contact"];

  const isHomePage = location.pathname === "/";

  return (
    <>
        <AppBar
            position="fixed"
            sx={{
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            backgroundColor: isHomePage ? "transparent" : "hsl(0,0%,100%)",
            boxShadow: isHomePage ? "none" : "0 4px 12px rgba(0,0,0,0.08)",
            transition: "background-color 0.3s ease"
            }}
        >
        <Toolbar sx={{ px: 3, display: "flex", minHeight: { xs: 80, md: 90 }, justifyContent: "space-between"}}>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                sx={{
                    width: 50,
                    height: 50,
                    background:
                    "linear-gradient(to bottom, hsl(220,70%,20%), hsl(220,60%,30%))",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "13px",
                }}
                >
                <Typography variant="h5" sx={{ fontWeight: 700, fontSize: "1.5rem", color: "hsl(40,30%,97%)" }}>
                    S
                </Typography>
                </Box>

                <Typography
                component={Link}
                to="/"
                sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: "1.5rem",
                    color: isHomePage ? "hsl(40,30%,97%)" : "hsl(220,15%,25%)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                    "&:hover": { color: "#FAD13D" },
                }}
                >
                Sree Paints
                </Typography>
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 2 }}>
                {menuItems.map((item) => {
                const path =
                    item === "Home" ? "/" : `/${item.replace(/\s+/g, "-").toLowerCase()}`;
                const isActive = location.pathname === path;

                return (
                    <Button
                    key={item}
                    component={Link}
                    to={path}
                    sx={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
                        fontSize: "0.875rem",
                        color: isHomePage ? "hsl(40,30%,97%)" : "hsl(220,15%,25%)",
                        textTransform: "none",
                        position: "relative",
                        "&:hover": isHomePage ? { color: "#FAD13D" } : { color: "hsl(220,70%,20%)" },
                        "&::after": isActive
                        ? {
                            content: '""',
                            position: "absolute",
                            bottom: -4,
                            left: 0,
                            width: "100%",
                            height: "0.25rem",
                            backgroundColor: "hsl(220,70%,20%)",
                            }
                        : {},
                    }}
                    >
                    {item}
                    </Button>
                );
                })}

                
                <Button
                variant="contained"
                sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.875rem",
                    textTransform: "none",
                    borderRadius: "10px",
                    background: "linear-gradient(to right, #FAD13D, #FAD13D)",
                    color: "hsl(0,0%,100%)",
                    "&:hover": {
                    background: "linear-gradient(to right, #FAD13D, #FAD13D)",
                    },
                }}
                >
                Get Quote
                </Button>
            </Box>

            <IconButton
                disableRipple
                sx={{
                display: { xs: "flex", md: "none" },
                padding: 1, 
                width: 40,
                height: 40,
                backgroundColor: "transparent",
                transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                "&:hover": { color: "hsl(220,70%,20%)" },
                "&:focus": { outline: "none" },  
                color: "hsl(40,30%,97%)",
                }}
                onClick={() => setOpen(!open)}
            >
                <MenuIcon />
            </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}  PaperProps={{
            sx: {
            backgroundColor: "transparent", 
            boxShadow: "none",              
            },
        }}>
        <List sx={{ width: 200, height: "100%" }}>
          {menuItems.map((item) => (
            <ListItem
              key={item}
              button
              component={Link}
              to={item === "Home" ? "/" : `/${item.replace(/\s+/g, "-").toLowerCase()}`}
              onClick={() => setOpen(false)}
              sx={{ "&:hover": { backgroundColor: "#D4AF37", color: "#0B132B" } }}
            >
              {item}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
