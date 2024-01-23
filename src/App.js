import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./components/Home";

import About from "./components/About";

import Contact from "./components/Contact";

import NotFound from "./components/NotFound";

import "./App.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>
);
export default App;
