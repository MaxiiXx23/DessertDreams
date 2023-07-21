import { IFormCartProduct } from '@/shared/forms/IFormCartProduct'

import { Title } from '../Title'

import Image from '@/assets/menu/bolo-de-amendoim.png'

import { BtnSubmit, ContainerSummary, List } from './styles'
import { ItemCart } from '../ItemCart'
import { ContainerTotalValue, WrapperInfo } from '../ItemCart/styles'

interface IProps {
  items: IFormCartProduct[]
  valueTotal: string
  valueDelivere: string
  total: string
}

export function Summary({ items, valueTotal, valueDelivere, total }: IProps) {
  return (
    <ContainerSummary>
      <Title color="white" text="Resumo" />
      <List>
        {items.map((item) => (
          <ItemCart
            key={item.id}
            idItem={item.id}
            pathImage={Image}
            amount={item.amount}
            weight={item.weight}
          />
        ))}
      </List>
      <ContainerTotalValue>
        <WrapperInfo>
          <strong>Total dos produtos:</strong>
          <strong>R${valueTotal}</strong>
        </WrapperInfo>
        <WrapperInfo>
          <strong>Entrega:</strong>
          <strong>R${valueDelivere}</strong>
        </WrapperInfo>
        <WrapperInfo>
          <strong>Total:</strong>
          <strong>R${total}</strong>
        </WrapperInfo>
      </ContainerTotalValue>
      <BtnSubmit type="submit">Confirmar pedido</BtnSubmit>
    </ContainerSummary>
  )
}
