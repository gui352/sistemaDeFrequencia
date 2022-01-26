import styled from 'styled-components';
import { shade } from 'polished';


export const Container = styled.div`
  width: 100%;
  height: 400px;
  background: #3CB371;
  margin-bottom: 10px;

  .barra_superior{
    width: 100%;
    height: 70px;
    background-color: #2F4F4F;
    position: fixed;
    z-index: 999;

    img{
      width: 150px;
      height: 60px;
      float: left;
      margin: 5px 0px 0px 10px;
    }

    .opc{
      text-align: center;
      font-size: 25px;
      line-height: 70px;
      float: left;
      margin-left: 10px;
      a:hover { 
       text-decoration:none; 
       color: #fff;
      }
      a:link { 
        text-decoration:none;
      }

      a:visited{
        text-decoration:none;
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
      float: right;
      margin-right: 10px;
      margin-top: 10px;
      &:hover {
        background: ${shade(0.1, '#8FBC8F')};
      }

      p{
        font-size: 17px;
        float: left;
        margin: 15px 10px 0px 10px;
      }

      svg{
        margin: 10px 0px 0px 0px;
      }
    }
  }

  h1{
    margin-top: 10%;
    text-align: center;
    font-size: 48px;
    line-height: 56px;
  }

  h5{
    text-align: center;
    font-size: 25px;
    line-height: 56px; 
    font-weight: light;
  }
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;
  margin-left: 27%;
  input {
    flex: 1;
    height: 46px;
    padding: 0 24px;
    border: 0;
    border-radius: 3px 0 0 3px;
    color: #3a3a3a;
    font-size: 16px;
    background: #EEEEE0;
    border: 2px solid #EEEEE0;

    &::placeholder {
      color: #a8a8b3;
    }

  }

  button {
    width: 210px;
    height: 50px;
    background: #8FBC8F;
    border-radius: 0 3px 3px 0;
    border: 0;
    font-weight: bold;
    transition: 0.3s;
    &:hover {
      background: ${shade(0.3, '#8FBC8F')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: white;
  margin-top: 8px;
  margin-left: 365px;
`;

export const Repositories = styled.div`
  heigth: 10px;
  padding-left: 12%;
  margin-top: 20px;
  display: flex; 
  flex-wrap: wrap;

  a {
    background: #fff;
    border-radius: 5px;
    width: 50%;
    margin-left: 230px;
    padding: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    transition: transform 0.2s;
    &:hover {
      transform: translate(10px);
    }
    img {
      width: 100px;
      height: 80px;
    }
    div {
       margin: 12px 16px;
       flex: 1;
       strong {
         font-weigth: bold;
         font-size:30px;
         color: #3d3d4d;
       }
       p {
        font-size: 25px;
        color: #3d3d4d;
       }
    }
  }
`;

export const Info = styled.div`
  width: 100%;
  margin-top: 150px;
  
  display: flex;
  justify-content: center;
`;

