import React from "react"
import { Box, Typography, Paper } from "@mui/material"
import { makeStyles } from "@mui/styles"
import ImageGallery from "react-image-gallery"
import vertical from "../assets/orosangre/vertical.png"
import horizontal from "../assets/orosangre/project-v.png"
import framed from "../assets/orosangre/framed.jpg"
import framed_1 from "../assets/orosangre/framed-1.png"
import cirio from "../assets/orosangre/oro-sangre-pic.jpg"
import cirio_1 from "../assets/orosangre/opcion_2.png"

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    marginTop: 150
    //  paddingTop: 10
  },
  vertical: {
    maxHeight: 900,
    maxWidth: 500,
    padding: 10,
    borderRadius: 5
  },
  images: {
    maxWidth: 1000,

    "& img": {
      borderRadius: 7
    }
  }
})
function OroSangre() {
  const classes = useStyles()
  const images = [
    {
      original: horizontal,
      thumbnail: horizontal,
      originalClass: classes.images
    },
    { original: framed, thumbnail: framed, originalClass: classes.images },
    { original: framed_1, thumbnail: framed_1, originalClass: classes.images }
  ]

  const images_1 = [
    {
      original: cirio,
      thumbnail: cirio
    },
    {
      original: cirio_1,
      thumbnail: cirio_1
    }
  ]
  return (
    <div className={classes.root}>
      <Box
        sx={{
          maxWidth: 1200,
          display: "flex",
          flexFlow: "column wrap",
          alignItems: "center"
        }}
      >
        <img src={vertical} alt="vertical" className={classes.vertical} />
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
      <ImageGallery items={images} showPlayButton={false} />
      <ImageGallery items={images_1} showPlayButton={false} />
    </div>
  )
}
export default OroSangre
