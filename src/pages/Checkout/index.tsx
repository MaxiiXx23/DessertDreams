import { useEffect, useState } from 'react'
import { CreditCard, MapPin } from '@phosphor-icons/react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useSelector } from 'react-redux'

import { axiosCEP } from '@/lib/axios/axiosCEPConfig'
import { AxiosResponse } from 'axios'

import Image from '@/assets/menu/bolo-de-amendoim.png'

import {
  BtnRemoveItem,
  BtnSubmit,
  ContainerFormPayment,
  ContainerInfoDelivere,
  ContainerInputs,
  ContainerMain,
  ContainerSummary,
  ContainerTotalValue,
  Form,
  ImageItem,
  Info,
  Input,
  ItemCart,
  Label,
  List,
  Name,
  Title,
  TitleAdress,
  Value,
  WrapperInfo,
  WrapperInfos,
  WrapperTitleAdress,
} from './styles'
import { IResponseViaCEP } from '@/DTOS/IResponseViaCEP'
import { CvvHoverCard } from './components/CvvHoverCard'
import { IFormCartProduct } from '@/shared/forms/IFormCartProduct'

import { CartState } from '@/shared/redux/Cart/store'

const schema = z.object({
  cep: z.string(),
  street: z.string(),
  number: z.coerce.number(),
  complement: z.string(),
  district: z.string(),
  city: z.string(),
  state: z.string(),
  numberCard: z.string().min(16).max(16),
  nameCard: z.string().max(80),
  dateMonth: z.coerce.number().min(1).max(12),
  dateYear: z.coerce.number(),
  numberCVV: z.coerce.number(),
})

type IFormCheckout = z.infer<typeof schema>

export function Checkout() {
  const [itemsCart, setItemsCart] = useState<IFormCartProduct[]>([])
  const cart = useSelector((state: CartState) => state.items)

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<IFormCheckout>({
    resolver: zodResolver(schema),
  })

  function formattedCEP(cep: string) {
    const cepFormatted = cep.replace(/[^0-9]/g, '')
    return cepFormatted
  }

  const cep: string = watch('cep')

  useEffect(() => {
    async function getDatas(cep: string) {
      const { data }: AxiosResponse<IResponseViaCEP> = await axiosCEP.get(
        `${cep}/json/`,
      )
      if (!data.erro) {
        setValue('street', data.logradouro)
        setValue('district', data.bairro)
        setValue('city', data.localidade)
        setValue('state', data.uf)
      } else {
        reset()
      }
    }

    if (cep && cep.length === 8) {
      const cepFormatted = formattedCEP(cep)
      getDatas(cepFormatted)
    }
  }, [cep, reset, setValue])

  useEffect(() => {
    setItemsCart([...cart])
  }, [cart])

  return (
    <ContainerMain>
      <Form>
        <ContainerInputs>
          <Title>Checkout</Title>
          <ContainerInfoDelivere>
            <WrapperTitleAdress>
              <TitleAdress>
                <MapPin size={18} />
                Endereço de Entrega
              </TitleAdress>
            </WrapperTitleAdress>
            <Label>
              CEP:
              <Input
                type="text"
                {...register('cep')}
                placeholder="Informe o CEP para entrega"
                widthInput={30}
                autoComplete="off"
              />
            </Label>
            <Label>
              Rua:
              <Input
                type="text"
                {...register('street')}
                placeholder="Digite sua rua"
                widthInput={75}
                disabled
              />
            </Label>
            <Label>
              Número:
              <Input
                type="number"
                {...register('number')}
                placeholder="Digite o número"
                widthInput={30}
                autoComplete="off"
              />
            </Label>
            <Label>
              Complemento:
              <Input
                type="text"
                {...register('complement')}
                placeholder="Digite o completo"
                widthInput={75}
                autoComplete="off"
              />
            </Label>
            <Label>
              Bairro:
              <Input
                type="text"
                {...register('district')}
                placeholder="Digite o nome do bairro"
                widthInput={75}
                disabled
              />
            </Label>
            <Label>
              Cidade:
              <Input
                type="text"
                {...register('city')}
                placeholder="Digite o nome da cidade"
                widthInput={75}
                disabled
              />
            </Label>
            <Label>
              Estado:
              <Input
                type="text"
                {...register('state')}
                placeholder="Digite o estado"
                widthInput={30}
                disabled
              />
            </Label>
          </ContainerInfoDelivere>
          <ContainerFormPayment>
            <WrapperTitleAdress>
              <TitleAdress>
                <CreditCard size={18} />
                Forma de pagamento
              </TitleAdress>
            </WrapperTitleAdress>
            <Label>
              Número do cartão:
              <Input
                type="text"
                {...register('numberCard')}
                placeholder="Informe o número do cartão"
                widthInput={50}
              />
            </Label>
            <Label>
              Nome no cartão:
              <Input
                type="text"
                {...register('nameCard')}
                placeholder="Informe o nome do proprietário do cartão"
                widthInput={50}
              />
            </Label>
            <Label>
              Data de Expiração:
              <Input
                type="number"
                {...register('dateMonth')}
                placeholder="MM"
                widthInput={30}
              />
              <Input
                type="number"
                {...register('dateYear')}
                placeholder="AAAA"
                widthInput={30}
              />
            </Label>
            <Label>
              <CvvHoverCard />
              <Input
                type="number"
                {...register('numberCVV')}
                placeholder="123"
                widthInput={50}
              />
            </Label>
          </ContainerFormPayment>
        </ContainerInputs>
        <ContainerSummary>
          <Title>Resumo</Title>
          <List>
            {itemsCart.map((item) => (
              <ItemCart key={item.id}>
                <ImageItem src={Image} alt="Imagem Produto" title="" />
                <WrapperInfos>
                  <Name>Bolo de amendoim</Name>
                  <Info>
                    Quantidade: <strong>{item.amount}</strong>
                  </Info>
                  <Info>
                    Peso: <strong>{item.weight}kg</strong>
                  </Info>
                  <BtnRemoveItem type="button">Remover</BtnRemoveItem>
                </WrapperInfos>
                <Value>R$59,90</Value>
              </ItemCart>
            ))}
          </List>
          <ContainerTotalValue>
            <WrapperInfo>
              <strong>Total dos produtos:</strong>
              <strong>129,90</strong>
            </WrapperInfo>
            <WrapperInfo>
              <strong>Entrega:</strong>
              <strong>29,50</strong>
            </WrapperInfo>
            <WrapperInfo>
              <strong>Total:</strong>
              <strong>169,90</strong>
            </WrapperInfo>
          </ContainerTotalValue>
          <BtnSubmit type="button">Confirmar pedido</BtnSubmit>
        </ContainerSummary>
      </Form>
    </ContainerMain>
  )
}
