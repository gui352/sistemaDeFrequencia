import styled from "styled-components";
import { shade } from 'polished';

export const Container = styled.div`
    height: 430px;
    width: 650px;
    border-radius: 3px;
    padding: 12px;
    margin: 60px 0px 0px 350px;
    background: #2F4F4F;
    overflow: auto;
    color: #EEEEE0;

    h2{
        font-size: 30px;
        color: #EEEEE0;
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
    
    td.turma{
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

    th.turma{
        color: #363f5f;
    }

    td.delete{
        color: #e92929;
    }
`;