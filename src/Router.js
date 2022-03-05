import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import NavBar from "./components/Navbar"
import Footer from "./components/Footer"
import Gifs from "./components/Gifs"
import Delirium from "./components/Delirium"
import Entelequias from "./components/Entelequias"
import OroSangre from "./components/OroSangre"
function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gifs" component={Gifs} />
        <Route exact path="/delirium" component={Delirium} />
        <Route exact path="/entelequias" component={Entelequias} />
        <Route exact path="/orosangre" component={OroSangre} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
