import styled from 'styled-components'

export const ContainerMain = styled.main`
  width: 100%;
  height: 40rem;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const Form = styled.form`
  width: 100%;
  height: 100%;
  padding-inline: 3rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
`

export const ContainerInputs = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.oleoScript};
  color: ${({ theme }) => theme.white};
`

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

export const ContainerFormPayment = styled.div`
  width: 100%;
  height: 40%;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0.5rem;
`

export const ContainerSummary = styled.aside`
  width: 40%;
  height: 80%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  background-color: ${({ theme }) => theme.primary};

  border-radius: 8px;
  padding: 0.5rem;
`

export const List = styled.ul`
  width: 100%;
  height: 70%;
  overflow-y: auto;

  list-style-type: none;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.primary};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.white};
  }
`
export const ItemCart = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.white};
`

export const ImageItem = styled.img`
  width: 4rem;
  height: 4rem;

  border-radius: 50%;
`

export const WrapperInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.25rem;
`

export const Name = styled.strong`
  color: ${({ theme }) => theme.white};
`

export const Info = styled.p`
  color: ${({ theme }) => theme.white};
`
export const BtnRemoveItem = styled.button`
  cursor: pointer;

  width: 100%;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};
`
export const Value = styled.strong`
  color: ${({ theme }) => theme.white};
`
export const ContainerTotalValue = styled.div`
  width: 100%;
  height: 30%;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;
`

export const WrapperInfo = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    color: ${({ theme }) => theme.white};
  }
`
export const BtnSubmit = styled.button`
  cursor: pointer;

  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};

  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
`
