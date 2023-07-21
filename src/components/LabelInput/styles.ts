import styled from 'styled-components'

export const ContainerLabel = styled.label`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  span {
    letter-spacing: 2px;
    color: ${({ theme }) => theme.text};
    font-weight: bold;
  }
`
