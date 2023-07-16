import styled from 'styled-components'

export const TasksContainer = styled.main`
  width: 700px;
`

export const TasksCreate = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 1.5rem;
  border-top: solid 2px;
  border-radius: 7px;
  padding: 4rem;
  border-color: ${(props) => props.theme['gray-400']};

  img {
    margin-bottom: 1rem;
  }

  p {
    color: ${(props) => props.theme['gray-300']};
  }
`

export const PListaTask = styled.p`
  font-weight: 700;
`
