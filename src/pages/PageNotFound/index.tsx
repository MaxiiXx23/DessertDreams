import { useLottie } from 'lottie-react'

import {
  ContainerInfos,
  ContainerMain,
  ErrorNumber,
  ImageLink,
  Title,
  WrapperAnimation,
} from './styles'

import Logo from '@/assets/Logo.svg'
import AnimationCake from '@/assets/animations/animationCupcake.json'

export function PageNotFound() {
  const options = {
    animationData: AnimationCake,
    loop: true,
  }

  const { View } = useLottie(options)

  return (
    <ContainerMain>
      <ImageLink to="/">
        <img src={Logo} alt="Logo do site" title="Logo" />
      </ImageLink>
      <ContainerInfos>
        <Title>Página não encontrada!</Title>
        <ErrorNumber>404</ErrorNumber>
        <WrapperAnimation>{View}</WrapperAnimation>
      </ContainerInfos>
    </ContainerMain>
  )
}
