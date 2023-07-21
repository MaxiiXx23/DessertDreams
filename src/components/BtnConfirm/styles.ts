import styled from 'styled-components'

export const ContainerBtn = styled.button`
  cursor: pointer;
  width: 80%;

  padding: 1rem 1.5rem;

  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.primary};
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`
