import React from "react"
import { Box, Typography, Paper } from "@mui/material"
import { makeStyles } from "@mui/styles"
import ImageGallery from "react-image-gallery"
import slp from "../assets/entelequias/slp.jpg"
import cdmx from "../assets/entelequias/cdmx.jpg"
import cdmx_1 from "../assets/entelequias/cdmx_1.jpg"
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    marginTop: 150
    //  paddingTop: 10
  },
  storyCard: {
    maxWidth: 1000,
    "& img": {
      borderRadius: 25
    }
  }
})

//PENDIENTES:
// Botón que oculte / despliege la descripción...
//imágenes de álbum para thumbnails

function Entelequias() {
  const classes = useStyles()
  const images = [
    { original: slp, thumbnail: slp, originalClass: classes.storyCard },
    { original: cdmx, thumbnail: cdmx, originalClass: classes.storyCard },
    { original: cdmx_1, thumbnail: cdmx_1, originalClass: classes.storyCard }
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
            Proyecto desarrollado durante la maestría en Artes de la UNAM que
            cuestiona el papel de la fotografía como herramienta para verificar
            la veracidad de testimonios. Consiste en una colección de relatos
            recolectados en foros de Internet en los cuales se planteó a las
            comunidades la pregunta ¿Te ha ocurrido una experiencia fuera de lo
            común que nadie te creyó? Usuarixs de todo el mundo contribuyeron
            con ocurrencias personales a las cuales se le asignó una fotografía
            que cumpliera el rol de evidencia. Sin embargo, este rol es falso:
            las fotografías provienen de mi álbum familiar y no tienen relación
            alguna con el relato al que pertenecen. El propósito es proponer que
            la verdad, la legitimidad y la evidencia implican juicios
            profundamente relacionados con la creencia, a pesar del peso de
            objetividad al que se someten. El proyecto Entelequias utiliza este
            acto de fe en la imagen para que los relatos sean reconsiderados sin
            el peso de falsedad que imponemos a las ocurrencias irracionales y
            subjetivas cuya veracidad no puede ser probada por medios
            científicos o métodos provenientes del positivismo.
            {/* De esta forma, es posible empatizar con las historias y encontrar similitudes con
            experiencias personales, replanteando con ello la forma en que
            experimentamos la realidad. */}
          </Typography>
        </Paper>
      </Box>
    </div>
  )
}

export default Entelequias
