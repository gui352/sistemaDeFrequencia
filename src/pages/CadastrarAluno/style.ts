import styled, {css} from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 430px;
  width: 650px;
  border-radius: 3px;
  padding: 12px;
  margin: 130px 0px 0px 350px;
  background: #2F4F4F;
  color: #EEEEE0;

  .container_dados {
    height: 350px;
    width: 600px;
    padding: 20px 0px 0px 15px;;

    #segura_dados{
      display: flex;

      .dados_aluno{
        height: 250px;
        width: 600px;
        margin-top: 45px;
        margin-left: 30px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-content: flex-start;
        justify-content: space-between;
  
        p {
          font-size: 20px;
        }
      }
    }

    strong {
      font-size: 30px;
    }

    #editar{
      margin-left: 390px;
    }

    #apagar{
      margin-left: 15px;
    }
  }

  .botao_cadastrar{
    width: 140px;
    height: 50px;
    background: #8FBC8F;
    border-radius: 3px;
    border: 0;
    font-weight: bold;
    transition: 0.3s;
    display: flex;
    flex: row;
    margin: 20px 0px 0px 450px;
    &:hover {
      background: ${shade(0.1, '#8FBC8F')};
    }

    p{
      font-size: 17px;
      flex: row;
      margin: 15px 10px 0px 10px;
    }

    svg{
      margin: 10px 0px 0px 5px;
    }
  }
`;