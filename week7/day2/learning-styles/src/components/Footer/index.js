import React from 'react'
import styled from 'styled-components'

// Styled components, crea un componente de React estilizado, diciendole cual etiqueta de html queremos utilizar
const StyledFooter = styled.footer`
  color: blue;
  background: yellow;
  height: 10vh;
  & > a[href="https://diurivj.com"]
  {
    color: red;
    font-size: 2rem;
  }
`

function Footer() {
  return (
    <StyledFooter>
      <a href="https://diurivj.com">By DiuriVJ</a>
    </StyledFooter>
  )
}

export default Footer
