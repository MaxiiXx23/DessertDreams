import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import {
  BtnSubmit,
  ContainerInfos,
  ContainerMain,
  ContainerSection,
  Content,
  Description,
  Form,
  Infos,
  Ingredient,
  InputNumber,
  Label,
  Name,
  WrapperCategory,
  WrapperImage,
} from './styles'

import { IMenuItem } from '@/shared/IMenuItem'
import { simulateFindProduct } from '@/utils/simulateFindProduct'
import { IFormCartProduct } from '@/shared/forms/IFormCartProduct'
import { useDispatch } from 'react-redux'
import { addItem } from '@/shared/redux/Cart/CartReducer'

const schema = z.object({
  id: z.string().uuid(),
  weight: z.coerce.number().default(1),
  amount: z.coerce.number().default(1),
})

export function ViewProduct() {
  const { id } = useParams()
  const [item, setItem] = useState<IMenuItem>()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<IFormCartProduct>({
    resolver: zodResolver(schema),
    defaultValues: {
      id,
      weight: 1,
      amount: 1,
    },
  })

  function handleSubmitCart(data: IFormCartProduct) {
    dispatch(addItem(data))
    reset()
  }

  useEffect(() => {
    if (id) {
      const product = simulateFindProduct(id)
      if (product) {
        setItem(product)
      }
    }
  }, [id, item])
  return (
    <ContainerMain>
      <ContainerSection>
        <ContainerInfos>
          <Name>{item?.name}</Name>
          <Content>
            <WrapperCategory>
              <span>Descrição</span>
            </WrapperCategory>
            <Description>{item?.description}</Description>
            <WrapperCategory>
              <span>Ingredientes</span>
            </WrapperCategory>
            <Infos>
              <Ingredient>
                <strong>Recheio:</strong>
                <span>Amedoim</span>
              </Ingredient>
              <Ingredient>
                <strong>Cobertura:</strong>
                <span>Nutella</span>
              </Ingredient>
              <Ingredient>
                <strong>Peso padrão:</strong>
                <span>1kg</span>
              </Ingredient>
            </Infos>
            <WrapperCategory>
              <span>Adicionar ao carrinho</span>
            </WrapperCategory>
            <Form onSubmit={handleSubmit(handleSubmitCart)}>
              <Label htmlFor="Valor">
                Valor unidade: <h4>{item?.value}</h4>
              </Label>
              <Label htmlFor="Peso">
                Peso(kg):{' '}
                <InputNumber type="number" {...register('weight')} min={1} />
              </Label>
              <Label htmlFor="Quantidade">
                Quantidade:{' '}
                <InputNumber type="number" {...register('amount')} min={1} />
              </Label>
              <BtnSubmit type="submit" disabled={isSubmitting}>
                Adicionar ao carrinho
              </BtnSubmit>
            </Form>
          </Content>
        </ContainerInfos>
        <WrapperImage>
          <img src={item?.image} alt="Imagem Produto" title={item?.name} />
        </WrapperImage>
      </ContainerSection>
    </ContainerMain>
  )
}
