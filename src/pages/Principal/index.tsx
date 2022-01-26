import React, { useState, useCallback } from "react";
import { useModal } from 'react-hooks-use-modal';

import { Container, Form, Repositories } from "./styles";
import { FiUserPlus, FiDatabase } from "react-icons/fi";
import Logo from "../../assets/LOGO_ESCOLA-S-1024x497.png";

const Principal: React.FC = () => {
  const [Modal, open, close, isOpen] = useModal('root', {
    preventScroll: true,
    closeOnOverlayClick: false
  });
 
  return (
    <>
      <Container>
        <div className="barra_superior">
          <img src={Logo} alt="Logo Escola S" />
          <text className="opc">|</text>
          <a href="/chamada"> 
            <text className="opc">Chamada</text>
          </a>

          <div className="botao_cadastrar" onClick={open}>
            <FiUserPlus size={30}/>
            <p className="cadastra">Cadastrar</p>
          </div>

          <a href="/listaAluno">
          <div className="botao_cadastrar">
            <FiDatabase size={30}/>
            <p className="cadastra">Alunos</p>
          </div>
          </a>
        </div>

        <Modal>
          <div className="container_cadastro">
            <h1>Cadastrar Aluno</h1>
            <input type="text" placeholder="Digite o nome do aluno..."/>
            <input type="number" placeholder="Digite o número de cadastro..."/>
            <input type="number" placeholder="Digite o CPF..."/>
            <input type="date" placeholder="Digite a data de nascimento"/>
            <input type="email" placeholder="Digite o email do aluno..."/>
            <input type="phone" placeholder="Digite o telefone do aluno..."/>
            <input type="text" placeholder="Digite o gênero do aluno..."/>
            <p>This is a customizable modal.</p>
            <button onClick={close}>Fechar</button>
          </div>
        </Modal>

        <h1>Sistema de Presença</h1>
        <h5>Para procurar algum aluno em específico basta digitar o nome do mesmo abaixo</h5>

        <Form >
          <input placeholder="Digite o nome aqui..."/>
          <button type="submit">Pesquisar</button>
        </Form>

        <Repositories>
          <div>
            <strong>Nome</strong>
            <br />
            <p>Cadastro: </p>
            <br />
            <p>CPF: </p>
            <br />
            <p>Nascimento: </p>
            <br />
            <p>E-mail: </p>
            <br />
            <p>Telefone: </p>
            <br />
            <p>Gênero: </p>
            <br />
          </div>
        </Repositories>

      </Container>
    </>
  );
};

export default Principal;
