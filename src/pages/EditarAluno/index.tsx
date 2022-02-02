import React, { useEffect, useState } from "react";
import { FiSave} from "react-icons/fi";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { Container } from "./style";

interface Aluno {
  nome: string;
  cpf: number;
  dataNascimento: string;
  telefone: number;
  turma: number;
  email: string
}

let aluno = {
  nome: "",
  cpf: 0,
  dataNascimento: "",
  telefone: 0,
  turma: 0,
  email: ""
}

const EditarAluno: React.FC = () => {
  const {id} : {id:string} = useParams();
  const [alunos, setAlunos] = useState<Aluno>();

  const editar = async () =>{
    try{
      if(aluno.nome.length <= 0){
        if(alunos){
          aluno.nome = alunos.nome;
        }
      }

      if(aluno.cpf <= 0){
        if(alunos){
          aluno.cpf = alunos.cpf;
        }
      }

      if(aluno.dataNascimento.length <= 0){
        if(alunos){
          aluno.dataNascimento = alunos.dataNascimento;
        }
      }

      if(aluno.telefone <= 0){
        if(alunos){
          aluno.telefone = alunos.telefone;
        }
      }

      if(aluno.turma <= 0){
        if(alunos){
          aluno.turma = alunos.turma;
        }
      }

      if(aluno.email.length <= 0){
        if(alunos){
          aluno.email = alunos.email;
        }
      }

      await api.put("/aluno/editar/${id}", aluno);
    }catch(e){
      console.log(e)
    }
  };

  const handleAluno = async () => {
    try{
        await api.get<Aluno>(`aluno/buscar/${id}`)
        .then((response => {
            setAlunos(response.data);
        })).catch(() => console.log("Não passou"));
    } catch(e) {
        console.log(e)
    }
  }

  const pegaNome = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event) {
      aluno.nome = event.target.value;
    } else {
      aluno.nome = alunos ? alunos.nome : "";
    }
  }

  const pegaCpf = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event) {
      aluno.cpf = parseInt(event.target.value);
    } else {
      aluno.cpf = alunos ? alunos.cpf : 0;
    }
  }

  const pegaData = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event) {
      aluno.dataNascimento = event.target.value;
    } else {
      aluno.dataNascimento = alunos ? alunos.dataNascimento : "";
    }
  }

  const pegaTelefone = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event) {
      aluno.telefone = parseInt(event.target.value);
    } else {
      aluno.telefone = alunos ? alunos.telefone : 0;
    }
  }

  const pegaTurma = (event: React.ChangeEvent<HTMLInputElement>) =>{
    if(event){
      aluno.turma = parseInt(event.target.value);
    }else{
      aluno.turma = alunos ? alunos.turma : 0;
    }
  }

  const pegaEmail = (event: React.ChangeEvent<HTMLInputElement>) =>{
    if(event){
      aluno.email = (event.target.value);
    }else{
      aluno.email = alunos ? alunos.email : "";
    }
  }

  useEffect(() =>{
      handleAluno();

  },[alunos]);

  return (
    <>
      <Container>
        <div className="container_dados">
          <strong>EDITAR ALUNO</strong>
          <div id="segura_dados">
            <div className="dados_aluno">
              <p>Nome: </p>
              <div className="container_input">
                <input id="nome" defaultValue={alunos?.nome} onChange={pegaNome}/>
              </div>
              <br />
              <p>CPF: </p>
              <div className="container_input">
                <input type="number" id="cpf" defaultValue={alunos?.cpf} onChange={pegaCpf}/>
              </div>
              <br />
              <p>Nascimento: </p>
              <div className="container_input">
                <input type="date" id="dataNascimento" defaultValue={alunos?.dataNascimento} onChange={pegaData}/>
              </div>
            </div>

            <div className="dados_aluno">
              <p>Telefone: </p>
              <div className="container_input">
                <input type="phone" id="telefone" defaultValue={alunos?.telefone} onChange={pegaTelefone}/>
              </div>
              <br />
              <p>Turma: </p>
              <div className="container_input">
                <input type="number" id="turma" defaultValue={alunos?.turma} onChange={pegaTurma}/>
              </div>
              <br />
              <p>E-mail: </p>
              <div className="container_input">
                <input type="email" id="email" defaultValue={alunos?.email} onChange={pegaEmail}/>
              </div>
            </div>
          </div>
          <button className="botao_cadastrar" onClick={() => editar()}>
            <FiSave size={30} />
            <p className="cadastra">Salvar</p>
          </button>
        </div>  
      </Container>
    </>
  )
};

export default EditarAluno;
