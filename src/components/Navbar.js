import React from "react"
import AppBar from "@mui/material/AppBar"
import { makeStyles } from "@mui/styles"
import { fontWeight, padding } from "@mui/system"

const useStyles = makeStyles(() => ({
  root: {
    padding: 4
  }
}))

function NavBar() {
  const classes = useStyles()
  return (
    <AppBar
      sx={{
        padding: 3,
        backgroundColor: "Gainsboro",
        color: "Black",
        fontSize: "1.7rem",
        fontWeight: "bold"
      }}
    >
      Sofía De la Cueva
    </AppBar>
  )
}

export default NavBar
