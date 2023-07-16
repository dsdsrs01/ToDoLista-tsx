import {
  ContainerChekList,
  CheckList,
  ButtonDelete,
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  SpanCheckout,
} from './styles'
import { useState } from 'react'

import SvgDelete from '../../assets/delete.svg'
import CheckPng from '../../assets/check.svg'

interface ContentProps {
  index: string
  item: string
  onDelete: (index: string) => void
  onClick: (index: string) => void
}

export function ContentCheckList({
  onClick,
  onDelete,
  index,
  item,
}: ContentProps) {
  const [checked, setChecked] = useState(false)

  function handleCheckedboxChange() {
    setChecked(!checked)
  }

  return (
    <ContainerChekList key={index}>
      <CheckList>
        <CheckboxContainer checked={checked} onClick={handleCheckedboxChange}>
          <HiddenCheckbox onChange={handleCheckedboxChange} checked={checked} />
          <StyledCheckbox checked={checked}>
            <img src={CheckPng} />
          </StyledCheckbox>
          <SpanCheckout
            onClick={() => {
              event?.preventDefault()
              onClick(index)
            }}
          >
            {item.text}
          </SpanCheckout>
        </CheckboxContainer>

        <ButtonDelete
          onClick={() => {
            event?.preventDefault()
            onDelete(index)
          }}
        >
          <img src={SvgDelete} alt="Lixeira" />
        </ButtonDelete>
      </CheckList>
    </ContainerChekList>
  )
}
