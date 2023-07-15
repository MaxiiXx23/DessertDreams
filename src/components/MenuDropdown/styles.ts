import styled from 'styled-components'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export const Root = styled(DropdownMenu.Root)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`
interface IOptionProps {
  color: string
}

export const BtnDropdown = styled.li<IOptionProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  color: ${({ theme, color }) =>
    color === 'white' ? theme.white : theme.black};
  background-color: transparent;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`

export const Content = styled(DropdownMenu.Content)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
`

export const Item = styled(DropdownMenu.Item)<IOptionProps>`
  cursor: pointer;
  color: ${({ theme, color }) =>
    color === 'white' ? theme.white : theme.black};

  &:hover {
    opacity: 0.7;
  }
`
