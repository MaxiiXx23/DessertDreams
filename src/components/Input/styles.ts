import styled from 'styled-components'

export const ContainerInput = styled.input`
  width: 100%;
  padding: 0.5rem 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.text};

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.primary};
  }

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.primary};
    padding: 1rem 1.25rem;
    transition: 0.3s;
  }
`
