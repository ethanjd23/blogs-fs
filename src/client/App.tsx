import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BlogDetails from "./components/BlogDetails";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog/:id" component={BlogDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

export interface IBlog {
  title: string;
  id: number;
  content: string;
  name: string;
  tagid: number;
}