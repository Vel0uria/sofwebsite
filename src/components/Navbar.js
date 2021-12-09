import React from "react"
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material"

function NavBar() {
  return (
    <AppBar
      sx={{
        padding: 1,
        backgroundColor: "#161616",
        color: "darkviolet",
        borderBottomColor:
          "linear-gradient(to right, #da06c0, #13a260, #004f57, #6c1f85)"
      }}
    >
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
            Shop / NFTs
          </Button>
          <Button size="large" color="inherit">
            Press
          </Button>
          <Button size="large" color="inherit">
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
