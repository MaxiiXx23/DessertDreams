import styled from 'styled-components'

import backgroundImage from '@/assets/cake.svg'
import backgroundImage2 from '@/assets/capcake.svg'

export const ContainerMain = styled.main`
  width: 100%;
  height: 42rem;
  background-image: url(${backgroundImage}), url(${backgroundImage2});
  background-repeat: no-repeat, no-repeat;
  background-size: 40rem, 20rem;
  background-position-x: right, left;
  background-position-y: bottom, bottom;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`
export const ContainerInfo = styled.div`
  width: 35.375rem;
  height: 20.875rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
`

export const WrapperPresentation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;

  margin-top: 4rem;
  margin-left: 3rem;

  p {
    text-align: left;
    line-height: 1.3;
  }
`
export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.title};
  font-family: ${({ theme }) => theme.fontFamily.oleoScript};
`

export const BtnMenu = styled.button`
  background-color: ${({ theme }) => theme.primary};
  padding: 0.5rem 4.625rem;
  border-radius: 16px;
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.white};
`
