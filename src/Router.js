import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import NavBar from "./components/Navbar"

function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
