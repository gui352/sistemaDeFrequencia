import React from "react";
import { BsCheck } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";
import { Container } from "./style";

const ListaAlunos: React.FC = () =>{
  return(
    <>
     <Container>
      <h2>Alunos Cadastrados</h2>
        <table id="data-table">
          <thead>
            <tr>
              <th className="cadastro">Cadastro</th>
              <th className="description">Nome</th>
              <th className="turma">Turma</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cadastro">1</td>
              <td className="description">João Silva</td>
              <td className="turma"> 200 </td>
              <td className="delete">
                <FiTrash2 size={25}/>
              </td>
            </tr>
            <tr>
              <td className="cadastro">2</td>
              <td className="description">Alana Camile</td>
              <td className="turma"> 100 </td>
              <td className="delete">
                <FiTrash2 size={25}/>
              </td>
            </tr>
            <tr>
              <td className="cadastro">3</td>
              <td className="description">Brendon Ribeiro</td>
              <td className="turma"> 400 </td>
              <td className="delete">
                <FiTrash2 size={25}/>
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </>
  );
}

export default ListaAlunos;

