import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.li`
  width: 16rem;
  height: 20rem;

  background-color: ${({ theme }) => theme.primary};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 0.5rem;

  border-radius: 8px;
  overflow: hidden;
  img {
    width: 100%;
    height: 50%;
  }
`
export const Content = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 1rem;
`
export const Name = styled.strong`
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-family: ${({ theme }) => theme.fontFamily.oleoScript};
  text-align: center;
`

export const Description = styled.p`
  width: 80%;
  text-align: center;
  color: ${({ theme }) => theme.text};
`
export const WrapperValue = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const Value = styled.span`
  strong {
    font-size: ${({ theme }) => theme.fontSize['2xl']};
    font-family: ${({ theme }) => theme.fontFamily.oleoScript};
  }
`
export const BtnIconCart = styled(NavLink)`
  cursor: pointer;
  background-color: ${({ theme }) => theme.white};

  color: ${({ theme }) => theme.primary};

  text-decoration: none;

  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  &:hover {
    opacity: 0.9;
  }
`
