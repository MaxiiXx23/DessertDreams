import { Info } from '@phosphor-icons/react'
import { Arrow, Content, Portal, Root, Trigger } from './styles'

import CVVIcon from '@/assets/icons/CVVICon.svg'

export function CvvHoverCard() {
  return (
    <Root>
      <Trigger asChild>
        <span>
          CVV
          <Info size={18} />
        </span>
      </Trigger>
      <Portal>
        <Content className="HoverCardContent" sideOffset={5}>
          <img src={CVVIcon} alt="icon" title="CVV icone" />

          <strong>CVV são os 3 números atrás do cartão.</strong>

          <Arrow className="HoverCardArrow" />
        </Content>
      </Portal>
    </Root>
  )
}
