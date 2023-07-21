import styled from 'styled-components'

export const ContainerInfoDelivere = styled.div`
  width: 100%;
  height: 60%;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0.5rem;
`

export const WrapperTitleAdress = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const TitleAdress = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme.primary};
  }
`
export const Label = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
