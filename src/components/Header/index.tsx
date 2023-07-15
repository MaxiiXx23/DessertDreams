import { ContainerHeader, ContainerNav, ListNav, Logo, Option } from './styles'

import { MenuDropdown } from '../MenuDropdown'

import LogoSVG from '@/assets/Logo.svg'
import { NavLink } from 'react-router-dom'

type colorsMenu = 'white' | 'black'

interface IHeaderProps {
  colorMenus: colorsMenu
}

export function Header({ colorMenus }: IHeaderProps) {
  return (
    <ContainerHeader>
      <ContainerNav>
        <Logo to="/">
          <img src={LogoSVG} alt="logo" title="Logo do site" />
        </Logo>
        <ListNav>
          <MenuDropdown colorDropdown={colorMenus} />
          <Option color={colorMenus}>
            <NavLink to="/encomendas">Encomendas</NavLink>
          </Option>
          <Option color={colorMenus}>
            <NavLink to="/sobre-mim">Sobre Mim</NavLink>
          </Option>
          <Option color={colorMenus}>
            <NavLink to="#">Contato</NavLink>
          </Option>
        </ListNav>
      </ContainerNav>
    </ContainerHeader>
  )
}
