import React from "react";
import { Box, Typography, Button, Card, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "@fontsource/playfair-display";
import "@fontsource/playfair-display/600.css";

import { PeopleAltOutlined, RemoveRedEyeOutlined, TrackChanges, WorkspacePremiumOutlined } from "@mui/icons-material";

function About() {
    return (
        <Box sx={{ width: "100vw", overflow: "hidden" }}>
            <Box
                sx={{
                    minHeight: { xs: "55vh", md: "48vh" },
                    background: "#132847",
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    px: 3,
                    pb: { xs: 6, md: 8 },
                    pt: { xs: 15, md: 12 },
                    textAlign: "center",
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        textAlign: "center",
                        fontFamily: "Playfair Display",
                        fontWeight: 700,
                        fontSize: { xs: "3.85rem", md: "3rem" },
                        color: "#fff",
                        mb: 2,

                    }}
                >
                    About Sree Paints
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        width: { xs: "90%", sm: "80%", md: "70%" },
                        color: "#e4e8f0",
                        lineHeight: 1.6,
                        fontWeight: 400,
                        mt: 0.5,
                    }}
                >
                    For over two decades, <strong>Sree Paints</strong> has been the trusted name in premium quality paints, bringing color and life to thousands of homes, offices, and industrial spaces across India.
                </Typography>

            </Box>
            <Box
                sx={{
                    py: { xs: 6, md: 8 },
                    px: { xs: 3, md: 12 },
                    textAlign: "center",
                    backgroundColor: "linear-gradient(to bottom, #ffffff, #f8f9fb)",
                }}>
                <Typography variant="h3"
                    sx={{
                        fontFamily: "Playfair Display",
                        fontWeight: 500,
                        color: "#1E2a47",
                        mb: 2.5,
                    }}>
                    Our Story
                </Typography>
                <Box
                    sx={{
                        width: { xs: "90%", md: "70%" },
                        margin: "0 auto",
                        textAlign: "center",

                    }}>
                    <Typography
                        variant="body1"
                        sx={{
                            color: "#4B5563",
                            fontSize: { XS: "1rem", md: "1.1rem" },
                            lineHeight: 1.8,
                            mb: 3,
                            fontWeight: 500,
                            justifyContent: "left",
                            alignItems: "left",
                            textAlign: "left",
                        }}>Founded with a vision to provide high-quality, affordable paints to every
                        Indian household, Sree Paints began its journey in a small manufacturing
                        unit. What started as a family business has now grown into one of the most
                        trusted paint brands in the country.

                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: "#4B5563",
                            fontSize: { xs: "1rem", md: "1.05rem" },
                            lineHeight: 1.9,
                            mb: 3,
                            textAlign: "left",
                        }}
                    >
                        Our commitment to quality and innovation has driven us to constantly improve
                        our formulations. We invest heavily in research and development to ensure
                        our products not only meet but exceed international quality standards while
                        remaining environmentally responsible.
                    </Typography>

                    {/* 🔹 Paragraph 3 */}
                    <Typography
                        variant="body1"
                        sx={{
                            color: "#4B5563",
                            fontSize: { xs: "1rem", md: "1.05rem" },
                            lineHeight: 1.9,
                            textAlign: "left",
                            justifyContent: "left",
                            alignItems: "left",
                        }}
                    >
                        Today, Sree Paints is proud to serve residential, commercial, and industrial
                        clients with a comprehensive range of products designed for every painting
                        need. Our success is built on the trust of our customers and the dedication
                        of our team.
                    </Typography>


                </Box>
            </Box>
            <Grid
                container
                spacing={4}
                justifyContent="center"
                sx={{
                    px: { xs: 3, md: 10 },
                    textAlign: "left",
                }}>
                <Grid item xs={12} md={5.5}>
                    <Card
                        elevation={0}
                        sx={{
                            p: 4,
                            borderRadius: "18px",
                            backgroundColor: "#ffffff",
                            boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                            "&:hover": {
                                transform: "translateY(-4px)",
                                boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                            },
                        }}>

                        <Box
                            sx={{
                                width: 50,
                                height: 50,
                                borderRadius: "50%",
                                backgroundColor: "#173369",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mb: 2.5,
                            }}
                        >
                            <Typography sx={{ fontSize: 49, color: "#fff" }}><TrackChanges sx={{ fontSize: 35 }} /></Typography>
                        </Box>
                        <Typography
                            variant="h5"
                            sx={{
                                fontFamily: "Playfair Display",
                                fontWeight: 700,
                                color: "#1E2A47",
                                mb: 1.5,
                            }}
                        >
                            Our Mission
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: "#4B5563",
                                lineHeight: 1.8,
                                fontSize: "1rem",
                            }}
                        >
                            To provide premium quality, eco-friendly paints that transform spaces
                            while maintaining affordability and sustainability. We strive to be
                            the first choice for homeowners and professionals who value quality
                            and trust.
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} md={5.5}>
                    <Card
                        elevation={0}
                        sx={{
                            p: 4,
                            borderRadius: "18px",
                            backgroundColor: "#ffffff",
                            boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                            "&:hover": {
                                transform: "translateY(-4px)",
                                boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                width: 50,
                                height: 50,
                                borderRadius: "50%",
                                backgroundColor: "#F4C04C",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mb: 2.5,
                            }}
                        >
                            <Typography sx={{ fontSize: 49, color: "#fff" }}><RemoveRedEyeOutlined sx={{ fontSize: 35, color: "#173369" }} /></Typography>
                        </Box>
                        <Typography
                            variant="h5"
                            sx={{
                                fontFamily: "Playfair Display",
                                fontWeight: 700,
                                color: "#1E2A47",
                                mb: 1.5,
                            }}
                        >
                            Our Vision
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: "#4B5563",
                                lineHeight: 1.8,
                                fontSize: "1rem",
                            }}
                        >
                            To be recognized as India’s most trusted and innovative paint brand,
                            setting new standards in quality, sustainability, and customer
                            satisfaction. We envision a future where every wall tells a story of
                            excellence.</Typography></Card></Grid>
            </Grid>

            <Box
                sx={{
                    py: { xs: 6, md: 8 },
                    background: "linear-gradient(to bottom, #fbfaf8, #f8f8f7)",
                    textAlign: "center",
                }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontFamily: "Playfair Display",
                        fontWeight: 700,
                        color: "#1E2A47",
                        mb: 1.5,
                    }}
                >
                    Our Core Values
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        color: "#4B5563",
                        fontSize: { xs: "1.05rem", md: "1.1rem" },
                        mb: 6,
                        fontWeight: 900,
                    }}
                >
                    The principles that guide everything we do
                </Typography>
                <Grid container
                    spacing={4}
                    justifyContent="center"
                    sx={{
                        px: { xs: 3, md: 10 },
                        textAlign: "center"
                    }}>
                    <Grid item xs={12} md={3.5}>
                        <Card
                            elevation={0}
                            sx={{
                                p: 4,
                                borderRadius: "18px",
                                backgroundColor: "#fff",
                                boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-5px)",
                                    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: "50%",
                                    backgroundColor: "#173369",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    mb: 2.5,
                                    mx: "auto",
                                }}
                            >
                                <Typography sx={{ fontSize: 26, color: "#fff" }}><WorkspacePremiumOutlined sx={{ color: "#fffff" }} /></Typography>
                            </Box>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontFamily: "Playfair Display",
                                    fontWeight: 700,
                                    color: "#1E2A47",
                                    mb: 1.5,
                                }}
                            >
                                Quality Excellence
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: "#4B5563",
                                    fontSize: "1rem",
                                    lineHeight: 1.8,
                                }}
                            >
                                We never compromise on quality. Every batch is rigorously tested to
                                meet international standards.
                            </Typography>


                        </Card>
                    </Grid>



                
                <Grid item xs={12} md={3.5}>
                    <Card
                        elevation={0}
                        sx={{
                            p: 4,
                            borderRadius: "18px",
                            backgroundColor: "#fff",
                            boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                            "&:hover": {
                                transform: "translateY(-5px)",
                                boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                width: 60,
                                height: 60,
                                borderRadius: "50%",
                                backgroundColor: "#173369",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mb: 2.5,
                                mx: "auto",
                            }}
                        >
                            <Typography sx={{ fontSize: 26, color: "#fff" }}><PeopleAltOutlined color="#ffff" /></Typography>


                        </Box>
                        <Typography
                            variant="h5"
                            sx={{
                                fontFamily: "Playfair Display",
                                fontWeight: 700,
                                color: "#1E2A47",
                                mb: 1.5,
                            }}
                        >
                            Customer Trust
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: "#4B5563",
                                fontSize: "1rem",
                                lineHeight: 1.8,
                            }}
                        >
                            Building lasting relationships through transparency, reliability, and
                            exceptional service.
                        </Typography>
                    </Card>

                </Grid>
                <Grid item xs={12} md={3.5}>
      <Card
        elevation={0}
        sx={{
          p: 4,
          borderRadius: "18px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
          },
        }}
      >
        <Box
          sx={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            backgroundColor: "#173369",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2.5,
            mx: "auto",
          }}
        >
            <Typography sx={{ fontSize: 6, color: "#fff" }}><RemoveRedEyeOutlined sx={{ color: "#fffff" ,fontSize:30}} /></Typography>
        </Box>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Playfair Display",
            fontWeight: 700,
            color: "#1E2A47",
            mb: 1.5,
          }}
        >
          Innovation
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#4B5563",
            fontSize: "1rem",
            lineHeight: 1.8,
          }}
        >
          Continuously improving our formulas with the latest technology and
          eco-friendly solutions.
        </Typography>
      </Card>

      </Grid>
