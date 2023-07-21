import { HTMLInputTypeAttribute, HtmlHTMLAttributes } from 'react'
import { ContainerInput } from './styles'

interface IProps extends HtmlHTMLAttributes<HTMLInputElement> {
  type: HTMLInputTypeAttribute
}

export function Input({ type, ...rest }: IProps) {
  return <ContainerInput type={type} {...rest} />
}
