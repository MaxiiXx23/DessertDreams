import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { CaretDown } from '@phosphor-icons/react'

import { BtnDropdown, Content, Item, Root } from './styles'
import { NavLink } from 'react-router-dom'

type colorsMenu = 'white' | 'black'

interface IMenuDropdownProps {
  colorDropdown: colorsMenu
}

export function MenuDropdown({ colorDropdown }: IMenuDropdownProps) {
  return (
    <Root>
      <DropdownMenu.Trigger asChild>
        <BtnDropdown color={colorDropdown} aria-label="Menu dropdown">
          Cardápio <CaretDown size={16} />
        </BtnDropdown>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <Content className="DropdownMenuContent" sideOffset={5}>
          <Item>
            <NavLink to="/novidades">Novidades</NavLink>
          </Item>
          <Item>
            <NavLink to="/bolos">Bolos</NavLink>
          </Item>
          <Item>
            <NavLink to="/novidades">Doces</NavLink>
          </Item>
          <Item>
            <NavLink to="/novidades">Personalizados</NavLink>
          </Item>
        </Content>
      </DropdownMenu.Portal>
    </Root>
  )
}
