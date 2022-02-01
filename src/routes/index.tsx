import React from "react";
import { Switch, Route } from "react-router-dom";

import Principal from "../pages/Principal";
import Chamada from "../pages/Chamada"
import ListaAlunos from "../pages/ListaAlunos";
import CadastrarAluno from "../pages/CadastrarAluno";
import EditarAluno from "../pages/EditarAluno";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Principal} />
    <Route path="/chamada" component={Chamada}/>
    <Route path="/listaAlunos" component={ListaAlunos}/>
    <Route path="/cadastrar" component={CadastrarAluno}/>
    <Route path="/editar" component={EditarAluno}/>
  </Switch>
);

export default Routes;
