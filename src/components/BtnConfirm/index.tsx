import { ButtonHTMLAttributes } from 'react'
import { ContainerBtn } from './styles'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export function BtnConfirm({ text, ...rest }: IProps) {
  return <ContainerBtn {...rest}>{text}</ContainerBtn>
}
