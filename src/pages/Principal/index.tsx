import React, { useState} from "react";

import { Container, Form, Repositories } from "./styles";
import { FiUserPlus, FiDatabase, FiEdit, FiTrash2, FiXCircle } from "react-icons/fi";
import Logo from "../../assets/LOGO_ESCOLA-S-1024x497.png";

const Principal: React.FC = () => {
  return (
    <>
      <Container>
        <div className="barra_superior">
          <img src={Logo} alt="Logo Escola S" />
          <text className="opc">|</text>

          <text className="opc"><a href="/chamada">Chamada </a></text>
          
          <div className="separa_botao">
            <a href="/listaAlunos">
              <button className="botao">
                <FiDatabase size={30}/>
                <p className="cadastra">Alunos</p>
              </button>
            </a>
          </div>

          <div className="separa_botao">
            <a href="/cadastrar">
              <button className="botao">
                <FiUserPlus size={30} />
                <p className="cadastra">Cadastrar</p>
              </button>
            </a>
          </div>

        </div>

        <h1>Sistema de Presença</h1>
        <h5>Para procurar algum aluno em específico basta digitar o ID do mesmo abaixo</h5>

        <Form >
          <input placeholder="Digite o ID aqui..."/>
          <button type="submit">Pesquisar</button>
        </Form>

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