</Grid>


            </Box>
            <Box
            sx={{
    py: { xs: 6, md: 8 },
    background: "linear-gradient(180deg, #11295b 0%, #12205A 100%)", // deep blue gradient
    color: "#fff",
    textAlign: "center",
  }}>
    <Grid
    container
    spacing={3}
    justifyContent="center"
    alignItems="center"
    sx={{ px: { xs: 3, md: 10 } }}
  >
    <Grid item xs={12} sm={6} md={3}>
      <Typography
        variant="h3"
        sx={{
          color: "#F4C04C", // golden yellow
          fontWeight: 700,
          fontSize: { xs: "2.5rem", md: "3rem" },
          mb: 1,
          fontFamily: "Playfair Display",
        }}
      >
        20+
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 400,
          color: "#dbe6f6",
          fontSize: { xs: "1rem", md: "1.1rem" },
        }}
      >
        Years of Excellence
      </Typography>
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <Typography
        variant="h3"
        sx={{
          color: "#F4C04C",
          fontWeight: 700,
          fontSize: { xs: "2.5rem", md: "3rem" },
          mb: 1,
          fontFamily: "Playfair Display",
        }}
      >
        50,000+
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 400,
          color: "#dbe6f6",
          fontSize: { xs: "1rem", md: "1.1rem" },
        }}
      >
        Happy Customers
      </Typography>
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <Typography
        variant="h3"
        sx={{
          color: "#F4C04C",
          fontWeight: 700,
          fontSize: { xs: "2.5rem", md: "3rem" },
          mb: 1,
          fontFamily: "Playfair Display",
        }}
      >
        200+
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 400,
          color: "#dbe6f6",
          fontSize: { xs: "1rem", md: "1.1rem" },
        }}
      >
        Color Shades
      </Typography>
    </Grid>
<Grid item xs={12} sm={6} md={3}>
      <Typography
        variant="h3"
        sx={{
          color: "#F4C04C",
          fontWeight: 700,
          fontSize: { xs: "2.5rem", md: "3rem" },
          mb: 1,
          fontFamily: "Playfair Display",
        }}
      >15+
</Typography>
<Typography
        variant="h6"
        sx={{
          fontWeight: 400,
          color: "#dbe6f6",
          fontSize: { xs: "1rem", md: "1.1rem" },
        }}
      >
        Product Categories
      </Typography>
    </Grid>
  </Grid>


            </Box>

        </Box>
    );
}

export default About;