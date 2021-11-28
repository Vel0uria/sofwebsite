import React from "react"
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material"

function NavBar() {
  return (
    <AppBar sx={{ padding: 1, backgroundColor: "Gainsboro", color: "Black" }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          LOGO
        </Typography>
        <Box component="div" pl={10}>
          <Button size="large" color="inherit">
            BIO
          </Button>
          <Button size="large" color="inherit">
            Statement
          </Button>
          <Button size="large" color="inherit">
            Contacto
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
