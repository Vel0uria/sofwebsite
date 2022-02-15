import React from "react"
import { Box, Typography } from "@mui/material"
import ImageGallery from "react-image-gallery"
import aleph from "../assets/gifs/aleph.gif"
import aleph_t from "../assets/gifs/aleph_t.png"
import retorno from "../assets/gifs/star_text_2.gif"
import retorno_t from "../assets/gifs/star_text.jpg"

function Gifs() {
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
  const images = [
    {
      original: aleph,
      thumbnail: aleph_t,
      originalTitle: "Aleph",
      description: <Aleph />
      //" animated GIF, 2020"
    },
    {
      original: retorno,
      thumbnail: retorno_t,
      description: <Retorno />
    }
  ]

  return <ImageGallery items={images} showPlayButton={false} />
  // <Box>

  //   <Typography>TEST</Typography>
  // </Box>
}

export default Gifs
