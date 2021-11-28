import React from "react"
import "animate.css"
import Animate from "animate.css-react"
import { Typography, Box } from "@mui/material"
import logoLeft from "../assets/prueba_web.png"
import logoRight from "../assets/prueba_web2.png"
import { makeStyles } from "@mui/styles"

//import {logoClass} fr "../index.css"
const useStyles = makeStyles({
  logo: {
    height: [600, "!important"],
    width: "auto",
    animationName: "example",
    animationDuration: "1s",
    margin: -45,
    marginTop: [20, "!important"]
  },
  test: {
    animation: "2s animate__fadeIn",
    // animationDuration: "2s",
    color: "#4d4d4d",
    paddingTop: 242
  },
  "@keyframes example": {
    from: { margin: -280, marginTop: 20 },
    to: { margin: -45, marginTop: 20 }
  },

  "@keyframes example1": {
    from: { margin: -280, marginTop: 20 },
    to: { margin: -45, marginTop: 20 }
  }
})

function Home() {
  const classes = useStyles()
  return (
    <Box
      mt={30}
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
        align="center" // color: "#4d4d4d", //sx={{
        //   pt: 20
        // }}
        className={classes.test}
      >
        SOFÍA DE LA CUEVA
      </Typography>
      <img alt="logo-right" src={logoRight} className={classes.logo} />
    </Box>
  )
}

export default Home
