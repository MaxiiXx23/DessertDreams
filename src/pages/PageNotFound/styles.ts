import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const ContainerMain = styled.main`
  width: 100%;

  height: 40rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`
export const ContainerInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  margin-top: 5rem;
`

export const ImageLink = styled(NavLink)`
  text-decoration: none;
`

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.oleoScript};
  font-size: ${({ theme }) => theme.fontSize.title};
  color: ${({ theme }) => theme.black};
`
export const ErrorNumber = styled.strong`
  // font-family: ${({ theme }) => theme.fontFamily.oleoScript};
  font-size: ${({ theme }) => theme.fontSize.title};
  color: ${({ theme }) => theme.primary};
`

export const WrapperAnimation = styled.div`
  width: 10rem;
  height: 10rem;
`
