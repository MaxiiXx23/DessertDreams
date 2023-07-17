import styled from 'styled-components'

import backgroundImage from '@/assets/backgroundContact.svg'

export const ContainerMain = styled.main`
  width: 100%;
  height: 40rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: 18rem;
  background-position-x: left;
  background-position-y: bottom;
`
export const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.75rem;
`
export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.title};
  font-family: ${({ theme }) => theme.fontFamily.oleoScript};
`
export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
`
export const ContainerSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const WrapperTextSocial = styled.div`
  width: 17rem;
  margin-left: 0.5rem;
`
export const TextSocial = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-family: ${({ theme }) => theme.fontFamily.oleoScript};
  color: ${({ theme }) => theme.white};
  text-align: center;
`
export const ContainerImage = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`
export const ContainerContacts = styled.div`
  width: 19.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;

  top: 4rem;
  left: 0;

  gap: 2rem;

  p {
    width: 80%;
    margin-left: 1rem;
  }
`
export const WrapperImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 32rem;
    margin-top: -5rem;
    margin-left: 2rem;
  }
`
export const WrapperIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`
