import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { AuthProvider } from "../contexts/AuthContext";

import Chats from "./Chats"
import Login from "./Login"
import Navbar from "./Navbar/Navbar"


function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider>
        <Navbar/>
          <Switch>
            <Route path="/chats" component={Chats} />
            <Route exact path="/" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App