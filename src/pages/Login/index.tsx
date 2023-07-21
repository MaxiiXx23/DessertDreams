import { useEffect, useState } from 'react'
import { FormLogin } from './components/form'
import {
  ContainerMain,
  ContainerPresentation,
  ContainerSection,
  Description,
  Title,
} from './styles'
import { returnMessageLogin } from '@/utils/returnMessageLogin'

export function Login() {
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    setMessage(returnMessageLogin())
  }, [])
  return (
    <ContainerMain>
      <ContainerSection>
        <ContainerPresentation>
          <Title>Olá! Tenha {message}</Title>
          <Description>
            Faça Login, encontre os doces dos seus sonhos aqui, faça seu pedido
            e muito mais!
          </Description>
        </ContainerPresentation>
        <FormLogin />
      </ContainerSection>
    </ContainerMain>
  )
}
