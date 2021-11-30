import React from "react"
import "animate.css"
//import Animate from "animate.css-react"
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
    margin: -35,
    marginTop: [10, "!important"]
  },

  "@keyframes example": {
    from: { margin: -280, marginTop: 10 },
    to: { margin: -35, marginTop: 10 }
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
        align="center"
        sx={{
          pt: 30,
          color: "#276e5c",
          fontFamily: "Cinzel Decorative"
          // fontStyle: "italic"
        }}
        className="animate__animated animate__fadeIn animate__slower 2s"
      >
        Sofía De la Cueva
      </Typography>
      <img alt="logo-right" src={logoRight} className={classes.logo} />
    </Box>
  )
}

export default Home
