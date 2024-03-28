import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:root {
  font-size: 62.5%;
}

body {
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
}

body,
input,
button,
textarea {
  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
  outline: none;
}


a {
  text-decoration: none;
}

button {
  border: none;
}

button,
a {
    cursor: pointer;
    transition: filter 0.3s;
}

button:hover,
a:hover {
    filter: brightness(0.9);
}


span,
a {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
}

p span {
    font-style: italic;
}
`
