import styled from 'styled-components'

export const ContainerItem = styled.li`
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
