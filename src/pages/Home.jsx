import React from "react";
import Navbar from "../Components/Navbar";
import heroImg from "../assets/hero-home.jpg";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden", 
      }}
    >
      <Navbar />

      <Box
        sx={{
          position: "fixed", 
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -1, 
        }}
      />
      <Box
        sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(20,50,90,0.9), rgba(20,50,90,0.7))",
            zIndex: 1,
        }}
      />
    </Box>
  );
};

export default Home;
