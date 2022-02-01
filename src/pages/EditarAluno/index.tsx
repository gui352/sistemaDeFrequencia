import React from "react";
import { FiSave} from "react-icons/fi";
import InputRegister from "../../components/InputRegister";
import { Container } from "./style"

const EditarAluno: React.FC = () => {
  return (
    <>
      <Container>
        <div className="container_dados">
          <strong>EDITAR ALUNO</strong>
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
            <FiSave size={30} />
            <p className="cadastra">Salvar</p>
          </div>
        </div>  
      </Container>
    </>
  )
};

export default EditarAluno;
