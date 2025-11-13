import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "@fontsource/playfair-display";
import "@fontsource/playfair-display/600.css";

function About() {
    return (
        <Box sx={{ width: "100%", overflow: "hidden" }}>
            <Box
                sx={{
                minHeight: { xs: "67vh", md: "62vh" }, 
                background: "linear-gradient(to bottom, hsl(220,70%,20%), hsl(220,60%,30%))",
                color: "#fff",
                pt: 5,
                }}
            >
                <Typography
                variant="h3"
                sx={{
                    textAlign: "center",
                    mt: 15,
                    fontFamily: "Playfair Display",
                    fontWeight: 700,
                    fontSize: { xs: "3rem", md: "3rem" },
                    color: "#fff",
                    mb: 3.5,
                }}
                >
                   About Sree Paints
                </Typography>
                <Typography
                    variant="h6"
                    sx={{  
                    width: "80%",
                    margin: "0 auto",
                    color: "#fff",
                    textAlign: "center",
                    mb: 4,
                    lineHeight: 1.4,
                    }}
                >
                  For over two decades, Sree Paints has been the trusted name in premium quality paints, bringing color and life to thousands of homes, offices, and industrial spaces across India.
                </Typography>

            </Box>

        </Box>
    );
}

export default About;