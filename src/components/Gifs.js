import React from "react"
import { Box, Typography, Paper } from "@mui/material"
import { makeStyles } from "@mui/styles"
import ImageGallery from "react-image-gallery"
import aleph_t from "../assets/gifs/thumbnails/aleph_t.png"
import retorno_t from "../assets/gifs/thumbnails/star_text.jpg"
import delirium_t from "../assets/gifs/thumbnails/s-dialogo.png"
import carta_t from "../assets/gifs/thumbnails/carta.png"
import kukulkan_t from "../assets/gifs/thumbnails/q_3_v2.png"
import buro_t from "../assets/gifs/thumbnails/buro.png"
import retorno from "../assets/gifs/star_text_2.gif"
import aleph from "../assets/gifs/aleph.gif"
import delirium from "../assets/gifs/del_small.gif"
import carta from "../assets/gifs/elBueno.gif"
import kukulkan from "../assets/gifs/q_3_v2.gif"
import buro from "../assets/gifs/buro.gif"

//PENDIENTE: texto descriptivo, link a HEN.
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center"
  }
})
function Gifs() {
  const classes = useStyles()
  const Aleph = () => {
    return (
      <Box sx={{ textAlign: "left" }}>
        <Typography align="center" variant="h6">
          Aleph
        </Typography>
        <Typography>animated GIF </Typography>
        <Typography>1000 x 750 px</Typography>
        <Typography>2020</Typography>
      </Box>
    )
  }

  const Retorno = () => {
    return (
      <Box sx={{ textAlign: "left" }}>
        <Typography align="center" variant="h6">
          Eterno retorno
        </Typography>
        <Typography>animated GIF </Typography>
        <Typography>905 x 700 px</Typography>
        <Typography>2021</Typography>
      </Box>
    )
  }

  const Kukulkan = () => {
    return (
      <Box sx={{ textAlign: "left" }}>
        <Typography align="center" variant="h6">
          Kukulkan
        </Typography>
        <Typography>animated GIF</Typography>
        <Typography>1000 x 1000 px</Typography>
        <Typography>2021</Typography>
      </Box>
    )
  }

  const Buro = () => {
    return (
      <Box sx={{ textAlign: "left" }}>
        <Typography>Bodegón con esferas</Typography>
        <Typography>animated GIF</Typography>
        <Typography>600 x 400 px</Typography>
        <Typography>2021</Typography>
      </Box>
    )
  }

  const Delirium = () => {
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

  const Carta = () => {
    return (
      <Box sx={{ textAlign: "left" }}>
        <Typography align="center" variant="h6">
          Tarot algorítmico
        </Typography>
        <Typography>animated GIF</Typography>
        <Typography>420 x 720</Typography>
        <Typography>2020</Typography>
      </Box>
    )
  }

  const images = [
    {
      original: aleph,
      thumbnail: aleph_t,
      description: <Aleph />
    },
    { original: buro, thumbnail: buro_t, description: <Buro /> },
    { original: retorno, thumbnail: retorno_t, description: <Retorno /> },
    { original: kukulkan, thumbnail: kukulkan_t, description: <Kukulkan /> },
    { original: delirium, thumbnail: delirium_t, description: <Delirium /> },
    { original: carta, thumbnail: carta_t, description: <Carta /> }
  ]

  return (
    <div className={classes.root}>
      <Box>
        <ImageGallery items={images} showPlayButton={false} />
      </Box>
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

export default Gifs
