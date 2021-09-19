import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { AuthProvider } from "../contexts/AuthContext";

import Chats from "./Chats"
import Login from "./Login"
import Home from "./Home"

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/chats" component={Chats} />
            <Route path="/" component={Login} />
            <Route path="/connect" component={Home}/>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App