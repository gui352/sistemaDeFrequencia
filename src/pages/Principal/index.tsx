import React, { FormEvent, useState} from "react";

import { Container, Repositories } from "./styles";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import BarraSuperior from "../../components/BarraSuperior";
import api from "../../services/api";

interface Aluno {
  nome: string;
  cpf: number;
  turma: number;
  email: string;
  dataNascimento: string;
  cadastro: number;
  telefone: number;
  frequencia: number
}

const Principal: React.FC = () => {
  const [pesquisa, setPesquisa] = useState<Aluno>();

  async function buscar() {
    let pegaId = parseInt((document.getElementById("pesquisa") as HTMLInputElement).value);
    
    try{
      await api.get(`/aluno/freq/${pegaId}`).then(response => {
        setPesquisa(response.data);
        console.log(response.data)
      })
    }catch(e){
      setPesquisa({nome: "",
        cpf: 0,
        turma: 0,
        email: "",
        dataNascimento: "",
        cadastro: 0,
        telefone: 0,
        frequencia: 0});
    }
    
  }

  return (
    <>
      <Container>
        <BarraSuperior/>
        <h1>Sistema de Presença</h1>
        <h5>Para procurar algum aluno em específico basta digitar o ID do mesmo abaixo</h5>

        <div className="campo_pesquisa">
          <input placeholder="Digite o ID aqui..." id="pesquisa"/>
          <button type="submit" onClick={() => buscar()}>Pesquisar</button>
        </div>

        <Repositories>
          <div className="container_dados">
            <strong>Dados do Aluno</strong>

            <a href="/editar">
              <FiEdit size={25} id="editar"/>
            </a>

            <FiTrash2 size={25} id="apagar"/>

              <div id="segura_dados">
                <div className="dados_aluno">
                  <p>Nome: {pesquisa?.nome ? pesquisa?.nome : ""}</p>
                  <br />
                  <p>Cadastro: {pesquisa?.cadastro ? pesquisa?.cadastro : ""}</p>
                  <br />
                  <p>CPF: {pesquisa?.cpf ? pesquisa?.cpf : ""}</p>
                  <br />
                  <p>Nascimento: {pesquisa?.dataNascimento ? pesquisa?.dataNascimento : ""}</p>
                </div>
                <div className="dados_aluno">
                  <p>E-mail: {pesquisa?.email ? pesquisa?.email : ""}</p>
                  <br/>
                  <p>Telefone: {pesquisa?.telefone ? pesquisa?.telefone : ""}</p>
                  <br />
                  <p>Turma: {pesquisa?.turma ? pesquisa?.turma : ""}</p>
                  <br />
                  <p>Frenquência: {pesquisa?.frequencia ? pesquisa?.frequencia : ""}%</p>
                </div>
              </div>
          </div>  
        </Repositories>

      </Container>
    </>
  );
};

export default Principal;
