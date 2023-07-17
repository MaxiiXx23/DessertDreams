import { ContainerLink } from './styles'

import {
  WhatsappLogo,
  FacebookLogo,
  InstagramLogo,
  Envelope,
} from '@phosphor-icons/react'

type icons = 'WhatsappLogo' | 'FacebookLogo' | 'InstagramLogo' | 'Envelope'

interface IIconSocialMediaProps {
  to: string
  icon: icons
}

export function IconSocialMedia({ to, icon }: IIconSocialMediaProps) {
  const icons = {
    WhatsappLogo: <WhatsappLogo size={32} />,
    FacebookLogo: <FacebookLogo size={32} />,
    InstagramLogo: <InstagramLogo size={32} />,
    Envelope: <Envelope size={32} />,
  }
  return <ContainerLink to={to}>{icons[icon]}</ContainerLink>
}
