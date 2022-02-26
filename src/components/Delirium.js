import React from "react"
import { Box, Typography, Paper } from "@mui/material"
import { makeStyles } from "@mui/styles"
import ImageGallery from "react-image-gallery"
import dialogo from "../assets/delirium/hongos.jpg"
import psylocibe from "../assets/delirium/hongos 2.jpg"
import del from "../assets/delirium/s-dialogo.png"
import picapiojos from "../assets/delirium/picapiojos2.jpg"

//PENDIENTES: Subir video caleidociclo

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    marginTop: 100
    //  paddingTop: 10
  }
})
function Delirium() {
  const classes = useStyles()
  const Del = () => {
    return (
      <Box sx={{ textAlign: "left" }}>
        <Typography align="center" variant="h6">
          Delirium
        </Typography>
        <Typography>animated GIF</Typography>
        <Typography>400 x 1050 px</Typography>
        <Typography>2020</Typography>
      </Box>
    )
  }
  const images = [
    {
      original: dialogo,
      thumbnail: dialogo,
      originalWidth: 1050,
      originalHeight: 902
    },
    { original: psylocibe, thumbnail: psylocibe, description: <Del /> },
    { original: del, thumbnail: del },
    {
      original: picapiojos,
      thumbnail: picapiojos
    }
  ]

  return (
    <div className={classes.root}>
      <ImageGallery items={images} showPlayButton={false} />

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
            La hipnosis que provoca el gif animado proviene de su relación
            intrínseca con el mito del eterno retorno, que simboliza el
            mecanismo universal en el cual nos encontramos inmersos, donde
            alejarse implica regresar, soñar implica despertar y morir es
            renacer. De igual manera, la estructura cíclica del gif y su
            constante repetición sin la posibilidad de play ni pausa, lo
            convierte en una serpiente de pixeles que muerde su cola una y otra
            vez.
          </Typography>
        </Paper>
      </Box>
    </div>
  )
}

export default Delirium
