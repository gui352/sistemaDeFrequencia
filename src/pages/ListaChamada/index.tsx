import React, { useEffect, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import api from "../../services/api";
import { Container } from "./style";
import TopBar from "../../components/TopBar"

interface Presenca {
  dataChamada: string;
  idaluno: number;
  presenca: boolean;
  nomeAluno: string
}

const ListaChamada: React.FC = () =>{
  const [presenca, setPresenca] = useState<Presenca[]>([]);

  const handleChamda = async () =>{
    try{
      await api.get<Presenca[]>("/chamada/listar").then((response => {
        setPresenca(response.data);
      })).catch(() => console.log("não passou"));
    }catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    handleChamda();
  }, [presenca])

  return(
    <>
      <TopBar/>    
      <Container>
        <h2>Alunos Cadastrados</h2>
        <table id="data-table">
          <thead>
            <tr>
              <th className="description">Aluno</th>
              <th className="cadastro">Data</th>
              <th className="turma">Presença</th>
            </tr>
          </thead>
          <tbody>
            {presenca.length > 0 ? presenca.map(presente =>(
              <tr>
                <td className="description">{presente.nomeAluno}</td>
                <td className="cadastro">{presente.dataChamada}</td>
                <td className="turma">{presente.presenca ? "Presente" : "Faltou"}</td>
              </tr>
            )): ""}
          </tbody>
        </table>
      </Container>
    </>
  );
}

export default ListaChamada;

