import styled from 'styled-components'

export const ContainerFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 11.5rem;

  gap: 2.5rem;

  img {
    margin-top: 1rem;
  }
`

export const CopyRight = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.oleoScript};
`

export const Name = styled.span`
  color: ${({ theme }) => theme.primary};
`
