import React, { Component } from "react";
import Navigation from "./components/navigation";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import News from "./components/news";
import Contact from "./components/contact";
import AboutBlair from "./components/aboutBlair";
import MlsSearch from "./components/mlsSearch";
import Communities from "./components/communities";
import OurProperties from "./components/ourProperties";
import Services from "./components/services";
import Landing from "./components/landing";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="content">
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/news" component={News} />
            <Route path="/AboutBlair" component={AboutBlair} />
            <Route path="/mlsSearch" component={MlsSearch} />
            <Route path="/communities" component={Communities} />
            <Route path="/ourProperties" component={OurProperties} />
            <Route path="/services" component={Services} />
            <Route path="/" exact component={Landing} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
