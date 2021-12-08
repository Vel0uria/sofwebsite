import React from "react"
import "animate.css"
//import Animate from "animate.css-react"
import { Typography, Box, Divider } from "@mui/material"
import { Link } from "react-router-dom"
import logoLeft from "../assets/prueba_web.png"
import logoRight from "../assets/prueba_web2.png"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  logo: {
    height: [400, "!important"],
    width: "auto",
    animationName: "example",
    animationDuration: "1s",
    margin: -45,
    marginTop: [15, "!important"]
  },

  "@keyframes example": {
    from: { margin: -280, marginTop: 15 },
    to: { margin: -35, marginTop: 15 }
  }
})

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
            pt: 20,
            color: "#2b885d",
            fontFamily: "Cinzel Decorative",
            fontSize: 80
          }
          // fontStyle: "italic"
          }
          className="animate__animated animate__fadeIn animate__slower 2s"
        >
          Sofía De la Cueva
        </Typography>
        <img alt="logo-right" src={logoRight} className={classes.logo} />
      </Box>
      <Box component="div" mt={10}>
        <Divider color="inherit" />
        <Typography variant="h2" align="center" pt={20}>
          GIFs
        </Typography>
      </Box>
      <Box component="div" mt={10}>
        <Divider color="inherit" />
        <Typography variant="h2" align="center" pt={20}>
          TESIS: ENTELEQUIAS
        </Typography>
      </Box>
      <Box component="div" mt={10}>
        <Divider color="inherit" />
        <Typography variant="h2" align="center" pt={20}>
          DELIRIUM
        </Typography>
      </Box>
      <Box component="div" mt={10}>
        <Divider color="inherit" />
        <Typography variant="h2" align="center" pt={20}>
          TAROT ALGORÍTMICO
        </Typography>
      </Box>
      <Box component="div" mt={10}>
        <Divider color="inherit" />
        <Typography variant="h2" align="center" pt={20}>
          ORO Y SANGRE
        </Typography>
      </Box>
      <Box component="div" mt={10}>
        <Divider color="inherit" />
        <Typography variant="h2" align="center" pt={20}>
          LOTERÍA
        </Typography>
      </Box>
    </div>
  )
}

export default Home
