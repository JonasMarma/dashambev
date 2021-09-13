import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";

import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import { Parametrizacao } from "./pages/Parametrizacao/index";
import { Envio } from "./pages/Envios/index";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/parametrizacao" component={withRouter(Parametrizacao)} />
      <Route path="/envio" component={withRouter(Envio)} />
      <Route path="/" component={withRouter(Home)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
