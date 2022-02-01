import styled, { css } from "styled-components";

export const Container = styled.div`
width: 90%;
border-radius: 4px;
padding: 5px;
height: 20px;
color: #00579E;

border: 1.9px solid #f4ede8;

display: flex;
align-items: center;

& + div{
  margin-top: 8px;
}

input{
    border-radius:5px;
    border: 1px;
    padding: 5px;
    flex: 1;
    background: transparent;
    border: 0;
    color: #00579E;
    color: #00579E;

    &::placeholder{
        color: #00579E;
    }
}
`;