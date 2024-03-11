import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  body {
    min-height: 100vh;
    background: linear-gradient(0deg, #f5f5f588 0%, #f5f5f555 55%, #f5f5f599 70%), url("https://www.justamente.com.br/wp-content/uploads/2021/08/Advogado-pode-fazer-propaganda-Entenda-o-Codigo-de-etica-da-OAB-scaled.jpg") no-repeat center/cover fixed;
    backdrop-filter: blur(1.5rem);

    & main {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
  }
`