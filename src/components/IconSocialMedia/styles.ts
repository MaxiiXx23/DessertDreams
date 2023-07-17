import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

export const ContainerLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.25rem;

  text-decoration: none;
  color: ${({ theme }) => theme.white};

  background-color: ${({ theme }) => theme.primary};

  border-radius: 16px;

  &:hover {
    opacity: 0.8;
  }
`
