import React from "react"
import { Box, Typography, Paper } from "@mui/material"
import { makeStyles } from "@mui/styles"
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    marginTop: 150
    //  paddingTop: 10
  }
})
function OroSangre() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Box
        sx={{
          margin: 2,
          maxWidth: 1200
        }}
      >
        <Paper
          elevation={3}
          sx={{
            backgroundColor: "black",
            padding: 2,
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Typography variant="h6" align="justify" color="white">
            Serie de obras que hacen homenaje a la Tierra a partir de los
            símbolos sagrados provenientes del barroco mexicano y la serpiente
            prehispánica. Si bien el territorio actualmente conocido como México
            ha pasado por destrucciones de símbolos e imposiciones religiosas,
            las manifestaciones sagradas de la Tierra no desaparecen: conviven y
            se funden sutilmente con las imágenes de la nueva religión
            imperante. Este homenaje surgió durante momentos de contemplación y
            estados de conciencia receptivos a la estética y la mística de
            símbolos sagrados; como resultado, pude apreciar a la Tierra como un
            ente vivo, mágico y sagrado que resiste ante cada intento de
            explotación, división y destrucción. Con el paso de los siglos, la
            Tierra mexicana se ha convertido en un sincretismo de serpientes
            acéfalas con entrañas abismales y escamas churriguerescas bañadas en
            oro y sangre.
          </Typography>
        </Paper>
      </Box>
    </div>
  )
}
export default OroSangre
