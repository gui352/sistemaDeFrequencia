import React, { useEffect, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import api from "../../services/api";
import { Container } from "./style";
import TopBar from "../../components/TopBar"

interface Aluno {
  nome: string,
  ncadastro: number,
  turma: number
}

const ListaAlunos: React.FC = () =>{
  const [alunos, setAlunos] = useState<Aluno[]>([]);

  useEffect(() =>{
    api.get("/aluno/listar").then(response =>{
      setAlunos(response.data)
    });
  }, [alunos]);

  const deletar = async (id:number) => {
    try{
    await api.delete<Aluno[]>(`aluno/apagar/${id}`)
    .then((response => {
      setAlunos(response.data);
    })).catch(() => console.log("não passou"));
    } catch(e) {
    console.log(e)
    }
  }

  return(
    <>
      <TopBar/>    
      <Container>
        <h2>Alunos Cadastrados</h2>
        <table id="data-table">
          <thead>
            <tr>
              <th className="cadastro">Cadastro</th>
              <th className="description">Nome</th>
              <th className="turma">Turma</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {alunos.length > 0 ? alunos.map(aluno =>(
              <tr>
                <td className="cadastro">{aluno.ncadastro}</td>
                <td className="description">{aluno.nome}</td>
                <td className="turma">{aluno.turma}</td>
                <td className="delete" >
                  <FiTrash2 size={25} onClick={() => deletar(aluno.ncadastro)}/>
                </td>
                <td className="edit">
                  <a href={`/editar/${aluno.ncadastro}`}>
                    <FiEdit size={25}/>
                  </a>
                </td>
              </tr>
            )): ""}
          </tbody>
        </table>
      </Container>
    </>
  );
}

export default ListaAlunos;

