import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }
  body {
    background: #E0FFFF;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 16px Roboto, sans-serif;
  }
  #root {
    max-width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  button {
    cursor: pointer;
  }
`;