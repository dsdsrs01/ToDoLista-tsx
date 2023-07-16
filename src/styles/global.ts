import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  *:focus{
    outline: none;
  }

  body {
    background: ${(props) => props.theme['gray-600']};
    color: ${(props) => props.theme.white};
    font-family: 'Inter', sans-serif;
    --webkit-font-smoothing: antialiasead;
  }

  button, input {
    color: ${(props) => props.theme.white};
  }
`
