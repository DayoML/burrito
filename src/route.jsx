import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Page1 from "./page1";
import Page2 from "./page2";
import { BurritoChannelCreate } from "./ui-components";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/create">
           <BurritoChannelCreate/>
          </Route>
          <Route path="/page1">
           <Page1/>
          </Route>
          <Route path="/page2">
           <Page2/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

