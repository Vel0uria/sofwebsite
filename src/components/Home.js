import React from "react"
import "animate.css"
import { Typography, Box, Divider } from "@mui/material"
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown"
//import { Link } from "react-router-dom"

import logoLeft from "../assets/prueba_web.png"
import logoRight from "../assets/prueba_web2.png"
import gif from "../assets/gifs/star_text.jpg"
import orosangre from "../assets/orosangre/project-v.png"
import delirium from "../assets/delirium/letras.jpg"
import entelequias from "../assets/entelequias/stories.png"
import tarot from "../assets/tarot/lune.png"
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${gif})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    height: 300
  },
  entelequias: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${entelequias})`,
    // backgroundSize: "cover",
    backgroundPosition: "top",
    height: 300
  },
  delirium: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${delirium})`,
    //backgroundColor: `fade(#FFFFFF, 70%)`,
    backgroundSize: "cover",
    height: 300
  },
  orosangre: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${orosangre})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    height: 300
  },
  loteria: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${loteria})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: 300
  },
  tarot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${tarot})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: 300
  },
  "@keyframes example": {
    from: { margin: -280, marginTop: 4 },
    to: { margin: -35, marginTop: 4 }
  }
}))

//PENDIENTES: Tipografía, box Works con arrowDown

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
            fontWeight: 800,
            fontSize: { xs: 20, sm: 50, md: 70, lg: 80, xl: 100 }
          }}
          className="animate__animated animate__fadeIn animate__slower 2s"
        >
          SOFÍA DE LA CUEVA
        </Typography>
        <img alt="logo-right" src={logoRight} className={classes.logo} />
      </Box>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexFlow: "column wrap"
        }}
      >
        <Typography
          variant="subtitle1"
          color="darkviolet"
          sx={{ fontSize: { lg: 18, xl: 20 } }}
        >
          WORK
        </Typography>
        <KeyboardDoubleArrowDownIcon
          sx={{
            color: "darkviolet"
          }}
        />
      </Box>
      <Box component="div" mt={20} className={classes.gif}>
        <Divider color="black" />
        <Typography
          variant="h2"
          align="center"
          pt={13}
          sx={{
            fontWeight: "bold",
            padding: 1,
            borderRadius: 1,
            color: "grey",
            backgroundColor: "rgba(20,20,20,50%)"
          }}
        >
          GIFs
        </Typography>
      </Box>
      <Box component="div" mt={5} className={classes.delirium}>
        <Divider color="black" />
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            padding: 1,
            borderRadius: 1,
            color: "grey",
            backgroundColor: "rgba(20,20,20,50%)"
          }}
        >
          DELIRIUM
        </Typography>
      </Box>
      <Box component="div" mt={5} className={classes.orosangre}>
        <Divider color="black" />
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontWeight: "bold",
            padding: 1,
            borderRadius: 1,
            color: "grey",
            backgroundColor: "rgba(20,20,20,50%)"
          }}
        >
          ORO Y SANGRE
        </Typography>
      </Box>
      <Box component="div" mt={5} className={classes.loteria}>
        <Divider color="black" />
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontWeight: "bold",
            color: "grey",
            padding: 1,
            borderRadius: 1,
            backgroundColor: "rgba(20,20,20,50%)"
          }}
        >
          LOTERÍA
        </Typography>
      </Box>
      <Box component="div" mt={5} className={classes.entelequias}>
        <Divider color="black" />
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontWeight: "bold",
            color: "grey",
            padding: 1,
            borderRadius: 1,
            backgroundColor: "rgba(20,20,20,50%)"
          }}
        >
          ENTELEQUIAS
        </Typography>
      </Box>
      <Box component="div" mt={5} className={classes.tarot}>
        <Divider color="black" />
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontWeight: "bold",
            color: "grey",
            padding: 1,
            borderRadius: 1,
            backgroundColor: "rgba(20,20,20,50%)"
          }}
        >
          FRACTALES
        </Typography>
      </Box>
    </div>
  )
}

export default Home
