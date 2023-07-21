import { Form } from './form'
import {
  ContainerMain,
  ContainerPresentation,
  ContainerSection,
  Description,
  Title,
} from './styles'

export function SignUp() {
  return (
    <ContainerMain>
      <ContainerSection>
        <ContainerPresentation>
          <Title>Bem-vindo à DessertDreams!</Title>
          <Description>
            Cadastre-se e encontre o melhor do mundo da confeitaria em um só
            lugar!
          </Description>
        </ContainerPresentation>
        <Form />
      </ContainerSection>
    </ContainerMain>
  )
}
