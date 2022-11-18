import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Lodging from "./pages/Lodging";
import NotFound from "./pages/NotFound";
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";

class App extends React.Component {
  render() {
    return (
      <Router>
        <MainHeader />
        <main>
          <Switch>
            <Route exact path="/kasa/" component={Home} />
            <Route exact path="/lodging/:itemId" component={Lodging} />
            <Route exact path="/about" component={About} />
            <Route path="*" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        </main>
        <MainFooter />
      </Router>
    );
  }
}

export default App;
