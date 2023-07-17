import { IconSocialMedia } from '@/components/IconSocialMedia'
import {
  ContainerContacts,
  ContainerImage,
  ContainerMain,
  ContainerSection,
  Subtitle,
  TextSocial,
  Title,
  WrapperIcons,
  WrapperImage,
  WrapperTextSocial,
  WrapperTitle,
} from './styles'

import ConfeiteraSVG from '@/assets/confeitera-contact.svg'

export function Contact() {
  return (
    <ContainerMain>
      <WrapperTitle>
        <Title>Contato</Title>
        <Subtitle>Entre em contato comigo em apenas alguns cliques!</Subtitle>
      </WrapperTitle>
      <ContainerSection>
        <WrapperTextSocial>
          <TextSocial>
            Siga nas redes sociais e fique por dentro das novidades e descontos
            exclusivos!
          </TextSocial>
        </WrapperTextSocial>
        <ContainerImage>
          <ContainerContacts>
            <p>
              Entre em contato comigo a hora que quiser. Escolha a forma de
              contato que deseja e te responderei em instantes!
            </p>
            <WrapperIcons>
              <IconSocialMedia to="#" icon="FacebookLogo" />
              <IconSocialMedia to="#" icon="InstagramLogo" />
              <IconSocialMedia to="#" icon="WhatsappLogo" />
              <IconSocialMedia to="#" icon="Envelope" />
            </WrapperIcons>
          </ContainerContacts>
          <WrapperImage>
            <img
              src={ConfeiteraSVG}
              alt="Imagem Confeitera Fernanda"
              title="Confeitera Fernanda"
            />
          </WrapperImage>
        </ContainerImage>
      </ContainerSection>
    </ContainerMain>
  )
}
