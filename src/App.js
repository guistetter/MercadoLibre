import React, { Component } from "react";
import Home from "./Home";
import Footer from "./Footer";
import base from "./base";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NovoAnuncio from "./NovoAnuncio";
import Categorias from "./Categorias";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorias: [],
    };
    base.bindToState("categorias", {
      context: this,
      state: "categorias",
    });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route
            path="/"
            exact
            render={() => <Home categorias={this.state.categorias} />}
          />
          <Route
            path="/novo-anuncio"
            render={() => <NovoAnuncio categorias={this.state.categorias} />}
          />
          {/*<Route path="/novo-anuncio" exact component={NovoAnuncio} />*/}
          <Route
            path="/categorias"
            render={() => <Categorias categorias={this.state.categorias} />}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
