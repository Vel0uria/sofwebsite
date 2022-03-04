import React from "react"
import { Box, Typography, Paper } from "@mui/material"
import { makeStyles } from "@mui/styles"
import ImageGallery from "react-image-gallery"
import dialogo from "../assets/delirium/dialogo.jpg"
import psylocibe from "../assets/delirium/hongos_3.jpg"
import del from "../assets/delirium/s-dialogo.png"
import picapiojos from "../assets/delirium/picapiojos_reduced.png"
import delirium_t from "../assets/gifs/thumbnails/s-dialogo.png"
import caleidociclo_t from "../assets/delirium/caleidociclo.png"

//PENDIENTES: Subir video caleidociclo
//Imágenes menos enoormes...
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    marginTop: 150
    //  paddingTop: 10
  }
})
function Delirium() {
  const classes = useStyles()
  const caleidociclo = "https://player.vimeo.com/video/317075295?h=b14298638e"

  const Psylocibe = () => {
    return (
      <Box
        sx={{
          textAlign: "left",
          position: "static !important"
        }}
      >
        <Typography variant="h6">Psylocibe</Typography>
        <Typography>digital collage</Typography>
        <Typography>1200 x 546 px</Typography>
        <Typography>2019</Typography>
      </Box>
    )
  }

  const Dialogo = () => {
    return (
      <Box sx={{ textAlign: "left" }}>
        <Typography align="center" variant="h6">
          Diálogo entre psylocibes
        </Typography>
        <Typography>digital collage</Typography>
        <Typography>1000 x 667 px</Typography>
        <Typography>2019</Typography>
      </Box>
    )
  }

  function renderVideo() {
    return (
      <div>
        <iframe
          src="https://player.vimeo.com/video/317075295?h=b14298638e"
          width="640"
          height="564"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="caleidociclo"
        />
      </div>
    )
  }
  const images = [
    {
      original: psylocibe,
      thumbnail: psylocibe,
      originalWidth: 950,
      originalHeight: 602,
      description: <Psylocibe />
    },
    {
      original: dialogo,
      thumbnail: dialogo,
      originalWidth: 950,
      originalHeight: 702,
      description: <Dialogo />
    },
    { original: del, thumbnail: delirium_t, originalHeight: 750 },
    {
      original: picapiojos,
      thumbnail: picapiojos,
      originalWidth: 800,
      originalHeight: 800
    },
    {
      original: caleidociclo,
      thumbnail: caleidociclo_t,
      renderItem: renderVideo.bind(caleidociclo)
    }
  ] //   embedUrl: "https://player.vimeo.com/video/317075295?h=b14298638e",

  return (
    <div className={classes.root}>
      <ImageGallery items={images} showPlayButton={false} showNav={false} />

      <Box
        sx={{
          // display: "flex",
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
          <Typography variant="h6" align="justify" color="gray">
            El delirio se manifiesta como un medio de resistencia ante las
            imposiciones de la lógica y la racionalidad socialmente aceptadas.
            El resultado es la creación de realidades alternas: bifurcaciones y
            oposiciones que nos recuerdan que aquello que damos por sentado, por
            verdadero o inamovible es flexible, cuestionable y sustituible.
          </Typography>
        </Paper>
      </Box>
    </div>
  )
}

export default Delirium
