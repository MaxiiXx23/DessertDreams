import styled from 'styled-components'

import backgroundImage from '@/assets/brigadeiro.svg'

export const ContainerMain = styled.main`
  width: 100%;
  height: 40rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: 32rem;
  background-position-x: left;
  background-position-y: 5.75rem;
`
export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.title};
  font-family: ${({ theme }) => theme.fontFamily.oleoScript};
`
export const ContainerSection = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const ContainerInfo = styled.div`
  width: 39.875rem;
  height: 33.25rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 3rem;
`
export const ContentPresentation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`

export const TitlePresentation = styled.h5`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.black};

  span {
    color: ${({ theme }) => theme.primary};
  }
`

export const Text = styled.p`
  line-height: 1.6;
`
export const FooterPresentation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`
export const BtnContact = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  padding: 0.25rem 4.625rem;
  border-radius: 16px;

  background-color: ${({ theme }) => theme.primary};

  color: ${({ theme }) => theme.white};

  font-size: ${({ theme }) => theme.fontSize.xl};

  &:hover {
    opacity: 0.9;
  }
`

export const SubText = styled.p`
  color: ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;

  span {
    color: ${({ theme }) => theme.primary};
  }
`

export const WrapperIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1.5rem;
`
