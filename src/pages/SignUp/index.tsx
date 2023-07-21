import {
  BtnRegister,
  ContainerMain,
  ContainerPresentation,
  ContainerSection,
  Description,
  Form,
  Input,
  Label,
  Title,
  WrapperBtn,
} from './styles'

export function SignUp() {
  return (
    <ContainerMain>
      <ContainerSection>
        <ContainerPresentation>
          <Title>Bem-vindo à DessertDreams!</Title>
          <Description>
            Cadastre-se e encontre o melhor do mundo da confeitaria em um só
            lugar!
          </Description>
        </ContainerPresentation>
        <Form>
          <Label>
            <span>NOME</span>
            <Input type="text" placeholder="Digite o primeiro Nome" />
          </Label>
          <Label>
            <span>SOBRENOME</span>
            <Input type="text" placeholder="Digite o primeiro Nome" />
          </Label>
          <Label>
            <span>E-MAIL</span>
            <Input type="email" placeholder="Digite o e-mail" />
          </Label>
          <Label>
            <span>SENHA</span>
            <Input type="password" placeholder="Digite sua senha" />
          </Label>
          <Label>
            <span>CONFIRME SUA SENHA</span>
            <Input type="password" placeholder="Repita a senha" />
          </Label>
          <Label>
            <span>TELEFONE</span>
            <Input type="tel" placeholder="Informe seu telefone celular" />
          </Label>

          <WrapperBtn>
            <BtnRegister type="submit">Cadastrar</BtnRegister>
          </WrapperBtn>
        </Form>
      </ContainerSection>
    </ContainerMain>
  )
}
