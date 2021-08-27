import styled from 'styled-components';

export const Repositories = styled.div`
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

