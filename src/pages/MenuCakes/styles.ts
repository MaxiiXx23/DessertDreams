import styled from 'styled-components'

export const ContainerMain = styled.main`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`
export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.oleoScript};
  font-size: ${({ theme }) => theme.fontSize.title};

  span {
    color: ${({ theme }) => theme.primary};
  }
`

export const ContainerSection = styled.section`
  width: 100%;
`

export const List = styled.ul`
  margin-top: 2rem;
  display: grid;
  align-content: center;
  justify-content: space-around;
  grid-template-columns: auto auto auto;

  row-gap: 1rem;

  list-style-type: none;
`
