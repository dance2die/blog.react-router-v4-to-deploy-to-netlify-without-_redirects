import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./styles.css";

const Main = () => <h1>Main!</h1>;
const Elsewhere = () => <h1>Elsewhere!</h1>;

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/else">Else</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/else/" component={Elsewhere} />
        </Switch>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
