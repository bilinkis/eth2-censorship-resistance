import * as React from "react";
import Head from "next/head"
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function Landing() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>Ethereum Uncensored</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "#03A9F4",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg" style={{ color: "#03A9F4" }}>
            <CardMedia
              component="img"
              style={{
                maxWidth: "400px",
                width: "100%",
                textAlign: "center",
                display: "block",
                margin: "0 auto",
              }}
              image="/logo.png"
              alt="random"
            />
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom={"10px"}
              style={{ marginBottom: "30px" }}
            >
              Ethereum Uncensored
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.primary"
              paragraph
            >
              Public Good tool for the Ethereum Community that informs when a block may have been intentionally censored and allows the community to take action against these intentional attacks.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">
                <Link
                  to="/dashboard"
                  href="/dashboard"
                  color={"#fff"}
                  style={{ textDecoration: "none" }}
                  variant="contained"
                >
                  Go to the Dashboard
                </Link>
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg" style={{textAlign:"center"}}>
        <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Roadmap
          </Typography>
          <img src="/roadmap.png" style={{maxWidth:"1000px"}}></img>
          
        </Container>
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Our Team
          </Typography>
          <Grid container spacing={12}>
            <Grid item key={1} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  style={{
                    borderRadius: "50%",
                    width: "90%",
                    display: "block",
                    margin: "0 auto",
                  }}
                  image="/nico.png"
                  alt="Nico Bilinkis"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{
                      display: "block",
                      margin: "0 auto",
                      textAlign: "center",
                    }}
                  >
                    Nico Bilinkis
                  </Typography>
                  <Typography
                    style={{
                      display: "block",
                      margin: "0 auto",
                      textAlign: "center",
                    }}
                  >
                    Developer from Argentina 🇦🇷
                  </Typography>
                </CardContent>
                <CardActions
                  style={{
                    display: "block",
                    margin: "0 auto",
                    textAlign: "center",
                  }}
                >
                  <Link
                    href="https://twitter.com/nicobilinkis"
                    target={"_blank"}
                  >
                    <img
                      src="/Twitter.png"
                      style={{ width: "10%", margin: "10px" }}
                    ></img>
                  </Link>
                  <Link
                    href="https://linkedin.com/in/nicobilinkis"
                    target={"_blank"}
                  >
                    <img
                      src="/linkedin.png"
                      style={{ width: "10%", margin: "10px" }}
                    ></img>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item key={2} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  style={{
                    borderRadius: "50%",
                    width: "90%",
                    display: "block",
                    margin: "0 auto",
                  }}
                  image="/tere.png"
                  alt="Teresa Carballo"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{
                      display: "block",
                      margin: "0 auto",
                      textAlign: "center",
                    }}
                  >
                    Teresa Carballo
                  </Typography>
                  <Typography
                    style={{
                      display: "block",
                      margin: "0 auto",
                      textAlign: "center",
                    }}
                  >
                    Lawyer from Panamá 🇵🇦
                  </Typography>
                </CardContent>
                <CardActions
                  style={{
                    display: "block",
                    margin: "0 auto",
                    textAlign: "center",
                  }}
                >
                  <Link href="https://twitter.com/teresacd" target={"_blank"}>
                    <img
                      src="/Twitter.png"
                      style={{ width: "10%", margin: "10px" }}
                    ></img>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/teresacarballo"
                    target={"_blank"}
                  >
                    <img
                      src="/linkedin.png"
                      style={{ width: "10%", margin: "10px" }}
                    ></img>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item key={3} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  style={{
                    borderRadius: "50%",
                    width: "90%",
                    display: "block",
                    margin: "0 auto",
                  }}
                  image="/ana.png"
                  alt="Ana González"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{
                      display: "block",
                      margin: "0 auto",
                      textAlign: "center",
                    }}
                  >
                    Ana González
                  </Typography>
                  <Typography
                    style={{
                      display: "block",
                      margin: "0 auto",
                      textAlign: "center",
                    }}
                  >
                    Marketing enthusiast and BD from México 🇲🇽
                  </Typography>
                </CardContent>
                <CardActions
                  style={{
                    display: "block",
                    margin: "0 auto",
                    textAlign: "center",
                  }}
                >
                  <Link
                    href="https://twitter.com/anatech_eth"
                    target={"_blank"}
                  >
                    <img
                      src="/Twitter.png"
                      style={{ width: "10%", margin: "10px" }}
                    ></img>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/anabelengonzalezabgf"
                    target={"_blank"}
                  >
                    <img
                      src="/linkedin.png"
                      style={{ width: "10%", margin: "10px" }}
                    ></img>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item key={4} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  style={{
                    borderRadius: "50%",
                    width: "90%",
                    display: "block",
                    margin: "0 auto",
                  }}
                  image="/ulas.png"
                  alt="Ulaş Erdoğan"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{
                      display: "block",
                      margin: "0 auto",
                      textAlign: "center",
                    }}
                  >
                    Ulaş Erdoğan
                  </Typography>
                  <Typography
                    style={{
                      display: "block",
                      margin: "0 auto",
                      textAlign: "center",
                    }}
                  >
                    Developer from Turkey 🇹🇷
                  </Typography>
                </CardContent>
                <CardActions
                  style={{
                    display: "block",
                    margin: "0 auto",
                    textAlign: "center",
                  }}
                >
                  <Link href="https://twitter.com/ulerdogan" target={"_blank"}>
                    <img
                      src="/Twitter.png"
                      style={{ width: "10%", margin: "10px" }}
                    ></img>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/ulaserdogan"
                    target={"_blank"}
                  >
                    <img
                      src="/linkedin.png"
                      style={{ width: "10%", margin: "10px" }}
                    ></img>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item key={5} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  style={{
                    borderRadius: "50%",
                    width: "90%",
                    display: "block",
                    margin: "0 auto",
                  }}
                  image="/brichis.png"
                  alt="Bricia Guzman"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{
                      display: "block",
                      margin: "0 auto",
                      textAlign: "center",
                    }}
                  >
                    Bricia Guzmán
                  </Typography>
                  <Typography
                    style={{
                      display: "block",
                      margin: "0 auto",
                      textAlign: "center",
                    }}
                  >
                    Community Lead and Meme Master from México 🇲🇽
                  </Typography>
                </CardContent>
                <CardActions
                  style={{
                    display: "block",
                    margin: "0 auto",
                    textAlign: "center",
                  }}
                >
                  <Link href="https://twitter.com/brichis_" target={"_blank"}>
                    <img
                      src="/Twitter.png"
                      style={{ width: "10%", margin: "10px" }}
                    ></img>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/bricia-guzman/"
                    target={"_blank"}
                  >
                    <img
                      src="/linkedin.png"
                      style={{ width: "10%", margin: "10px" }}
                    ></img>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
        <Container sx={{py: 8}} maxWidth="md">
        <a class="twitter-timeline" href="https://twitter.com/EthUncensored?ref_src=twsrc%5Etfw">Tweets by EthUncensored</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </Container>
      </main>
      {/* Footer */}
      <Box
        sx={{ bgcolor: "#000", p: 6 }}
        style={{ margin: "0 auto", display: "block" }}
        component="footer"
      >
        
        <Typography
          variant="subtitle1"
          align="center"
          color="#fff"
          component="p"
          style={{ fontWeight: "bold" }}
        >
          Made with ❤️ at ETHMéxico
        </Typography>
        <Container style={{ display:"flex",flexDirection:"row", alignItems:"center", justifyContent:"center", alignContent:"center", textAlign:"center"}}>
          
        <Link
          href="https://github.com/bilinkis/eth2-censorship-resistance"
          target={"_blank"}
          style={{textDecoration:"none"}}
        >
          <img src="/github.png" style={{ width: "50%", maxWidth:"150px", margin: "10px" }}></img>
        </Link>
        </Container>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
