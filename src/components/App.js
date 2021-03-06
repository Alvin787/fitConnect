import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { AuthProvider } from "../contexts/AuthContext";

import Chats from "./Chats"
import Login from "./Login"
import Navbar from "./Navbar/Navbar"
import Profile from "./Profile"
import Connect from "./Connect"


function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider>
        <Navbar/>
          <Switch>
            <Route path="/connect" component={Connect} />
            <Route path="/chats" component={Chats} />
            <Route path="/profile" component={Profile}/>
            <Route path="/" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App