import { useEffect, useState } from 'react'

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useSelector } from 'react-redux'

import { axiosCEP } from '@/lib/axios/axiosCEPConfig'
import { AxiosResponse } from 'axios'

import { ContainerInputs, ContainerMain, Form } from './styles'

import { IResponseViaCEP } from '@/DTOS/IResponseViaCEP'
import { IFormCartProduct } from '@/shared/forms/IFormCartProduct'

import { CartState } from '@/shared/redux/Cart/store'
import { formatValue } from '@/utils/formatValue'
import { Summary } from './components/Summary'
import { Title } from './components/Title'
import { FormAddress } from './components/FormAddress'
import { FormPayment } from './components/FormPayment'

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
  dateYear: z.coerce.number().min(23),
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
            <Title color="pink" text="Checkout" />
            <FormAddress />
            <FormPayment />
          </ContainerInputs>
          <Summary
            items={itemsCart}
            valueTotal={valueTotal}
            valueDelivere={delivere}
            total={total}
          />
        </Form>
      </FormProvider>
    </ContainerMain>
  )
}
