import { ShoppingCart } from '@phosphor-icons/react'

import {
  BtnIconCart,
  Container,
  Content,
  Description,
  Name,
  Value,
  WrapperValue,
} from './styles'

interface ICardProduct {
  pathImage: string
  name: string
  description: string
  value: string
}

export function CardProduct({
  pathImage,
  name,
  description,
  value,
}: ICardProduct) {
  return (
    <Container>
      <img src={pathImage} alt="Imagem do produto" title="Imagem do produto" />
      <Content>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <WrapperValue>
          <Value>
            R$<strong>{value}</strong>
          </Value>
          <BtnIconCart type="button">
            <ShoppingCart size={18} />
          </BtnIconCart>
        </WrapperValue>
      </Content>
    </Container>
  )
}
