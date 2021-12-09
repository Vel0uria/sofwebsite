import React from "react"
import "animate.css"
//import Animate from "animate.css-react"
import { Typography, Box, Divider } from "@mui/material"
//import { Link } from "react-router-dom"
import logoLeft from "../assets/prueba_web.png"
import logoRight from "../assets/prueba_web2.png"
import gif from "../assets/gifs/star_text.jpg"
import orosangre from "../assets/orosangre/project-v.png"
import delirium from "../assets/delirium/letras.jpg"
import entelequias from "../assets/entelequias/stories.png"
import loteria from "../assets/loteria/soles.jpg"
import { makeStyles } from "@mui/styles"
import { createTheme } from "@mui/material/styles"
const theme = createTheme()
const useStyles = makeStyles(() => ({
  logo: {
    height: [700, "!important"],
    width: "auto",
    animationName: "example",
    animationDuration: "1s",
    margin: -45,
    marginTop: [4, "!important"],
    [theme.breakpoints.between("xs", "sm")]: {
      height: [180, "!important"]
    },
    [theme.breakpoints.only("md")]: {
      height: [500, "!important"]
    }
  },
  gif: {
    backgroundImage: `url(${gif})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    height: 300
  },
  entelequias: {
    backgroundImage: `url(${entelequias})`,
    // backgroundSize: "cover",
    backgroundPosition: "top",
    height: 300
  },
  delirium: {
    backgroundImage: `url(${delirium})`,
    backgroundSize: "cover",
    height: 300
  },
  orosangre: {
    backgroundImage: `url(${orosangre})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    height: 300
  },
  loteria: {
    backgroundImage: `url(${loteria})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: 300
  },
  "@keyframes example": {
    from: { margin: -280, marginTop: 4 },
    to: { margin: -35, marginTop: 4 }
  }
}))

//PENDIENTES: Desplegar animación en pantalla completa y expandir proyectos mediante click en ícono

function Home() {
  const classes = useStyles()
  return (
    <div>
      <Box
        component="div"
        mt={15}
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "no-wrap",
          justifyContent: "center"
        }}
      >
        <img alt="logo-left" src={logoLeft} className={classes.logo} />
        <Typography
          variant="h1"
          align="center"
          sx={{
            pt: { xs: 10, sm: 16, md: 20, lg: 26, xl: 35 },
            color: "#2b885d",
            fontFamily: "Cinzel Decorative",
            fontSize: { xs: 20, sm: 50, md: 70, lg: 80, xl: 100 }
          }}
          className="animate__animated animate__fadeIn animate__slower 2s"
        >
          Sofía De la Cueva
        </Typography>
        <img alt="logo-right" src={logoRight} className={classes.logo} />
      </Box>
      <Box component="div" mt={30} className={classes.gif}>
        <Divider color="black" />
        <Typography
          variant="h2"
          align="center"
          pt={13}
          sx={{ fontWeight: "bold" }}
        >
          GIFs
        </Typography>
      </Box>

      <Box component="div" mt={10} className={classes.delirium}>
        <Divider color="black" />
        <Typography
          variant="h2"
          align="center"
          pt={13}
          sx={{ fontWeight: "bold", color: "black" }}
        >
          DELIRIUM
        </Typography>
      </Box>
      <Box component="div" mt={10} className={classes.orosangre}>
        <Divider color="black" />
        <Typography
          variant="h2"
          align="center"
          pt={13}
          sx={{ fontWeight: "bold" }}
        >
          ORO Y SANGRE
        </Typography>
      </Box>
      <Box component="div" mt={10} className={classes.loteria}>
        <Divider color="black" />
        <Typography
          variant="h2"
          align="center"
          pt={13}
          sx={{ fontWeight: "bold", color: "black" }}
        >
          LOTERÍA
        </Typography>
      </Box>
      <Box component="div" mt={10} className={classes.entelequias}>
        <Divider color="black" />
        <Typography
          variant="h2"
          align="center"
          pt={13}
          sx={{ fontWeight: "bold", color: "black" }}
        >
          ENTELEQUIAS
        </Typography>
      </Box>
      <Box component="div" mt={10}>
        <Divider color="black" />
        <Typography variant="h2" align="center" pt={13}>
          TAROT ALGORÍTMICO
        </Typography>
      </Box>
    </div>
  )
}

export default Home
