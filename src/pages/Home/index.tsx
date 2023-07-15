import { Header } from '@/components/Header'
import {
  BtnMenu,
  ContainerInfo,
  ContainerMain,
  Title,
  WrapperPresentation,
} from './styles'

export function Home() {
  return (
    <ContainerMain>
      <Header colorMenus="white" />
      <ContainerInfo>
        <WrapperPresentation>
          <Title>Dessert Dreams</Title>
          <p>
            Aqui, cada criação é uma obra-prima artesanal, feita com carinho e
            dedicação. Tenho um talentoso dominio na arte da confeitaria,
            criando delícias visualmente deslumbrantes que são tão boas quanto
            parecem. Cada mordida é uma explosão de sabores, levando você a um
            mundo de pura felicidade açucarada.
          </p>
        </WrapperPresentation>
        <BtnMenu type="button" aria-label="Veja o cardápio">
          Veja o cardápio
        </BtnMenu>
      </ContainerInfo>
    </ContainerMain>
  )
}
