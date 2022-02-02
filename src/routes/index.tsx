import React from "react";
import { Switch, Route } from "react-router-dom";

import Principal from "../pages/Principal";
import Chamada from "../pages/Chamada"
import ListaAlunos from "../pages/ListaAlunos";
import CadastrarAluno from "../pages/CadastrarAluno";
import EditarAluno from "../pages/EditarAluno";
import ListaChamada from "../pages/ListaChamada";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Principal} />
    <Route path="/chamada" component={Chamada}/>
    <Route path="/listaAlunos" component={ListaAlunos}/>
    <Route path="/cadastrar" component={CadastrarAluno}/>
    <Route path="/editar/:id" component={EditarAluno}/>
    <Route path="/listaChamada" component={ListaChamada}/>
  </Switch>
);

export default Routes;
