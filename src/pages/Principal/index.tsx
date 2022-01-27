import React, { useState} from "react";

import { Container, Form, Repositories } from "./styles";
import { FiUserPlus, FiDatabase, FiEdit, FiTrash2, FiXCircle } from "react-icons/fi";
import Logo from "../../assets/LOGO_ESCOLA-S-1024x497.png";

const Principal: React.FC = () => {
  const [ abrePopUp, setAbrePopUp ] = useState(true);
  const abrirPopUp = () => {
    if(!abrePopUp){
     setAbrePopUp(true);
    }else{
      setAbrePopUp(false);
    }
    return abrePopUp;
  };

 
  return (
    <>
      <Container popup={abrirPopUp}>
        <div className="barra_superior">
          <img src={Logo} alt="Logo Escola S" />
          <text className="opc">|</text>
          <a href="/chamada"> 
            <text className="opc">Chamada</text>
          </a>

          <a href="/listaAluno">
          <div className="botao_cadastrar">
            <FiDatabase size={30}/>
            <p className="cadastra">Alunos</p>
          </div>
          </a>

          <div className="botao_cadastrar" onClick={() => abrirPopUp()}>
            <FiUserPlus size={30} />
            <p className="cadastra">Cadastrar</p>
          </div>
        </div>

        <div id="popup" className="popup">
          <div id="barra">
            <FiXCircle onClick={() => abrirPopUp()}/>
            <p>Cadastro de Alunos</p>
          </div>
          <div className="columns helvetica cor_0 lighter" >
            <div className="column1">
              <input type="radio" id="vehicle1" name="vehicle1"/>
            </div>
          </div>
        </div>

        <h1>Sistema de Presença</h1>
        <h5>Para procurar algum aluno em específico basta digitar o nome do mesmo abaixo</h5>

        <Form >
          <input placeholder="Digite o nome aqui..."/>
          <button type="submit">Pesquisar</button>
        </Form>

        <Repositories>
          <div className="container_dados">
            <strong>Nome</strong>
            <FiEdit size={25} id="editar"/>
            <FiTrash2 size={25} id="apagar"/>
            <div id="segura_dados">
              <div className="dados_aluno">
                <p>Cadastro: </p>
                <br />
                <p>CPF: </p>
                <br />
                <p>Nascimento: </p>
                <br />
                <p>E-mail: </p>
              </div>
              <div className="dados_aluno">
                <p>Telefone: </p>
                <br />
                <p>Gênero: </p>
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
