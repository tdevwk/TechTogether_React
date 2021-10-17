import React from "react";
import "./App.css";
import Home from "./containers/Home";
import Trains from "./containers/Trains";
import GoogleApiWrapper from "./containers/Location";
import Form from "./containers/Form";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/trains" component={Trains} />
      <Route exact path="/location" component={GoogleApiWrapper} />
      <Route exact path="/form" component={Form} />
    </div>
  );
}

export default App;
