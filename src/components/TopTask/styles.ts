import styled from 'styled-components'

export const StatusTasksCreateCompleted = styled.div`
  width: 43.75rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: 2rem;
`
export const TaskSpanCreate = styled.span`
  color: ${(props) => props.theme.blueDark};
  font-weight: 700;
`
export const TaskSpanCompleted = styled.span`
  color: ${(props) => props.theme.purple};
  font-weight: 700;
`
export const CountTask = styled.span`
  background: ${(props) => props.theme['gray-400']};
  margin-left: 10px;
  font-size: 14px;
  color: ${(props) => props.theme.white};

  p {
    width: 00px;
    border-radius: 10px;
    background: ${(props) => props.theme.white};
  }
`
