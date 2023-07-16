import { styled } from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  max-width: 46rem;
  margin: auto;
  display: flex;
  flex-direction: column;

  /* background: ${(props) => props.theme['gray-400']}; */
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;

  gap: 0.5rem;
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;

  margin: -1.55rem 0 0 0px;
  /* margin: -28px; */

  button {
    padding: 1rem;
    border-radius: 8px;

    display: flex;

    gap: 8px;
    position: absolute;
    margin: 0 0 0 46.4em;

    font-family: 'Inter', sans-serif;
    font-weight: 700;
    border: 0;
    background: ${(props) => props.theme.blue};
    cursor: pointer;
  }
`

export const BaseInput = styled.input`
  background: ${(props) => props.theme['gray-400']};
  height: 3.2rem;
  width: 38.2rem;
  border-radius: 5px;
  border: 0;
  padding: 0 1rem;
  color: ${(props) => props.theme['gray-300']};
  font-size: 1rem;
`
