import { CreditCard } from '@phosphor-icons/react'

import { Input } from '../Input'
import { CvvHoverCard } from '../CvvHoverCard'

import {
  ContainerFormPayment,
  Label,
  TitleAdress,
  WrapperTitleAdress,
} from './styles'

export function FormPayment() {
  return (
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
          placeholder="AA"
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
  )
}
