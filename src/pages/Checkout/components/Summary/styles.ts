import styled from 'styled-components'

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
