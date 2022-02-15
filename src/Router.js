import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import NavBar from "./components/Navbar"
import Footer from "./components/Footer"
import Gifs from "./components/Gifs"
function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gifs" component={Gifs} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
