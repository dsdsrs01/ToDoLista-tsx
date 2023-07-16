import styled from 'styled-components'

export const ContainerChekList = styled.main`
  display: flex;
  width: 43.75rem;
  background: ${(props) => props.theme['gray-500']};
  border: solid 0.1px ${(props) => props.theme['gray-400']};
  border-radius: 10px;
  height: 4.5rem;
  margin-top: 1rem;
  justify-content: center;
  align-items: center;
`
export const CheckList = styled.div`
  width: 43.75rem;
  display: flex;
  text-align: center;
  margin: 1rem;
  justify-content: space-between;
  align-items: center;
`

export const ButtonDelete = styled.button`
  display: flex;
  background: transparent;
  border: 0;

  cursor: pointer;
`
export const SpanCheckout = styled.span`
  text-align: start;
  margin-left: 1rem;
`
export const SpanConcluido = styled.span`
  text-align: start;
  text-decoration: line-through;
  color: ${(props) => props.theme['gray-300']};
`

export const CheckboxContainer = styled.div`
  width: 43.75rem;
  height: 35px;
  padding-left: 5px;
  margin: 0px 4px;
  border-radius: 5px;

  text-decoration: ${(props) => (props.checked ? 'line-through' : '')};

  display: flex;
  align-items: center;
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
`

export const StyledCheckbox = styled.label`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 6px;
  border-radius: 50%;

  background: transparent;
  border: solid 2px;
  border-color: ${(props) => (props.checked ? '#5E60CE' : '#4EA8DE')};
  background-color: ${(props) => (props.checked ? '#5E60CE' : '')};

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 15px;
    display: ${(props) => (props.checked ? 'flex' : 'none')};
    filter: invert(75%) sepia(11%) saturate(6042%) hue-rotate(30deg)
      brightness(105%) contrast(68%);
    color: ${(props) => props.theme.white};
  }
`
