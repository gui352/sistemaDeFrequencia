import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import InputRegister from "../../components/InputRegister";
import { Container } from "./style"



const CadastrarAluno: React.FC = () => {
  return (
    <>
      <Container>
        <div className="container_dados">
          <strong>CADASTRAR ALUNO</strong>
          <div id="segura_dados">
            <div className="dados_aluno">
              <p>Nome: </p>
              <InputRegister />
              <br />
              <p>CPF: </p>
              <InputRegister />
              <br />
              <p>Nascimento: </p>
              <InputRegister />
            </div>
            <div className="dados_aluno">
              <p>Telefone: </p>
              <InputRegister />
              <br />
              <p>Turma: </p>
              <InputRegister />
              <br />
              <p>E-mail: </p>
              <InputRegister />
            </div>
          </div>
          <div className="botao_cadastrar">
              <BsPeopleFill size={30} />
              <p className="cadastra">Cadastrar</p>
            </div>
        </div>  
      </Container>
    </>
  )
};

export default CadastrarAluno;
