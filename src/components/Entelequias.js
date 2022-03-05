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

//PENDIENTES: No mms, todo...

function Entelequias() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
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
            la veracidad o falsedad de testimonios. Consiste en una colección de
            relatos y testimonios recolectados en foros de Internet. La temática
            de dichos testimonios gira alrededor de la pregunta ¿Te ha ocurrido
            una experiencia fuera de lo común que nadie te creyó? A cada relato
            se le asignó una fotografía que diera testimonio de su veracidad
            mediante la relación entre la narrativa y los personajes y espacios
            de dicha imagen. Sin embargo, estos testimonios fotográficos son
            falsos: provienen de mi álbum familiar y no tienen relación alguna
            con el relato al que pertenecen. El propósito es recalcar que la
            veracidad, la legitimidad y la evidencia son una cuestión de
            creencia, a pesar del peso de objetividad al que se someten. La
            fotografía es un Si bien este acto de fe conectado a la fotografía
            se ha utilizado con propósitos como falsificación o difusión de
            información falsa, este proyecto busca utilizarlo como un medio para
            que estos relatos sean reconsiderados sin el juicio moral de la
            veracidad. Esto ha permitido a los lectores empatizar y encontrar
            relaciones con sus propias experiencias, replanteando con ello la
            forma en que experimentamos la realidad.
          </Typography>
        </Paper>
      </Box>
    </div>
  )
}

export default Entelequias
