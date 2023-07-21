import { Input } from '@/components/Input'
import { ContainerForm, WrapperBtn } from './styles'
import { BtnConfirm } from '@/components/BtnConfirm'
import { LabelInput } from '@/components/LabelInput'

export function Form() {
  return (
    <ContainerForm>
      <LabelInput text="NOME">
        <Input type="text" placeholder="Digite o primeiro Nome" />
      </LabelInput>
      <LabelInput text="SOBRENOME">
        <Input type="text" placeholder="Digite seu Sobrenome" />
      </LabelInput>
      <LabelInput text="E-MAIL">
        <Input type="email" placeholder="Digite o e-mail" />
      </LabelInput>
      <LabelInput text="SENHA">
        <Input type="password" placeholder="Digite sua senha" />
      </LabelInput>
      <LabelInput text="CONFIRME SUA SENHA">
        <Input type="password" placeholder="Repita a senha" />
      </LabelInput>
      <LabelInput text="TELEFONE">
        <Input type="tel" placeholder="Informe seu telefone celular" />
      </LabelInput>

      <WrapperBtn>
        <BtnConfirm type="submit" text="Cadastrar" />
      </WrapperBtn>
    </ContainerForm>
  )
}
