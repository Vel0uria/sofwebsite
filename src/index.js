import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import * as serviceWorker from "./serviceWorker"
import Router from "./Router"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const THEME = createTheme({
  typography: {
    fontFamily: `"Mulish",  "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500
  }
})

ReactDOM.render(
  <ThemeProvider theme={THEME}>
    <Router />
  </ThemeProvider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
