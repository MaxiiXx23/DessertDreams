import { useEffect, useState } from 'react'
import { CreditCard, MapPin } from '@phosphor-icons/react'

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useDispatch, useSelector } from 'react-redux'

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
import { removeItem } from '@/shared/redux/Cart/CartReducer'
import { formatValue } from '@/utils/formatValue'
import { Input } from './components/Input'

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
  valueTotalProducts: z.number(),
})

type IFormCheckout = z.infer<typeof schema>

export function Checkout() {
  const [itemsCart, setItemsCart] = useState<IFormCartProduct[]>([])
  const [valueTotal, setValueTotal] = useState<string>('')
  const [delivere, setDelivere] = useState<string>('')
  const [total, setTotal] = useState<string>('')
  const {
    items,
    valueTotal: valueT,
    delivere: valueD,
  } = useSelector((state: CartState) => state)
  const dispatch = useDispatch()

  const formCheckout = useForm<IFormCheckout>({
    resolver: zodResolver(schema),
    defaultValues: {
      complement: '',
    },
  })

  const { handleSubmit, watch, reset, setValue } = formCheckout

  async function submitFormCheckout(data: IFormCheckout) {
    console.log(data)
  }

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
    if (items.length > 0) {
      setItemsCart([...items])
      setValueTotal(formatValue(valueT))
      setDelivere(formatValue(valueD))
      const totalFormtted = formatValue(valueT + valueD)
      setTotal(totalFormtted)
      const total = Number((valueT + valueD).toFixed(2))
      setValue('valueTotalProducts', total)
    } else {
      setItemsCart([])
      setValueTotal('0')
      setDelivere('0')
      setTotal('0')
    }
  }, [items, valueT, valueD, setValue])

  return (
    <ContainerMain>
      <FormProvider {...formCheckout}>
        <Form onSubmit={handleSubmit(submitFormCheckout)}>
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
                  nameRegister="cep"
                  placeholder="Informe o CEP para entrega"
                  widthinput={30}
                />
              </Label>
              <Label>
                Rua:
                <Input
                  type="text"
                  nameRegister="street"
                  placeholder="Digite sua rua"
                  widthinput={75}
                  disabled
                />
              </Label>
              <Label>
                Número:
                <Input
                  type="number"
                  nameRegister="number"
                  placeholder="Digite o número"
                  widthinput={30}
                />
              </Label>
              <Label>
                Complemento:
                <Input
                  type="text"
                  nameRegister="complement"
                  placeholder="Digite o completo"
                  widthinput={75}
                />
              </Label>
              <Label>
                Bairro:
                <Input
                  type="text"
                  nameRegister="district"
                  placeholder="Digite o nome do bairro"
                  widthinput={75}
                  disabled
                />
              </Label>
              <Label>
                Cidade:
                <Input
                  type="text"
                  nameRegister="city"
                  placeholder="Digite o nome da cidade"
                  widthinput={75}
                  disabled
                />
              </Label>
              <Label>
                Estado:
                <Input
                  type="text"
                  nameRegister="state"
                  placeholder="Digite o estado"
                  widthinput={30}
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
                  nameRegister="numberCard"
                  placeholder="Informe o número do cartão"
                  widthinput={50}
                />
              </Label>
              <Label>
                Nome no cartão:
                <Input
                  type="text"
                  nameRegister="nameCard"
                  placeholder="Informe o nome do proprietário do cartão"
                  widthinput={50}
                />
              </Label>
              <Label>
                Data de Expiração:
                <Input
                  type="number"
                  nameRegister="dateMonth"
                  placeholder="MM"
                  widthinput={30}
                />
                <Input
                  type="number"
                  nameRegister="dateYear"
                  placeholder="AAAA"
                  widthinput={30}
                />
              </Label>
              <Label>
                <CvvHoverCard />
                <Input
                  type="number"
                  nameRegister="numberCVV"
                  placeholder="123"
                  widthinput={50}
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
                    <BtnRemoveItem
                      type="button"
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      Remover
                    </BtnRemoveItem>
                  </WrapperInfos>
                  <Value>R$59,90</Value>
                </ItemCart>
              ))}
            </List>
            <ContainerTotalValue>
              <WrapperInfo>
                <strong>Total dos produtos:</strong>
                <strong>R${valueTotal}</strong>
              </WrapperInfo>
              <WrapperInfo>
                <strong>Entrega:</strong>
                <strong>R${delivere}</strong>
              </WrapperInfo>
              <WrapperInfo>
                <strong>Total:</strong>
                <strong>R${total}</strong>
              </WrapperInfo>
            </ContainerTotalValue>
            <BtnSubmit type="submit">Confirmar pedido</BtnSubmit>
          </ContainerSummary>
        </Form>
      </FormProvider>
    </ContainerMain>
  )
}
