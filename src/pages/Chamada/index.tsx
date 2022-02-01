import React from "react";
import { BsCheck } from "react-icons/bs";
import { Container } from "./style";

const Chamada: React.FC = () =>{
  return(
    <>
     <Container>
      <h2>Chamada</h2>
        <table id="data-table">
          <thead>
            <tr>
              <th className="description">Nome</th>
              <th className="cadastro">Cadastro</th>
              <th className="presente">Presente</th>
              <th className="faltou">Faltou</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="description">João Silva</td>
              <td className="cadastro">1</td>
              <td className="chamada">
                <input type="radio" name="opcao" value="op1"/>
              </td>
              <td className="chamada">
                <input type="radio" name="opcao" value="op1"/>
              </td>
            </tr>
            <tr>
              <td className="description">Alana Camile</td>
              <td className="cadastro">2</td>
              <td className="chamada">
                <input type="radio" name="opcao1" value="op1"/>
              </td>
              <td className="chamada">
                <input type="radio" name="opcao1" value="op2"/>
              </td>
            </tr>
            <tr>
              <td className="description">Brendon Ribeiro</td>
              <td className="cadastro">3</td>
              <td className="chamada">
                <input type="radio" name="opcao2" value="op1"/>
              </td>
              <td className="chamada">
                <input type="radio" name="opcao2" value="op2"/>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="botao_cadastrar">
            <BsCheck size={30} />
            <p className="cadastra">Finalizar</p>
        </div>
      </Container>
    </>
  );
}

export default Chamada;

