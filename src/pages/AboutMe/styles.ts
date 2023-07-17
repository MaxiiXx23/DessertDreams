import styled from 'styled-components'

import backgroundImage from '@/assets/backgroundImageAboutMe.svg'

export const ContainerMain = styled.main`
  width: 100%;
  height: 60rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: 32rem;
  background-position-x: right;
  background-position-y: bottom;
`
export const ContainerSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  img {
    height: 36rem;
    margin-top: -4rem;
    margin-left: 3rem;
  }
`
export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.title};
  font-family: ${({ theme }) => theme.fontFamily.oleoScript};
  color: ${({ theme }) => theme.black};
  span {
    color: ${({ theme }) => theme.primary};
  }
`
export const ContainerInfos = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 2.5rem;
`

export const ContentTexts = styled.div`
  width: 36rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;

  p {
    line-height: 1.6;
    text-align: justify;
  }
`
export const ContainerFooter = styled.div`
  width: 70%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  margin-top: 7rem;

  p {
    text-align: justify;
    width: 55%;
  }
`

export const TitleFooter = styled.h1`
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fontFamily.oleoScript};
  color: ${({ theme }) => theme.black};
  span {
    color: ${({ theme }) => theme.primary};
  }
`
