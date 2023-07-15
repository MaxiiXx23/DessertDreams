import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { CaretDown } from '@phosphor-icons/react'

import { BtnDropdown, Content, Item, Root } from './styles'

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
          <Item color={colorDropdown}>Novidades</Item>
          <Item color={colorDropdown}>Bolos</Item>
          <Item color={colorDropdown}>Doces</Item>
          <Item color={colorDropdown}>Personalizados</Item>
        </Content>
      </DropdownMenu.Portal>
    </Root>
  )
}
