import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    color: hls(192, 100%, 9%);
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
  }

  p {
    opacity: 0.6;
    line-height: 1.5;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
