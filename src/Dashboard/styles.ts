import styled from 'styled-components';
import { shade } from 'polished';

export const Barra = styled.div `
  width: 100%;
  height: 70px;
  background:  #808080;
  opacity: 0.2;
  position: fixed;
  z-index: 999;
`;

export const Bandeiras = styled.form`

`; 

export const Cont = styled.div`
  width: 100%;
  height: 450px;
  background: #04d361;
  background-image: url("https://www.paho.org/sites/default/files/card/2021-03/covid-19-virus-aqua-bk.jpg");
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  margin-top: 10%;
  text-align: center;
  font-size: 48px;
  color: #fff;
  line-height: 56px;
`;

export const Texto = styled.p`
  text-align: center;
  font-size: 25px;
  color: #fff;
  line-height: 56px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;
  margin-left: 24%;
  input {
    flex: 1;
    height: 50px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    font-size: 16px;
    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    width: 210px;
    height: 50px;
    background: #00CED1;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: 0.3s;
    &:hover {
      background: ${shade(0.3, '#00CED1')};
    }
  }
`;

export const Repositories = styled.div`
  margin-left: 22%;
  margin-top: 20px;
  max-width:700px;
  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;
    &:hover {
      transform: translate(10px);
    }
    & + a {
      margin-top: 16px;
    }
    img {
      width: 80px;
      height: 64px;
    }
    div {
       margin: 12px 16px;
       flex: 1;
       strong {
         font-size:30px;
         color: #3d3d4d;
       }
       p {
        font-size: 25px;
        color: #3d3d4d;
        margin-top 2px;
       }
    }
  }
`;
