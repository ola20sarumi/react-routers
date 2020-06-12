import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import About from "./components/About";
import Shop from "./components/Shop";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    
      <Nav />
      <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/shop" component={Shop} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      </Switch>
    </div>
    </Router>
  );
}


export default App;
