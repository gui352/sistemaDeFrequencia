import styled from "styled-components";
import { shade } from 'polished';

export const Container = styled.div`
    height: 430px;
    width: 650px;
    border-radius: 3px;
    padding: 12px;
    margin: 130px 0px 0px 350px;
    background: #2F4F4F;
    overflow: auto;
    color: #EEEEE0;

    #data{
        height: 30px;
        width: 170px;
        margin: 20px 0px;
        border-radius: 3px;
        border: none;
        padding: 5px;
        color:#2F4F4F;
        font-size: 20px; 
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
        margin: 20px 0px 0px 510px;
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

    h2{
        font-size: 30px;
    }

    #data-table{
        width: 100%;
        border-spacing: 0 0.5rem;
        color: #363f5f;
    }
    
    table thead tr th:first-child,
    table tbody tr  td:first-child{
        border-radius: 0.25rem 0 0 0.25rem;
    }
    
    table thead th{
        background: #ffffff;
        font-size: 20px;
        
        font-weight: normal;
        padding: 1rem 2rem;
    
        text-align: left;
    }
    
    table tbody tr{
        opacity: 0.7 ;
    }
    
    table tr:hover{
        opacity: 1;
    }
    
    table tbody td{
        background: white;
        padding: 1rem 2rem;
    }
    
    td.description{
        color: #363f5f;
    }
    
    td.chamada{
        color: #363f5f;
    }
    
    td.cadastro{
        color: #363f5f;
    }

    th.description{
        color: #363f5f;
    }

    th.cadastro{
        color: #363f5f;
    }

    th.presente{
        color: #363f5f;
    }
`;