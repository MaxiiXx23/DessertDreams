import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const ContainerHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Logo = styled(NavLink)`
  text-decoration: none;
`

export const ContainerNav = styled.nav`
  width: 100%;
  padding-inline: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ListNav = styled.ul`
  list-style-type: none;

  display: flex;
  align-items: center;

  justify-content: center;
  gap: 1.5rem;
`

interface IOptionProps {
  color: string
}

export const Option = styled.li<IOptionProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  cursor: pointer;

  a {
    text-decoration: none;
    color: ${({ theme, color }) =>
      color === 'white' ? theme.white : theme.black};
  }
`
