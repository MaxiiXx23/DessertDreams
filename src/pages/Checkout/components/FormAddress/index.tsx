import { MapPin } from '@phosphor-icons/react'
import {
  ContainerInfoDelivere,
  Label,
  TitleAdress,
  WrapperTitleAdress,
} from './styles'
import { Input } from '../Input'

export function FormAddress() {
  return (
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
  )
}
