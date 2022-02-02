import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import { Container } from "./style"
import api from "../../services/api";
import BarraSuperior from "../../components/BarraSuperior";

const CadastrarAluno: React.FC = () => {

  const aluno = {
    nome: "",
    cpf: 0,
    dataNascimento: "",
    email: "",
    telefone: 0,
    turma: 0 
  }
  async function cadastrar(): Promise<void> {
    aluno.nome = (document.getElementById("nome") as HTMLInputElement).value;
    aluno.cpf = parseInt((document.getElementById("cpf") as HTMLInputElement).value);
    aluno.dataNascimento = (document.getElementById("dataNascimento") as HTMLInputElement).value;
    aluno.email = (document.getElementById("email") as HTMLInputElement).value;
    aluno.telefone = parseInt((document.getElementById("telefone") as HTMLInputElement).value);
    aluno.turma = parseInt((document.getElementById("turma") as HTMLInputElement).value);

    console.log(aluno)
    await api.post("/aluno/cadastrar", aluno);
      
  } 

  return (
    <>
      <Container>
        <div className="container_dados">
          <strong>CADASTRAR ALUNO</strong>
          <div id="segura_dados">
            <div className="dados_aluno">
              <p>Nome: </p>
              <div className="container_input">
                <input id="nome"/>
              </div>
              <br />
              <p>CPF: </p>
              <div className="container_input">
                <input type="number" id="cpf"/>
              </div>
              <br />
              <p>Nascimento: </p>
              <div className="container_input">
                <input type="date" id="dataNascimento"/>
              </div>
            </div>

            <div className="dados_aluno">
              <p>Telefone: </p>
              <div className="container_input">
                <input type="phone" id="telefone"/>
              </div>
              <br />
              <p>Turma: </p>
              <div className="container_input">
                <input type="number" id="turma"/>
              </div>
              <br />
              <p>E-mail: </p>
              <div className="container_input">
                <input type="email" id="email"/>
              </div>
            </div>
          </div>
          
          <a href="/">
            <button className="botao_cadastrar" onClick={() => cadastrar()}>
              <BsPeopleFill size={30} />
              <p className="cadastra">Cadastrar</p>
            </button>
          </a>
        </div>  
      </Container>
    </>
  )
};

export default CadastrarAluno;
