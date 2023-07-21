import { Input } from '@/components/Input'
import { ContainerForm, WrapperBtn } from './styles'
import { BtnConfirm } from '@/components/BtnConfirm'
import { LabelInput } from '@/components/LabelInput'

export function FormLogin() {
  return (
    <ContainerForm>
      <LabelInput text="E-MAIL">
        <Input type="email" placeholder="Digite o e-mail" />
      </LabelInput>
      <LabelInput text="SENHA">
        <Input type="password" placeholder="Digite sua senha" />
      </LabelInput>
      <WrapperBtn>
        <BtnConfirm type="submit" text="Entrar" />
      </WrapperBtn>
    </ContainerForm>
  )
}
