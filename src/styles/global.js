import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background: ${({ theme }) => theme.background};
    color:  ${({ theme }) => theme.white};
    font-size: 1.6rem;
  }

  body, html, input, button, textarea {
    font-family: "Poppins", sans-serif;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scroll};
    border-radius: 999px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.backgroundSidebar};
  }
`;
