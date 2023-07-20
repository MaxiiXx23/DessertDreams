import styled from 'styled-components'

export const ContainerMain = styled.main`
  width: 100%;
  height: 40rem;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const ContainerSection = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContainerInfos = styled.div`
  width: 50%;
  height: 100%;
  max-height: 100%;
  overflow-y: auto;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`
export const Content = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  gap: 1rem;
`

export const Name = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.oleoScript};
  font-size: ${({ theme }) => theme.fontSize.title};
  text-align: center;
`

export const WrapperCategory = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  span {
    color: ${({ theme }) => theme.primary};
    font-size: ${({ theme }) => theme.fontSize['2xl']};
    font-weight: bold;
    margin-left: 1rem;
  }

  border-bottom: 2px solid ${({ theme }) => theme.primary};
`

export const Description = styled.p`
  text-align: justify;
  color: ${({ theme }) => theme.text};
  line-height: 1.6;
`

export const Infos = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0.5rem;
`

export const Ingredient = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`

export const WrapperImage = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 80%;
    width: 100%;
    border-radius: 4px;
  }
`
export const Form = styled.form`
  width: 60%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;
`

export const Label = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const InputNumber = styled.input`
  width: 3rem;
  padding: 0.5rem 1rem;

  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 8px;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
  }
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`

export const BtnSubmit = styled.button`
  cursor: pointer;
  width: 100%;

  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.primary};
  border-radius: 8px;

  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`
