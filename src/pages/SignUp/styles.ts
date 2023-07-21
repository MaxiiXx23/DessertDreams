import styled, { keyframes } from 'styled-components'

import backgroundImage from '@/assets/capcake.svg'

export const ContainerMain = styled.main`
  width: 100%;
  height: 42rem;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: 40rem;
  background-position-x: left;
  background-position-y: bottom;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`
export const ContainerSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`
export const ContainerPresentation = styled.div`
  margin-top: 1rem;
  width: 40%;
  height: 80%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`

const animationTypingTitle = keyframes`

  from {
    width: 0;
  }

  to {
    width: 24.375rem;
    
  }

`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize['3xl']};
  color: ${({ theme }) => theme.primary};
  font-family: ${({ theme }) => theme.fontFamily.oleoScript};

  overflow: hidden;
  letter-spacing: 0.15rem;
  white-space: nowrap;
  animation: ${animationTypingTitle} 3.5s steps(40, end);
`

const animationDescription = keyframes`

  from {
    
    opacity: 0;
  }

  to {
    opacity: 1;
    
  }

`

export const Description = styled.p`
  margin-top: 1rem;
  text-align: center;
  letter-spacing: 0.1rem;

  animation: ${animationDescription} 3.5s ease-in-out;
`

export const Form = styled.form`
  width: 40%;
  height: 80%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`
export const Label = styled.label`
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
export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.text};

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.primary};
  }

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.primary};
    padding: 1rem 1.25rem;
    transition: 0.3s;
  }
`

export const BtnRegister = styled.button`
  cursor: pointer;
  width: 80%;

  padding: 1rem 1.5rem;

  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.primary};
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`
export const WrapperBtn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
