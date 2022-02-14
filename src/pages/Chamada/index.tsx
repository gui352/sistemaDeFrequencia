import React, { useCallback, useEffect, useState } from "react";

import { Container } from "./style";
import { BsCheck, BsCardList } from "react-icons/bs";
import TopBar from "../../components/TopBar";

import api from "../../services/api";

interface Aluno {
  cadastro: number;
  nome: string;
  turma: number
}

interface Presenca {
  dataChamada: string;
  idaluno: number;
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
      if(alunosMarcados.find(alunoFind => alunoFind.id === aluno.cadastro)){
        presenca.push({dataChamada:(document.getElementById("data") as HTMLInputElement).value, presenca: true, idaluno: aluno.cadastro});
      }else{
        presenca.push({dataChamada:(document.getElementById("data") as HTMLInputElement).value, presenca: false, idaluno: aluno.cadastro});
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
              <th className="description">Cadastro</th>
              <th className="cadastro">Nome</th>
              <th className="cadastro">Turma</th>
              <th className="presente">Presente</th>
            </tr>
          </thead>
          <tbody>
            {alunos.length > 0 ? alunos.map(aluno => (
              <tr>
                <td className="cadastro">{aluno.cadastro}</td>
                <td className="description">{aluno.nome}</td>
                <td className="cadastro">{aluno.turma}</td>
                <td className="chamada">
                  <input type="checkbox" onClick={() => MarcarAluno(aluno.cadastro)}/>
                </td>
              </tr>
            )): ""}
          </tbody>
        </table>
        <a href="/listaChamada">
          <div className="botao_cadastrar" onClick={() => SalvarChamada()}>
              <BsCheck size={30} />
              <p className="cadastra">Finalizar</p>
          </div>
        </a>
      </Container>
    </>
  );
}

export default Chamada;

