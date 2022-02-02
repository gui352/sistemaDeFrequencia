import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: #2F4F4F;
    position: fixed;
    z-index: 999;
    display: flex;

    a:hover { 
      text-decoration:none; 
      color: #EEEEE0;
    }

    a:link { 
      text-decoration:none;
      color: #EEEEE0;
    }

    a:visited{
      text-decoration:none;
      color: #EEEEE0;
    }

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
    }

    .separa_botao{
      width: 140px;
      height: 50px;
      margin-right: 10px;
      margin-top: 10px;

      button{ 
        width: 100%;
        height: 100%;
        background: #8FBC8F;
        border-radius: 3px;
        border: 0;
        font-weight: bold;
        transition: 0.3s;
        display: flex;
        flex: row;
        color: #EEEEE0;
  
        p{
          font-size: 17px;
          flex: row;
          margin: 15px 10px 0px 10px;
        }
  
        svg{
          margin: 10px 0px 0px 5px;
        }
      }
    }

    .botao:first-child{
      margin-left: 750px;
    }
`;