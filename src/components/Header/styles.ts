import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['gray-700']};
  height: 12rem;

  img {
    width: 7.875rem;
    height: 3rem;
  }
`
