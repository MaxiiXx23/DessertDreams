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
  id: string
  pathImage: string
  name: string
  description: string
  value: string
}

export function CardProduct({
  id,
  pathImage,
  name,
  description,
  value,
}: ICardProduct) {
  return (
    <Container>
      <img src={pathImage} alt="Imagem do produto" title={name} />
      <Content>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <WrapperValue>
          <Value>
            R$<strong>{value}</strong>
          </Value>
          <BtnIconCart
            to={`/produto/${id}`}
            aria-label="Botão adicionar ao carrinho"
          >
            <ShoppingCart size={18} />
          </BtnIconCart>
        </WrapperValue>
      </Content>
    </Container>
  )
}
