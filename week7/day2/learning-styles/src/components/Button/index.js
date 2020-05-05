import styled from 'styled-components'

const Button = styled.button`
  padding: 20px;
  background: ${(props) =>
    props.type === 'Primary'
      ? '#31dafb'
      : props.type === 'Secondary'
      ? 'yellow'
      : props.type === 'Danger'
      ? 'red'
      : '#31dafb'};
  font-size: 2rem;
  color: white;
  @media (max-width: 360px) {
    color: peru;
  }
`

export default Button
