import {
  BtnContact,
  ContainerInfo,
  ContainerMain,
  ContainerSection,
  ContentPresentation,
  FooterPresentation,
  Icon,
  SubText,
  Text,
  Title,
  TitlePresentation,
  WrapperIcons,
} from './styles'

import {
  WhatsappLogo,
  FacebookLogo,
  InstagramLogo,
} from '@phosphor-icons/react'

export function Order() {
  return (
    <ContainerMain>
      <Title>Encomendas</Title>
      <ContainerSection>
        <ContainerInfo>
          <ContentPresentation>
            <TitlePresentation>
              Como funciona para encomendar meus <span>produtos?</span>
            </TitlePresentation>
            <Text>
              Encomendar os produtos da nossa confeitaria é fácil e conveniente.
              Você pode conferir nosso cardápio aqui no site. Lá, você
              encontrará uma variedade de opções tentadoras. Basta navegar pelo
              cardápio online, selecionar os produtos que deseja encomendar e
              será redirecionado ao nosso WhatsApp para o preenchimento de mais
              informações, como data e hora para entrega, localidade para envio,
              entre outros. Caso desejo um produto personalizado, entre em
              contato através das nossas redes sociais para o atendimento
              online.
            </Text>
          </ContentPresentation>
          <FooterPresentation>
            <BtnContact>
              Entre em contato <WhatsappLogo size={32} />
            </BtnContact>
            <SubText>
              ou se <span>preferir:</span>
            </SubText>
            <WrapperIcons>
              <Icon to="#">
                <FacebookLogo size={48} />
              </Icon>
              <Icon to="#">
                <InstagramLogo size={48} />
              </Icon>
            </WrapperIcons>
          </FooterPresentation>
        </ContainerInfo>
      </ContainerSection>
    </ContainerMain>
  )
}
