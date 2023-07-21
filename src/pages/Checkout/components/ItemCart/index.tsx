import { useDispatch } from 'react-redux'

import { removeItem } from '@/shared/redux/Cart/CartReducer'

import {
  BtnRemoveItem,
  ContainerItem,
  ImageItem,
  Info,
  Name,
  Value,
  WrapperInfos,
} from './styles'

interface IProps {
  idItem: string
  pathImage: string
  amount: number
  weight: number
}

export function ItemCart({ idItem, pathImage, amount, weight }: IProps) {
  const dispatch = useDispatch()

  return (
    <ContainerItem>
      <ImageItem src={pathImage} alt="Imagem Produto" title="" />
      <WrapperInfos>
        <Name>Bolo de amendoim</Name>
        <Info>
          Quantidade: <strong>{amount}</strong>
        </Info>
        <Info>
          Peso: <strong>{weight}kg</strong>
        </Info>
        <BtnRemoveItem
          type="button"
          onClick={() => dispatch(removeItem(idItem))}
        >
          Remover
        </BtnRemoveItem>
      </WrapperInfos>
      <Value>R$59,90</Value>
    </ContainerItem>
  )
}
