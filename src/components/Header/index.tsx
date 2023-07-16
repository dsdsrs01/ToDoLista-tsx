import logoToDoList from '../../assets/logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={logoToDoList}
        alt="Logo azul e roxa com um foguete na lateral"
      />
    </HeaderContainer>
  )
}
