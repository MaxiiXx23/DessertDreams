import { ContainerFooter, CopyRight, Name } from './styles'

import Logo from '@/assets/Logo.svg'

export function Footer() {
  return (
    <ContainerFooter>
      <img src={Logo} alt="logo" title="logo do site" />
      <CopyRight>
        © 2023 <Name>Dessert Dreams</Name> - Todos os direitos reservados.
      </CopyRight>
    </ContainerFooter>
  )
}
