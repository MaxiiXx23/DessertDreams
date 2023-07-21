import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { CaretDown, UserCircle } from '@phosphor-icons/react'

import { BtnDropdown, Content, Item, Root } from './styles'
import { NavLink } from 'react-router-dom'

type colorsMenu = 'white' | 'black'

interface IMenuDropdownProps {
  colorDropdown: colorsMenu
}

export function MenudropSign({ colorDropdown }: IMenuDropdownProps) {
  return (
    <Root>
      <DropdownMenu.Trigger asChild>
        <BtnDropdown color={colorDropdown} aria-label="Menu dropdown">
          <UserCircle size={18} /> Conta
          <CaretDown size={16} />
        </BtnDropdown>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <Content className="DropdownMenuContent" sideOffset={5}>
          <Item>
            <NavLink to="/login">Entrar</NavLink>
          </Item>
          <Item>
            <NavLink to="/signUp">Cadastre-se</NavLink>
          </Item>
        </Content>
      </DropdownMenu.Portal>
    </Root>
  )
}
