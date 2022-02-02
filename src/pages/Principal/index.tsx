import React, { useState} from "react";

import { Container, Repositories } from "./styles";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import BarraSuperior from "../../components/BarraSuperior";
import api from "../../services/api";
import { useParams } from "react-router-dom";

interface Aluno {
  nome: string;
  cpf: number;
  turma: number;
  email: string;
  dataNascimento: string;
  ncadastro: number;
  telefone: number
}

interface Turma {
  nomeTurma: string;
  idTurma: number
}

const Principal: React.FC = () => {
  const [pesquisa, setPesquisa] = useState<Aluno[]>([]);



  return (
    <>
      <Container>
        <BarraSuperior/>
        <h1>Sistema de Presença</h1>
        <h5>Para procurar algum aluno em específico basta digitar o ID do mesmo abaixo</h5>

        <div className="campo_pesquisa">
          <input placeholder="Digite o ID aqui..."/>
          <button type="submit" >Pesquisar</button>
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
                <p>Nome:</p>
                <br />
                <p>Cadastro: </p>
                <br />
                <p>CPF: </p>
                <br />
                <p>Nascimento: </p>
              </div>
              <div className="dados_aluno">
                <p>E-mail: </p>
                <br/>
                <p>Telefone: </p>
                <br />
                <p>Turma: </p>
                <br />
                <p>Frenquência: </p>
              </div>
            </div>
          </div>  
        </Repositories>

      </Container>
    </>
  );
};

export default Principal;
