import React, { useCallback, useEffect, useState } from "react";

import { Container } from "./style";
import { BsCheck, BsCardList } from "react-icons/bs";
import TopBar from "../../components/TopBar";

import api from "../../services/api";

interface Aluno {
  ncadastro: number;
  nome: string;
  turma: number
}

interface Presenca {
  dataChamada: string;
  idAluno: number;
  presenca: boolean
}

interface PresencaAluno {
  id: number
}

const Chamada: React.FC = () =>{

  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [presenca, setPresenca] = useState<Presenca[]>([]);
  const [alunosMarcados, setAlunosMarcados] = useState<PresencaAluno[]>([]);

  const EnviarChamada = async () =>{
    await api.post("/chamada/cadastrar", presenca);
  }

  const SalvarChamada = async () => {
    console.log(presenca);
    presenca.splice(0, presenca.length);
    alunos.map(aluno => {
      if(alunosMarcados.find(alunoFind => alunoFind.id === aluno.ncadastro)){
        presenca.push({dataChamada:(document.getElementById("data") as HTMLInputElement).value, presenca: true, idAluno: aluno.ncadastro});
      }else{
        presenca.push({dataChamada:(document.getElementById("data") as HTMLInputElement).value, presenca: false, idAluno: aluno.ncadastro});
      }
    })
    console.log(presenca)

    EnviarChamada();
  }

  const MarcarAluno = useCallback((id: number) =>{
    if(alunosMarcados.find(aluno => aluno.id === id)){
      setAlunosMarcados(alunosMarcados.filter(aluno => aluno.id !== id));
    }else{
      alunosMarcados.push({id:id})
      setAlunosMarcados(alunosMarcados)
    }
  }, [alunosMarcados]);

  const handleAlunos = async () => {
    try{
      await api.get<Aluno[]>("/aluno/listar").then((response =>{
        setAlunos(response.data);
      })).catch(() => console.log("não passou"));
    }catch(e){
      console.log(e);
    }
  }

  useEffect(() => {
    handleAlunos();
  }, [alunos])

  var data = new Date();

  return(
    <>
      <TopBar/>
     <Container>
        <div id="segura">
          <h2>Chamada</h2>
          <a href="/listaChamada">
            <BsCardList size={50}/>
          </a>
        </div>
        <input type="date" name="" id="data" />
        <table id="data-table">
          <thead>
            <tr>
              <th className="description">Nome</th>
              <th className="cadastro">Cadastro</th>
              <th className="cadastro">Turma</th>
              <th className="presente">Presente</th>
            </tr>
          </thead>
          <tbody>
            {alunos.length > 0 ? alunos.map(aluno => (
              <tr>
                <td className="cadastro">{aluno.ncadastro}</td>
                <td className="description">{aluno.nome}</td>
                <td className="cadastro">{aluno.turma}</td>
                <td className="chamada">
                  <input type="checkbox" onClick={() => MarcarAluno(aluno.ncadastro)}/>
                </td>
              </tr>
            )): ""}
          </tbody>
        </table>
        <div className="botao_cadastrar" onClick={() => SalvarChamada()}>
            <BsCheck size={30} />
            <p className="cadastra">Finalizar</p>
        </div>
      </Container>
    </>
  );
}

export default Chamada;

