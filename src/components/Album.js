import * as React from "react";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Box from "@mui/joy/Box";
import CssBaseline from "@mui/joy/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Container from "@mui/material/Container";
import Link from "@mui/joy/Link";
import AppNav from "./AppNav";
import framesxTheme from "../theme";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import PhoneAuth from "./PhoneAuth";




function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1];

// TODO remove, this demo shouldn't need to reset the theme

export default function Album() {
  const navigate = useNavigate();
  const [showPhoneAuth, setShowPhoneAuth] = React.useState(false);

  const handleRegisterClick = () => {
    const isLoggedIn = false; 

    if (isLoggedIn) {
      navigate("/register");
    } else {
      setShowPhoneAuth(true);
    }
  };

  return (
    <CssVarsProvider disableTransitionOnChange theme={framesxTheme}>
      <CssBaseline />
      <main>
        <AppNav />
        <Box
          sx={{
            pt: 8,
            pb: 6,
            display:{md:"none",xs:"none"}
          }}
        >
            <Container maxWidth="sm" sx={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Event
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                Explore and collect tickets for upcoming events. Discover exciting
                opportunities and reserve your spot today!
              </Typography>
            </Container>
          
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card
                     sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      width: "50vh",
                      transition: "transform 0.2s ease-in-out", 
                      "&:hover": {
                        transform: "scale(1.08)", 
                        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)", 
                      },
                    }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        pt: "56.25%",
                      }}
                      image="https://www.pcma.org/wp-content/uploads/2018/10/trillion-main.jpg"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                      Event Name
                      </Typography>
                      <Typography>
                        Date - 10/10/2024
                      </Typography>
                      <Typography>
                        Venue - kanchrapara
                      </Typography>
                    </CardContent>
                    <CardActions>
                      {/* <Button>View</Button> */}
                      <Button variant="outlined">Register</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
        <Box
          sx={{
            pt: 8,
            pb: 6,
            display:{md:"none",xs:"flex"},
            flexDirection:"column",
            justifyContent:'center',
            alignItems:"center"
          }}
        >
            <Container maxWidth="sm" sx={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Event
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                Explore and collect tickets for upcoming events. Discover exciting
                opportunities and reserve your spot today!
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button>Explore Events</Button>
                <Button variant="outlined">View Tickets</Button>
              </Stack>
            </Container>
          
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card
                     sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent:"center",
                      width: "40vh",
                      transitionDuration:"3s, 2s",
                      transition: "transform 0.2s ease-in-out", 
                      "&:hover": {
                        transform: "scale(1.08, 3s)", 
                        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)", 
                      },
                    }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        pt: "56.25%",
                      }}
                      image="https://www.pcma.org/wp-content/uploads/2018/10/trillion-main.jpg"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                      Event Name
                      </Typography>
                      <Typography>
                        Date - 12/02/2024
                      </Typography>
                      <Typography>
                        Venue - kalyani
                      </Typography>
                    </CardContent>
                    <CardActions>
                      {/* <Button>View</Button> */}
                      <Button variant="outlined" onClick={handleRegisterClick}>Register</Button>
                    </CardActions>
                    {showPhoneAuth && <PhoneAuth onClose={() => setShowPhoneAuth(false)} />}

                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </main>
      {/* <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box> */}
    </CssVarsProvider>
  );
}
