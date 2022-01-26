import React from "react";
import { Switch, Route } from "react-router-dom";

import Principal from "../pages/Principal";
import Chamada from "../pages/Chamada"
import ListaAlunos from "../pages/ListaAlunos";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Principal} />
    <Route path="/chamada" component={Chamada}/>
    <Route path="/listaAlunos" component={ListaAlunos}/>
  </Switch>
);

export default Routes;
